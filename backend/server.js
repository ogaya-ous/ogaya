import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import multer from 'multer';


const app = express();
app.use(cors());
app.use(express.static('public'));

const prisma = new PrismaClient();

// 画像を保存するためのストレージ
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

// 画像をアップロードするためのミドルウェア
const upload = multer({ storage: storage });


// ファイルアップロード用のルーティングを設定する
app.post('/api/upload', upload.single('image'), (req, res) => {
  // アップロードされた画像が存在しない場合は、処理を中断する
  console.log('access to /api/upload')
  if (!req.file) {
    res.status(400).send('画像が選択されていません');
    return;
  }

  // 保存先のディレクトリが存在しない場合は、作成する
  if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images');
  }

  // アップロードされた画像のパスを取得する
  let documentPath = req.file.path;
  documentPath = documentPath.slice(7, documentPath.length)
  // bodyのタイトルを取得する
  let documentName = req.body.name;
  // bodyの文書の説明を取得する
  let documentExplain = req.body.document_explain;

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  // prisma
  prisma.document.create({
    data: {
      document_name: documentName,
      document_path: documentPath,
      document_explain: documentExplain,
      added_year: currentYear,
      added_month: currentMonth,
      added_day: currentDay
    }
  }).then((results) => {
    console.log('画像のパスを格納しました');
    res.status(200).send('画像をアップロードしました');
  }).catch((error) => {
    console.log(error);
  });
});


app.post('/api/decode', upload.single('decode'), (req, res) => {
  //コメントが空の場合は，処理を中断する
  if (!req.body.comment) {
    res.status(400).send('テキストが入力されていません.');
    return;
  }

  // bodyの解読文を取得
  let commant = req.body.decode;

  // prisma用のコードに変更
  prisma.decoder.create({
    data: {
      decoding_content: commant
    }
  }).then((results) => {
    console.log('解読テキストを保存しました．');
    res.status(200).send('テキストをアップロードしました．');
  }).catch((error) => {
    console.log(error);
  });
})


app.get('/api/document/:page', (req, res) => {
  console.log('access to /api/document/:page')
  // 1ページに表示する枚数
  const dispCount = 5;

  // 開始位置
  let start_to = (req.params.page - 1) * 5;

  // prisma用のコードに変更
  prisma.document.findMany({
    skip: start_to,
    take: dispCount,
    orderBy: {
      document_id: 'desc'
    }
  }).then((results) => {
    res.status(200).send(results);
  }).catch((error) => {
    console.log(error);
  });
});


// Webサーバーを起動する
app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});



/*

prismaのschema.prisma

model document {
  document_id     Int       @id @default(autoincrement())
  document_name   String
  document_path   String
  document_explain String
  added_year      Int
  added_month     Int
  added_day       Int
}

model decoder {
  decoder_id  Int      @id @default(autoincrement())
  name        String
  affiliation String
  specialty   String
  history     history[]
}

model history {
  history_id         Int       @id @default(autoincrement())
  document_id        Int
  decoder_id         Int
  decoding_datetime  DateTime
  decoding_content   String
  document           document  @relation(fields: [document_id], references: [document_id])
  decoder            decoder   @relation(fields: [decoder_id], references: [decoder_id])
}

*/
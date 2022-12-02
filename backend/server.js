import express from 'express';
import fs from 'fs';
import multer from 'multer';
import mysql from 'mysql2';


const app = express();

// MySQLとの接続情報を定義
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'document_db'
});

connection.connect((err) => {
  if (err) {
    // エラーが発生した場合は、エラーを表示
    console.error(err.message);
    return;
  }
});

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

function uploadImage(app) {
  // ファイルアップロード用のルーティングを設定する
  app.post('/upload', upload.single('image'), (req, res) => {
    // アップロードされた画像が存在しない場合は、処理を中断する
    if (!req.file) {
      res.status(400).send('画像が選択されていません');
      return;
    }

    // 保存先のディレクトリが存在しない場合は、作成する
  if (!fs.existsSync('./public/images')) {
    fs.mkdirSync('./public/images');
  }

    // アップロードされた画像のパスを取得する
    const imagePath = req.file.path;

    // データベースに接続し、SQLを実行
    connection.connect();
    connection.query(
      "INSERT INTO DOC VALUES (1, 'test', (?), '20221202')",
      [imagePath],
      function(error, results, fields) {
        // 接続を解除する
        connection.end();
        // エラーがあれば表示す
        if (error) {
          console.log(error);
          return;
        }
        console.log('画像のパスを格納しました');
        res.json({
          message: '画像をアップロードしました'
        });
      }
    );
  });
}

// Webサーバーを起動する
app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
  uploadImage(app)
});

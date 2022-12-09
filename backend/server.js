import express from 'express';
import fs from 'fs';
import multer from 'multer';
import mysql from 'mysql2';


const app = express();

// MySQLとの接続情報を定義 (document_db)
const connection_doc = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'document_db'
});


connection_doc.connect((err) => {
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
  //bodyのタイトルを取得する
  const imageTitle = req.body.title;

  // データベースに接続し、SQLを実行
  connection_doc.query(
    "INSERT INTO document VALUES (13, (?), (?), '20221202', 0)",
    [imageTitle, imagePath],
    function(error, results, fields) {
      // エラー
      if (error) {
        console.log(error);
        return;
      }
      console.log('画像のパスを格納しました');
      res.status(200).send('画像をアップロードしました');
    }
  );
});


app.post('/decode', upload.single('decode'), (req, res) => {
  //コメントが空の場合は，処理を中断する
  if (!req.body.comment) {
    res.status(400).send('テキストが入力されていません.');
    return;
  }

  // bodyの解読文を取得
  const commant = req.body.decode;

  // データベースに接続し，SQLを実行
  connection_doc.query(
    "",
    function(error, results, fields) {
      // エラー
      if (error) {
        console.log(error);
        return;
      }
      console.log('解読テキストを保存しました．');
      res.status(200).send('テキストをアップロードしました．');
    }
  );
})

// Webサーバーを起動する
app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});


/*

テーブル作成例メモ

CREATE TABLE document (
  document_id INT NOT NULL AUTO_INCREMENT,
  document_name VARCHAR(255) NOT NULL,
  owner VARCHAR(255) NOT NULL,
  collection_site VARCHAR(255) NOT NULL,
  discovery_year INT NOT NULL,
  discovery_location VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  PRIMARY KEY (document_id)
  );

  CREATE TABLE decoder (
  decoder_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  affiliation VARCHAR(255) NOT NULL,
  specialty VARCHAR(255) NOT NULL,
  PRIMARY KEY (decoder_id)
  );

  CREATE TABLE history (
  history_id INT NOT NULL AUTO_INCREMENT,
  document_id INT NOT NULL,
  decoder_id INT NOT NULL,
  decoding_datetime DATETIME NOT NULL,
  decoding_content VARCHAR(255) NOT NULL,
  PRIMARY KEY (history_id),
  FOREIGN KEY (document_id) REFERENCES document (document_id),
  FOREIGN KEY (decoder_id) REFERENCES decoder (decoder_id)
  );
*/
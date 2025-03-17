const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'mysql' // 엑세스 할 데이터베이스
});

connection.connect((err) => {
  if (err) {
    console.log('database 연결 실패', err);
    return;
  }
  console.log('database 연결 성공');
});

module.exports = connection;
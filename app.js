const express = require('express');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '111111',
  database : 'mysql'
});
const port = 3000;

connection.connect();

connection.query('SELECT * FROM node_todo', (error, rows, fields) => {
  if (error)
    throw error;
  console.log('node_todo info is : ', rows);
});

connection.end();
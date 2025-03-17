const express = require('express');
const connection = require('../config/db.js');

const router = express.Router();

// 전체 값 조회하기 (read)
router.get('/readAll', (req, res) => {
	connection.query("SELECT * FROM node_todo", (err, rows) => {
		if(err) {
            console.log('에러 발생 ', err);
        }
    	else {
            console.log(rows); 
            res.json(rows);
        }
    });
});

module.exports = router;
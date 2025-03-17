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

//특정 값 조회하기 (read)
router.get('/read/:id', (req, res) => {
	const id = req.params.id
	connection.query("SELECT * FROM node_todo WHERE id= ?", id, function(err, rows){
		if(err)
            console.log('에러 발생 ', err);
    	console.log(rows);
        res.json(rows);
    });
});

// todo 추가하기 (create)
router.post('/create', (req, res) => {
    const todo = req.body.todo;
	connection.query("INSERT INTO node_todo (todo) VALUES (?);", todo, function(err, rows){
		if(err)
            console.log('에러 발생 ', err);
		console.log(rows);
        res.json({ message: '할 일이 추가되었습니다!'});
	})
});

// 수정하기 (update)
router.put('/update/:id',  (req, res) => {
    const todo = req.body.todo;
    const id = req.params.id;
	connection.query("UPDATE node_todo SET todo = (?) WHERE id= (?);", [todo, id], function(err, rows){
		if(err)
            console.log('에러 발생 ', err);
        console.log(rows);
        res.json({ message: 'todo가 수정되었습니다!'});
	});
});

// 삭제하기
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM node_todo WHERE id=(?);", id, function(err, rows) {
        if (err)
            console.log('에러 발생', err);
        console.log(rows);
        res.json({message: 'todo가 삭제되었습니다.'});
    });
});

module.exports = router;
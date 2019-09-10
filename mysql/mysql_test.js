var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test'
});

connection.connect();

connection.query('select 1+1 AS solution', function(error, results, fields) {
	if(error) throw error;
	console.log('The solution is: ' + results[0].solution);
});

var sql = "select * from websites";

connection.query(sql, function(err, result) {
	if(err) {
		console.log('[select error] - ' + err.message);
		return;
	}
	console.log('-----------SELECT------------');
	console.log(result);
	console.log('-----------------------------');
});

var addSql = "insert into websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)";
var addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];

connection.query(addSql, addSqlParams, function(err, result) {
	if(err) {
		console.log('[insert error] - ' + err.message);
		return;
	}
	console.log('-----------SELECT------------');
	console.log('insert ID: ' + result.insertId);
	console.log('-----------------------------');
});

var updateSql = "UPDATE websites SET name = ?,url = ? WHERE Id = ?";
var updateSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];

connection.query(updateSql, updateSqlParams, function(err, result) {
	if(err) {
		console.log('[UPDATE error] - ' + err.message);
		return;
	}
	console.log('-----------SELECT------------');
	console.log('UPDATE affectedRows: ' + result.affectedRows);
	console.log('-----------------------------');
});

var deleteSql = 'DELETE FROM websites where id=6';

connection.query(deleteSql, function(err, result) {
	if(err) {
		console.log('[Delete error] - ' + err.message);
		return;
	}
	console.log('-----------SELECT------------');
	console.log('Delete affectedRows: ' + result.affectedRows);
	console.log('-----------------------------');
});
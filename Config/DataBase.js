var dbconfig=require('mssql');
var connection = dbconfig.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'QuizAppDB'

});

module.exports=connection;

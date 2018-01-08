/*var dbconfig=require('mssql');
var connection = dbconfig.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'QuizAppDB'

});
connection.connect();
*/
/*var sql=require('mssql');
  var config={
    user:'sa',
    password:'fazal123',
    database:'QuizAppDB',
    server:'localhost'
  };
  var connection=new sql.ConnectionPool();
    var request=new sql.Request(connection);
    request.query('Select 1+1 As solution',function(error,result,fields){
      if(error) throw error;
    console.console.log('Total records are:',result[0].solution);
    });
*/
var sql=require('mssql');
var config = {
    user: 'sa',
    password: 'fazal123',
    server: 'localhost',
    database: 'QuizAppDB'
};

// connect to your database
var request;
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
     request = new sql.Request();

    // query to the database and get the records
});
/*module.exports=request;*/

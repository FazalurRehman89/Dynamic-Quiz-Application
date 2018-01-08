var AdminCtrl={
index:function(req, res, next){

/*  const db=require('../Models/Users');*/
  var name=  req.body.txtUserName;
  var Password=req.body.txtPassword;
  var QTy=req.QType;
  var QName=req.inputQuizName;
  var Op1=req.inputOption1;
  var Op2=req.inputOption2;
  var Op3=req.inputOption3;
  var Op4=req.inputOption4;
  var QuestionInput=req.inputQuestion;

  console.log(name);
  console.log(Password);

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
/*      request.query('Insert into Question2 (QuizType,QuizName,Question,Option1,Option2,Option3,Answer) Values(1,2,5,5,55,66,4)', function (err, recordset) {*/
request.query('Insert into Question2 (QuizType,QuizName,Question,Option1,Option2,Option3,Answer) Values(1,2,5,5,55,66,4)', function (err, recordset) {
  /*request.query('Insert into Question (QuizType,QuizName,Question,Option1,Option2,Option3,Answer) Values('{0}','{1}','{2}','{3}','{4}','{5}','{6}')',[QTy,QName,QuestionInput,Op1,Op2,Op3,Op4], function (err, recordset) {*/
          if (err) console.log(err)
          // send records as a response
          console.log(recordset);
          sql.close();
  });
     // query to the database and get the records
 });




    res.render('AdminHome', { title: 'Admin Controller' });
}/*,
auth: function(req,res){

  var user=req.body.txtUserName;
  var Password=req.body.txtPassword;
  console.log(user);
  console.log(Password);

}*/
}

module.exports=AdminCtrl; /*Export File*/

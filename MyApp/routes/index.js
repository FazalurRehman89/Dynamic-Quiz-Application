var express = require('express');
var router = express.Router();
var AdminCtrl=require('../Controller/CtrlAdminHome');
var LoginControler=require('../Controller/CtrlLogin');
var UserControler=require('../Controller/User');
/* GET home page. */
/*.title : is the key basicaly we can pass mulitple key or variable in array like title, its basicall get data (json) and send to view*/

router.get('/Login',LoginControler.index);
/*router.post('/Login',LoginControler.auth);*/

router.get('/AdminHome',AdminCtrl.index );
router.post('/AdminHome',AdminCtrl.index);

router.get('/',function(req,res,next){
  GetData(function(recordset){
    res.render('index',{Users:recordset})
  });
});
/*function GetData(callback)
{
  var sql=require('mssql');
  var config={
    user:'sa',
    password:'',
    database:'QuizAppDB',
    server:'localhost'
  };
  var connection=new sql.ConnectionPool(config,function(err)
  {
    var request=new sql.Request(connection);
    request.query('Select * from Users',function(err,recordset)
    {
      callback(recordset);
    });
  });
}*/
module.exports = router;

var express=require("express");
var mysql=require("mysql");
var router=express();

var connection=mysql.createConnection({
    host:"localhost",
    database:"exam",
    user:"dac",
    password:"dac"
});
connection.connect()
router.get("/",(request,response)=>{
    var queryText="select * from employee";
    connection.query(queryText,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err));
        }
    });
});

module.exports=router;

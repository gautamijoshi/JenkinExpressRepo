var express=require("express");
var app=express();
var empRouter=require("./employee");
app.use(express.json());

app.use(function(request,response,next){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","POST,GET,PUT,DELETE");
    response.header("Access-Control-Allow-Headers","Origin,X-Required-With,Content-Type");
    next();
});

app.use("/emp",empRouter);

app.listen(9898,()=>{
    console.log("Node server started...");
});
var express=require("express");
var BD = require("./DataBase/BD")
var config_general = require("./config-general.json")
var app= express();



app.set("view engine", "pug")
app.set('views', './resource/views')
/*BD.updateData("tabla",{'id':3},{'nombre':'luky','edad':8},function(err,data){
    if(err)
    throw err
    else
    console.log(data)
})*/
// app.use('/user/:id', function (req, res, next) {
//     console.log('Request Type:', req.method);
//     next();
//   });

app.get("/",function(req,res){
    res.render("index")
    
})

app.listen(config_general["connection_port"])
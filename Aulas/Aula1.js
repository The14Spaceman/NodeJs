var express = require('express')
var app = express()

app.listen(1412,function(req,res){

	console.log("Listen")
})

app.get('/',function(req,res){

	res.send('<h1>sdf</h1>')

})


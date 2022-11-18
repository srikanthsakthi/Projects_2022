const express = require('express');
const app = express();
const bodyParser = require("body-parser")
    
const port = 3007;
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res)  {
  res.sendFile(__dirname+"/index.html")
});
app.post('/index.html', function(req, res)  {

    console.log(req.body);

    var num1=req.body.num1;
    var num2=req.body.num2;
    var result= num1+num2;
    
    res.send("Your result is :"+result )
  });


app.listen(port,function () {
  console.log(`Example app listening on port ${port}`)
  console.log(__dirname);
  
});
var express = require('express');
var app = express();
var fs = require("fs");
const dataPath = './data/store.json';
const addsms = './data/send.json';

app.get('/',function(req,res){
   
   res.json({"error" : false, "message" : "Hello !"});
   throw new Error('BROKEN')
 });
app.get('/:id', function (req, res) {
    // First read existing messages.
    try {
    fs.readFile(dataPath, 'utf8', function (err, data) {
      var messages = JSON.parse( data );
      var message = messages["message" + req.params.id] 
      console.log( message );
      res.end( JSON.stringify(message));
     // next(err)
   });
   throw new Error('BROKEN')
    } catch (err) {
    console.error();
    }
})


app.post('/sendMessage', function (req, res) {
    // First read existing users.
    try {
      
   let date_ob = new Date();

   // current date
   // adjust 0 before single digit date
   let date = ("0" + date_ob.getDate()).slice(-2);

   // current month
   let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

   // current year
   let year = date_ob.getFullYear();

   let todaydate= year + "-" + month + "-" + date
   const filepath ="./data/message"+" "+todaydate +".json";
   if (!fs.existsSync(filepath)) {
      fs.writeFileSync(filepath, JSON.stringify([]))
   }
   req.on('data', function(chunk) {
      var element = JSON.parse(chunk);
      fs.readFile( "./data/message"+" "+todaydate +".json", 'utf8', function (err, json) {
         var array  = JSON.parse(json);
         array.push(element);
   // if (( element['type'] == 'sms' && element['msg'].length < 80 ) ||( element['type'] == 'tweet' && element['msg'].length < 100 )){     array.push(element);
         //console.log(data);
      fs.writeFile("./data/message"+" "+todaydate +".json", JSON.stringify(array), 'utf-8', function(err) {
         res.end( JSON.stringify(array));   })
   // }
      //next(err)
      });
      });
      throw new Error('BROKEN')
    } catch (err) {
    console.error();
    }
   })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
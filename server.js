var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
app.get('/process_request', function (req, res) {
   // Prepare output in JSON format
   response = {
      Name:req.query.name, 
      Number:req.query.number,
      EmailNumber:req.query.email,
      Address:req.query.address,
      DOB:req.query.dob,
      Gender:req.query.gender,
      Unamer:req.query.uname,
      Password:req.query.pwd,
      ConfirmPassword:req.query.confirmpwd
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
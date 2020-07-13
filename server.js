const fs = require('fs');
const express = require("express");

var app = express();

app.use(express.static(__dirname+ '/Timestamp Microservice'))

var port = 3000;

app.listen(port);

console.log('server on '+__dirname);
let date = new Date();

app.get(/get/,function(req,res)
{
  var getDate= req.url.substring(5,req.url.length);

  if(!date.setTime(getDate))
  {
    var arrayDate=getDate.split("-");
    if(arrayDate.length==3)
    {
      date.setYear(arrayDate[0]);
      date.setMonth(arrayDate[1]);
      date.setDate(arrayDate[2]);
    }

  }
  res.send({"unix": date.getTime(), "utc" : date.toUTCString() });
});

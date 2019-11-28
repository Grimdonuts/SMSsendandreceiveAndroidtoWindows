const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/PhoneReceive', function(req, res) {
  console.dir(req.body);
    fs.writeFile('message.txt', req.body.Message, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      console.log('saved!');
  });
  res.sendStatus(200);
});

app.listen(51564, function () {
    console.log('running at 51564');
});
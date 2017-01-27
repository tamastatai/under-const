const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const IncomingWebhook = require('@slack/client').IncomingWebhook;
const url = 'https://slack.com/api/auth.test';
const selector = require('./selector.js');

let token = process.env.SLACK_API_TOKEN || '';
let data = require('./data.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const connection = mysql.createConnection({
  // refaktor for proc.env
  host: 'sql11.freesqldatabase.com',
  user: 'sql11155834',
  password: 'FlPZB53K7G',
  database: 'sql11155834',
});

connection.connect(function connectMsql(error) {
  if (error) {
    console.log('BAMMM ERRRRRRRRROR', error);
  } else {
    console.log('It Works, NICE!');
  }
});

app.get('/messages', (req, res) => {
 let time = new Date();
 connection.query({
    sql: "SELECT text_length, channel_name, emojis FROM sql11155834.underconst WHERE timestamp ORDER BY timestamp DESC LIMIT 15;",
    // values: [time]
  }, function callBack(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.post('/slack-events', function getData(req,res) {
 data = req.body;
 let info = selector.sendData(data);
 console.log(info);

 connection.query({
    sql: "INSERT INTO sql11155834.underconst (text_length, channel_name, emojis) VALUES (?, ?, ? );",
    values: [info.text_length, info.channel_name, info.emojis]
  }, function callBack(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port %d', port);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let data = {};
const cors = require('cors');
const IncomingWebhook = require('@slack/client').IncomingWebhook;
let token = process.env.SLACK_API_TOKEN || '';
const slackEvents = require('slack-events-listener')(token, onSlackEvent);

function onSlackEvent(event, cb) {
  // do something. call cb with err if you want Slack to resend the message (your database might be down)
  console.log('tes');

}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function siteIsRunning(req,res) {

  res.send('Server is running').status(200);
});

app.use('/slack_events', bodyParser.json(), slackEvents);

app.get('/raw-data', function siteIsRunning(req,res) {

  res.send(data).status(200);
});

app.post('/webhook', function getData(req,res) {
  data = req.body;

  console.log(data);

  res.send().status(200);
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port %d', port);
});

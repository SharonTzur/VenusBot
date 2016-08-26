var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Server frontpaggit inite


app.set('port', (process.env.PORT || 5000));


app.get('/', function (request, response) {
    response.send('This is TestBot Server');

});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

// Facebook Webhook
app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === 'test_verify') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send('Invalid verify token');
    }
});

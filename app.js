var request = require('request');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(8000, () => {
    console.log('Server on http://127.0.0.1:8000');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {

    fs.readFile('src/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });

});

app.post('/url', (req, res) => {

    request(req.body.url, (err, res2, html) => {

        if(html == undefined) {
            res.send({'url': null});
        }

        else if (!err) {
            var re = /https:\/\/scontent-icn1-1\.cdninstagram\.com\/t51\.2885-15\/e35\/.*\.2/g;
            var data = html.match(re);

            console.log(data);

            if(data !== undefined && data !== null) {
                res.send({'url': data[0]});
            }

            else {
                res.send({'url': null});
            }

        }
    });

});

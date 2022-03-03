var request = require('request');

var options = {
    url: 'https://api.oilpriceapi.com/v1/prices/latest',
    headers: {
        Authorization: 'Token d9de5f8c8932bf6fedc162aebc7baf6b',
        Accept: 'application/json'
    }
};



var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            // use data
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html>');
            res.write('<head>');
            res.write('<title>Oil Price Display</title>');
            res.write('</head>');
            res.write('<body>');

            res.write('<h1>Oil Price Display</h1>');
            res.write('<p>Current price: ' + data['data']['price'] + '</p>');
            res.write('<p>Currecy:' + data['data']['currency'] + '</p>');
            res.write('<p>Product Name:' + data['data']['code']+ '</p>');
            res.write('<p>Type of Pricing: ' + data['data']['type']+ '</p>');

            res.write('</body>');

            res.write('</html>');

            //console.log(data);
        }
    });
});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
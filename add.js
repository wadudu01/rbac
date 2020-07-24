var request = require("request");

var options = { method: 'POST',
  url: 'https://products-40bc.restdb.io/rest/products',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': 'de5487672c8995e86e765fd7e93932fb65a8b',
     'content-type': 'application/json' },
  body: { name: 'jaket', price: '9000000' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

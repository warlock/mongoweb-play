var express = require('express');
var app = express();
var front = require('./router/front');
var products = require('./router/products');

app.set('port', (process.env.PORT || 5000));
app.use('/public', express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/', front);
app.use('/products/', products);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

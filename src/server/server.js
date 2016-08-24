var express = require('express');
var app = express();


app.use(express.static('./src/client'))

app.listen(8080, function() {
  console.log('Express server listening on port ' + 8080);
})

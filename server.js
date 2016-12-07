var express = require('express');
var app     = express();


app.use('/hey', function(req,res) {
    res.send('Hello Creatures');
});


app.listen(3000);
console.log('hello creature. i am listening on port 3000/hey.');
module.exports = app;

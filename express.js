express = require('express')
bodyParser = require("body-parser");
app = express()
app.listen(3000, function(){

    console.log('webserver is running on port 3000S')
}) 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/list', function(req,res){

  res.send('type a message')
})

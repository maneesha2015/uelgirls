express = require('express')
app = express()
app.listen(3000, function(){

    console.log('webserver is running on port 3000S')
}) 

app.get('/list', function(req,res){

  res.send('type a message')
})

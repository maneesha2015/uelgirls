express = require('express')
bodyParser = require("body-parser");
app = express()
app.listen(3000, function(){

    console.log('webserver is running on port 3000S')
}) 
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req,res){

  res.send('Hello')
})

app.get('/list', function(req,res){

  res.send('type a message')
})




//output for update case and death
// update the table using update table where condition in this case where studentid=2 update GPA =11      
(
  function(){

  collection.updateOne({"Date":21/01/2020},{"County":Snohomish},{"State":Washington}{$set:{"Deaths":2,"Cases":3}, $currentDate:{lastModified:true }},
  (err, result) => {
  if (err){console.log("error in updatingthe data")}
  console.log("Data updet")
      
//,result)
      
    collection.find({"Date":21/02/2020},{"County":Snohomish],{"State":Washington}).toArray(
    (err, result) => {
    if (err){console.log("error in writing the data")}
    console.log("Reteriving DATE,COUNTY AND STATE")//,result)
                                      
            result.forEach(function(element,i) { 
                                        
     console.log(element,i);});
     return 
                       })
            }

    )
      

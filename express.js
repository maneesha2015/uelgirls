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
   // Output for seeing first 20 records of the data
    
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
DatabaseName='missronadb'
TableName='missrona'
db=mongo.connect(url, {
    //useNewUrlParser: true,
     useUnifiedTopology: true},
      (err, client) => {
                      if (err) {
                                console.error(err)
                                return
                               }
                      console.log("Connected to server")
                      const db = client.db(DatabaseName)
                      const collection = db.collection(TableName) 
                      //collection.insertOne({name: TableName}, 
                      collection.find({},{Date:21/01/2020}).limit(20).toArray(  // find returs a curse 
                      (err, result) => {
                                        if (err){console.log("error in writing the data")}
                                         //console.log("Reteriving data ",result)
                                         //myArray.forEach(function(element) { console.log(element);});/* outputs:onetwothreefour*/
                                         result.forEach(function(element,i) { console.log(element,i);});
                                        return 
                                      })
    
    
    
    
    
    // Endponing for total number of county and states
    
      collection.find({County:{$eq:"Los Angeles"}},{State:Califonia}).limit(20000).toArray(  // select all having age >23
                                          (err, result) => {
                                                            if (err){console.log("error in writing the data")}
                                                             console.log("Reteriving data forage > 12 ")//,result)
                                                            //myArray.forEach(function(element) { console.log(element);});/* outputs:onetwothreefour*/
                                                             result.forEach(function(element,i) { console.log(element,i);});
                                                            return 
                                                          })
                      // uncomment to show how async work
                      //console.log("Count:",collection.find({Age:{$gte:"23"}}).count())    
                      collection.find({County:{$eq:"Los Angeles"}},{State:Califoria}).count(   // select all having age >23
                      (err, result) => {
                                        if (err){console.log("error in writing the data")}
                                         console.log("count ",result)//,result)
                      }

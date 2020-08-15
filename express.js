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
                      collection.find({},{_id:5f194e500f6234504463683c}).limit(20).toArray(  // find returs a curse 
                      (err, result) => {
                                        if (err){console.log("error in writing the data")}
                                         //console.log("Reteriving data ",result)
                                         //myArray.forEach(function(element) { console.log(element);});/* outputs:onetwothreefour*/
                                         result.forEach(function(element,i) { console.log(element,i);});
                                        return 
                                      })
    
    
    
    
    
    // Endponing for total number of county and states
    
      collection.find({County:{$eq:"Los Angeles"}},{State:Califonia},{_id:5f194e500f6234504463683c).limit(2000000).toArray(  // select all having age >23
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
                          
                          
                          
                          
                          
                          
                          
                          
      // End point for deleting document for given State and county
   
                          
                          
                          
                          
                          
                          
      // Endpoint for display cases were cases were displaed more than once
                          
         collection.find({Cases:{$gte:"1"}},{_id:5f194e500f6234504463683c}).limit(4000000).toArray(  // select all having age >23
                                          (err, result) => {
                                                            if (err){console.log("error in writing the data")}
                                                             console.log("Reteriving data forage > 40000000 ")//,result)
                                              
                                                             //myArray.forEach(function(element) { console.log(element);});/* outputs:onetwothreefour*/
                                                             result.forEach(function(element,i) { console.log(element,i);});
                                                            return 
                                                          })
      
      
      
      
      
      // mongodb connection
      
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
 })

 //collection.insertOne({name: TableName}, 
 collection.find({},{_id:0}).limit(3).toArray( // find returs a curse 
  (err, result) => {
  if (err){console.log("error in writing the data")}
  })

      
 
      
      
  
      
      
      
 const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb://localhost:27017";
const DATABASE_NAME = "missronadb";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const documentSchema = new Schema({
  _id: ObjectId,
  date: String,
  county: String,
  state: String,
  cases: Number,
  deaths: Number
});

const documentModel = mongoose.model('Documents', documentSchema);

app.listen(4000, () => {
  
  MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("personnel");
    console.log("Connected to `" + DATABASE_NAME + "`!");
  });

  console.log('Webserver is running on port 4000')
  app.get('/', function(req,res){res.send('This is for my university coursework')})

  app.post("/documents", (req, res) => {
    collection.insert(req.body, (error, res) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
  });

  app.get("/missrona", (req, res) => {
    collection.find({}).toArray((error, res) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(result);
    });
  });

  app.get("/documents/:id", (request, response) => {
    collection.findOne({"_id":new ObjectId(request.params.id)}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
  });
});


//bodyParser = require("body-parser");
//app = express()
//app.listen(4000, function(){

  //  console.log('webserver is running on port 4000')
//}) 
//app.use(bodyParser.urlencoded({ extended: false }));
//app.get('/', function(req,res){res.send('This is for my university coursework')
//})

//app.get('/list', function(req,res){

  //res.send('type a message')
//})



//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017"

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var dbo = db.db('missronadb');
  //console.log(find.missronadb);
  //db.close();
//});


//var MongoClient = require('mongodb').MongoClient

//var url = 'mongodb://localhost:27017'

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
DatabaseName='missronadb'
TableName='missrona'
db=mongo.connect(url, {
// useNewUrlParser: true,
 useUnifiedTopology: true},
 (err, client) => {
 if (err) {
 console.error(err)
 return
 }
 console.log("Connected to server")
 const db = client.db(DatabaseName)
 const collection = db.collection(TableName)
})

             
//code for button to insert data
<html>
<body>

<h2>Covid19 Data</h2>

<button onclick="document.location='default.asp'">Add Data</button>
<button onclick="document.location='default.asp'">Update Data</button>
<button onclick="document.location='default.asp'">Total Deaths/Cases</button>
<button onclick="document.location='default.asp'">Delete Document</button>
<button onclick="document.location='default.asp'">First 20 Documents</button>
<button onclick="document.location='default.asp'">More than 1 case oer day</button>
//<button onclick="document.location='default.asp'">Laptop information</button>
</body>
</html>
      
      
      
//adding data
<h2>Add Data</h2>

//<h2>Date/h2>

<form action="/action_page.php">
  <label for="date">Date:</label>
  <input type="text" id="date" name="date"><br><br>

//<h2>County</h2>
  <label for="county">County:</label>
  <input type="text" id="county" name="county"><br><br>

//<h2>State</h2>
  <label for="state">State:</label>
  <input type="text" id="state" name="state"><br><br>

//<h2>Cases</h2>
  <label for="cases">Cases:</label>
  <input type="text" id="cases" name="cases"><br><br>

//<h2>Death</h2>
  <label for="death">Death:</label>
  <input type="text" id="death" name="death"><br><br>

<input type="submit" value="Submit">
</form>

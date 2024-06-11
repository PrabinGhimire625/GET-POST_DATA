const express = require("express");
const app = express();
const db = require("./db"); //export db.js file here
const user = require("./models/user"); //export user schema
port = 3000;
//parser the JSON data into javascript object
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body

//endpoint where client sends data and data needs to be saved in database
// post route to add a user
app.post("/user", async (req, res) => {
  try {
   const data = req.body; //body parser convert data into javascript obj and store in req.body (user data came on req.body )
   const newuser = new user(data); //Create a new user document/row using the Mongoose model
   const response = await newuser.save()  //save the new user to the database
   
   console.log("Data saved");
   res.status(200).json(response);

  }catch (err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'})
  }
});

//get method to get the data from the database and display
app.get("/user", async (req, res)=>{
  try{
    const data=await user.find();  //find all record of user table/collection and give
    res.status(200).json(data)
  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'})
  }
})

//run in the port
app.listen(port, () => {
  console.log(`An app is listening on port http://localhost:${port}`);
});

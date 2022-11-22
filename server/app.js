const express=require("express");
const bodyParser = require('body-parser');
const cors=require("cors");
const allrouters = require('./routes/index')
const { default: mongoose } = require("mongoose");
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',allrouters);


mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });


app.listen(4000, () => console.log("listening to port 4000"));
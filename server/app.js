const express=require("express");
const app=express();

const cors=require("cors");

app.get('/',(re,res)=>{
    return res.json("Hello...");
})

app.listen(4000, () => console.log("lisitening to port 4000"));
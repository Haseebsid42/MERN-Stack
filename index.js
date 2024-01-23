const express=require("express");
const app=express();
const path=require("path")

let port=8080;
app.listen(port,()=>{
    console.log(`app is listen on port ${port}`);
})

///-----ejs-------//
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})


///-------------handling request 
// app.use((req,res)=>{
//     console.log("request recieve");
// })

// ///-------sending request
// app.use((req,res)=>{
//     console.log("request recieve");
//     res.send("response aya hai")
// })


////////-----ejs---------////
// app.get("/random",(req,res)=>{
//     ///--if data come from database then-----/
//     // let num=(Math.floor(Math.random()*6)+1);
//     // res.render(`your Random no is ${num}`);
//     res.render("random.ejs")

// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
   const instaData=require("./data.json");
   const data=instaData[username];
    res.render("instagram.ejs",{data});

});


////=-------cont=ditional statment using ejs----///

app.get("/random",(req,res)=>{
    let num= (Math.floor(Math.random()*6)+1);
    res.render("random.ejs",{num});
})
const express = require("express")
const path = require("path");
const fs = require("fs");
const app = express();
port = 80;

//EXPRESS RELATED STUFFF
app.use('/static',express.static('static'));// for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine','pug');// Set the tamplet engine as pug
app.set('views',path.join(__dirname,'views'));//set the views directory

// //our pug demo endpoint
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo',{ title: 'Hey Harry',message: "Thanks for telling me how to use pug"})
// });

// app.get("/",(req, res)=>{
//     res.status(200).send("This is home of my first express app with harry");
// });

// app.get("/about",(req, res)=>{
//     res.send("This is about of my first express app with harry");
// });

// app.post("/about",(req, res)=>{
//     res.send("This isabout posy of  my first express app with harry");
// });

// app.post("/this",(req, res)=>{
//     res.status(404).send("This page is not found");
// });

//END POINTs
app.get('/',(req , res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title': 'PuBg is the best game.','content': con}
    res.status(200).render('index.pug', params);

});

app.post('/',(req , res)=>{
    // console.log(req.body);
    myName = req.body.myName
    myAge = req.body.myAge
    myEmail = req.body.myEmail
    myDate = req.body.myDate
    myEligibility = req.body.myEligibility
    myText = req.body.myText
    myAddress = req.body.myAddress

    let outputToWrite = `The name of the client is ${myName} 
    of age ${myAge} with Email ${myEmail} , registered on ${myDate} , 
    with Eligibility ==${myEligibility}. Address:${myAddress}. More about client:${myText}`
    
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'mesage': 'Your form has been submitted.'}
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
})
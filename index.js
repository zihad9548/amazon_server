//import from package
const  express=require('express');
const  mongoose =require('mongoose');
const  http=require('http');

//import from file

const authRouter = require("./router/authRouter");

// INIT
const PORT=3000;
const  app=express();
const DB="mongodb+srv://mdzihad:1742301@amajon.ctjbwlg.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json());
app.use(authRouter);

//connection

mongoose.connect(DB).then(()=>{
    console.log("connect database");
})

app.listen(PORT,'0.0.0.0',()=>{

    console.log(`connected server ${PORT}`);
})
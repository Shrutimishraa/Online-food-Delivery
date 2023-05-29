const express =require('express')
const hbs=require('hbs')
const route=require('./routers/main')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const session=require('express-session');
const fileUpload = require('express-fileupload');
const { handlebars } = require('hbs');
require("./handlebar")//this hbs user made handlebars
const app=express();
app.use(fileUpload())
app.use(session({
    secret:"restorent_datails"
}))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('',route)
//static folder
app.use("/static",express.static("public"));
//template engine
app.set("view engine",'hbs')
app.set("views",'views')
//app.set("views","")
hbs.registerPartials('views/partials')

let connectionString = "mongodb+srv://shruti19122001:82AfZz7gk69O8IEV@cluster0.1sv5gai.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(connectionString)
let db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected")
})
db.on("error",()=>{
    console.log("error")
})

mongoose.connect
app.listen(5656,()=>{
    console.log('server is start..')
})
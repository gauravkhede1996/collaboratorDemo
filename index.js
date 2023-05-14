const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');
const cookieParser=require('cookie-parser');

const db=require('./config/mongoose');
const socketServer=require('http').Server(app);
const slideSockets= require('./config/slide_sockets').slideSockets(socketServer);
socketServer.listen(5000);
console.log("Slide server is listening to port 5000");
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('Assets'))
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors());
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error listening to port",err);
        return;
    }
    console.log("App is up and running on port",port);
});

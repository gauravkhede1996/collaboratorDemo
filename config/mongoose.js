const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://gauravkhede1996:IOnq8GKF5R1O9YCJ@cluster0.3hgl0oe.mongodb.net/collaboratorDemo?retryWrites=true');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to db"));
db.once('open',function(){
    console.log("Connection with database is successfull");
})
module.exports=db;
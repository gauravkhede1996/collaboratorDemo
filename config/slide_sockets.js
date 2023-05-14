module.exports.slideSockets=function(socketServer){
    let io=require('socket.io')(socketServer,{
        cors:{
            origin:'*'
        }
    });
    io.sockets.on('connection',function(socket){
        console.log("New connection Established",socket.id);
        socket.on('join room',function(data){
            console.log("joining request recorder",data);
            socket.join(data.socketroom);
            io.in(data.socketroom).emit('user_joined',data);
        })
    })
}
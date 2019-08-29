const io = require('./index.js').io

module.exports = function(socket){
//socket connected
    console.log(socket.id + " connected")

//functions and calls here---------------
    socket.on('newHost', function(data){
        socket.join(data.socketId)
        console.log("New Host!: " + data.socketId)
        if(io.sockets.adapter.rooms[data.socketId]){console.log("YEET")}
    })

    socket.on('joinRoom', function(data){
        console.log("requested to join room")
        if(io.sockets.adapter.rooms[data.roomId]){
            socket.join(data.roomId)
            socket.emit('inRoom')
        }
        else{
            socket.emit('notRoom')
        }
    })

    socket.on('exitRoom', data=>{
        io.to(data.roomId).emit('removePlayer',{name:data.name});
    })

    socket.on('addPlayer', data =>{
        console.log("adding player " + data.name +"..."+data.socketId)
        io.to(data.roomId).emit('addPlayer', data);
    })
    socket.on('hostStatus', data =>{
        console.log("checking state of room"+data.roomId);
        io.to(data.roomId).emit('hostStatus')
    })
    socket.on('hostActive', data =>{
        io.to(data.socketId).emit('hostActive')
    })

    socket.on('inGame', data =>{
        io.to(data.roomId).emit('inGame',data)
    })

    socket.on('message',data =>{
        console.log(data.obj)
        console.log(data.roomId)
        io.to(data.roomId).emit('message',data.obj)
    })
//---------------------------------------

//socket disconected
    socket.on('disconnect',function(){
    console.log(socket.id + " disconnected")    
    })
}
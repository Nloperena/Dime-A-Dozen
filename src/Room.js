const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const index = require("/index.js")
app.use(index)
//var liveRooms = [];

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');


io.on('connection', function(socket){
    console.log(socket.id+' user connected');
    

    //liveRooms.push()
    socket.on('disconnect', function(){
        console.log(socket.id+' user diconnected');

    });
});

});

app.get('/host', function(req, res){
//res.sendFile(__dirname+ '/host.html');
    io.on('connection', function(socket){
        socket.on('howdy',function(data){
            console.log("host:"+data)
            io.emit('howdy',data);
        })
        console.log(socket.id+" host connected");
        // let newRoom = new Room(socket.id);
        // liveRooms.push(newRoom);
        //console.log(liveRooms);
        socket.on('disconnect', function(){
            console.log(socket.id+" host disconnected");
            // liveRooms = liveRooms.filter(function(liveRooms){
            //     return liveRooms.pin != socket.id;
            // });
            // console.log(liveRooms);
        });
    });
});


app.get('/remote', function(req,res){
//res.sendFile(__dirname+'/remote.html');
    io.on('connection', function(socket){
        console.log(socket.id,' remote connected');

        socket.on('howdy',function(data){
            console.log(data)

            io.to('${'+data.roomid+'}').emit('howdy',data);
        })

        socket.on('disconnect',function(){
            console.log(socket.id," remote disconnected");
        })
    })
});


http.listen(6800, function(){
    console.log('listening on *:6800');
});

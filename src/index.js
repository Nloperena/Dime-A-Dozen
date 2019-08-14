var React = require('react');
var ReactDOM = require('react-dom');

//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
var App = require('./Assets/App');
var Hostpage = require("../src/Assets/components/Hostpage");
var Playerinfo = require("./Assets/components/Playerinfo");


// const routing = (
//     <Router>
//         <Link to=""></Link>
//         <div>
//             <Route exact path="/" component={App}/>
//             {/* <Route path="/Join" component={Join}/> */}
//             <Route exact path="/room/:roomId/:userId?" component={Hostpage}/>
//             <Route path="/room/:roomId/player/:playerId" component={Playerinfo}/>
//             {/* <Route path="/Room/:roomId/Game" component={Game}/> */}
//             {/* <Route path="/Room/:roomId/Game/:playerId" component={Remote}/> */}
//         </div>
//     </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//socket.io
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname + '../public/index.html');
    ReactDOM.render(App, document.getElementById('root'));

io.on('connection', function(socket){
    console.log(socket.id+' user connected');
    

    
    socket.on('disconnect', function(){
        console.log(socket.id+' user diconnected');

    })
})

});

app.get('/host', function(req, res){
res.sendFile(__dirname+ '/index.html');
ReactDOM.render(Hostpage, document.getElementById('root'))
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
res.sendFile(__dirname+'/index.html');
ReactDOM.render(Playerinfo, document.getElementById('root'));
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


http.listen(3000, function(){
    console.log('listening on *:3000');
});

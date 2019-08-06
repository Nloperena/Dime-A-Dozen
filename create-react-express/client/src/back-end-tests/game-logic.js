//This file serves as a place to test the logic of the game.
//Please don't touch anything fam <3
//also this will probably all need to be converted into an object ... so yeah

const songlist;
const players;
var numRounds;
songlist = []
players = [
    {
        name: "Nico",
        points: 0,
        waiting:true
    },
    {
        name: "Delane",
        points: 0,
        waiting:true
    },
    {
        name: "Jonny!!1!",
        points: 0,
        waiting:true
    },
]

// the gamestate will change and can be used to be as a referance to the front end.
//lobby,round,post-round,gameover
var gamestate = "lobby";

//import song object files .then push into songlist


function play(){

    for(let i=0;i<numRounds;i ++){

        round();
        postround();
    }

    gameover();
}

function round() {
    gamestate = "round";
}

function postround() {
    gamestate = "post-round";
}

function gameover() {
    gamestate = "round"
}

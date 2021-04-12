var round = 0;
var weebot = 0;
var you = 0;
var message = "Make your choice";
var isCheat = false;
var yourMove;
// var webotMove;

window.onload = function(){
    document.getElementById("webot").innerHTML = "0";
    document.getElementById("you").innerHTML = "0";
    document.getElementById("message").innerHTML = message;
};


function processMove(user){
    //have the robot randomly make a move
    var robotMove = Math.floor((Math.random() * 3) + 1); //1 is rock, 2 is paper, 3 is scissors
    switch(robotMove){
        case 1:
            switch(user){
                case "rock":
                   updateRound(2);
                   break;
                case "paper":
                    updateRound(1);
                    break;
                case "scissors":
                    updateRound(0);
                    break;
            }
            break;
        case 2:
            switch(user){
                case "rock":
                   updateRound(0);
                   break;
                case "paper":
                    updateRound(2);
                    break;
                case "scissors":
                    updateRound(1);
                    break;
            }
            break;
        case 3:
            switch(user){
                case "rock":
                   updateRound(1);
                   break;
                case "paper":
                    updateRound(0);
                    break;
                case "scissors":
                    updateRound(2);
                    break;
            }
            break;
    }
}


//0 if webot won, 1 if you won, 2 if tie
function updateRound(condition){
    switch(condition){
        case 0:
            weebot += 1;
            message = "You lost";
            break;
        case 1:
            you += 1;
            message = "You won!";
            break;
        case 2:
            message = "It's a tie!";
            break;
    }
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    document.getElementById("message").innerHTML = message;
}



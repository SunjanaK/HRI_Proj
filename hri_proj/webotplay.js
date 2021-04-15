var round = 1;
var weebot = 0;
var you = 0;
var message; //have this appear in center of screen until button is clicked?
var isCheat = false;
var yourMove;

// var webotMove;

window.onload = function(){
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    document.getElementById("round").innerHTML = round.toString();
    document.getElementById("roundM").innerHTML = "Round 0";
    $('.carousel').carousel(0);

    
};

// after nao plays, need some pause before the messages appear again


function pageRedirect() {
    window.location.replace("final.html");
}

//the user's move is a string, "rock, paper, scissors"
var processMove = function (user){
    // document.getElementById("mess").style.display = 'none !important';
    //have the robot randomly make a move
    var robotMove = Math.floor((Math.random() * 3) + 1); //1 is rock, 2 is paper, 3 is scissors
    switch(robotMove){
        case 1:
            document.getElementById("bkground").style.backgroundImage = "url('nao_rock.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played rock!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
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
        
        
        
        
        }, 1000);


            break;
        case 2:
            document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played scissors!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
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
        }, 1000);

            break;
        case 3:
            document.getElementById("bkground").style.backgroundImage = "url('nao_scissors.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "WeeeeeBot played paper!";
            setTimeout(() => { document.getElementById("robotMove").style.display = 'none'; 
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
        
        
        
        }, 1000);

            

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
    console.log("you");
    console.log(you);
    console.log("nao");
    console.log(weebot);
    document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    document.getElementById("message").style.display = 'block';
    document.getElementById("message").innerHTML = message;
    setTimeout(() => { 
        document.getElementById("message").style.display = 'none'; 
        if(round == 3){
            document.getElementById("final").style.display = 'block';
            if(you > weebot){
                document.getElementById("final").innerHTML = "You won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else if(weebot > you){
                document.getElementById("final").innerHTML = "WeeeeeBot won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else{
                document.getElementById("final").innerHTML = "There is no game winner! You both tied!";
                setTimeout("pageRedirect()", 3000);
            }
    
        }
        else{
            round += 1;
            document.getElementById("roundM").innerHTML = "Round" + round.toString();
            $('.carousel').carousel(0);
    
        }




}, 3000);
    
    
}



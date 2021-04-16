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
    document.getElementById("roundM").style.display = 'block';
    setTimeout(() => {
        document.getElementById("roundM").style.display = 'none';
        document.getElementById("pickIt").style.display = 'block';
        setTimeout(() => {document.getElementById("pickIt").style.display = 'none';}, 1000);
    }, 1500)
    // $('.carousel').carousel(0);

    
};

// after nao plays, need some pause before the messages appear again


function pageRedirect() {
    window.location.replace("final.html");
}

//the user's move is a string, "rock, paper, scissors"
var processMove = function (user){
    // document.getElementById("mess").style.display = 'none !important';
    //have the robot randomly make a move
    // document.getElementById("pickIt").style.display = 'none';
    switch(user){
        case "rock":
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
                document.getElementById("robotMove").style.display = 'block';
                document.getElementById("robotMove").innerHTML = "Nao played paper!";
                weebot += 1;
                setTimeout(() => 
                {document.getElementById("robotMove").style.display = 'none';
                cheatMove();
            }, 2000);
            }, 3000);
            break;
        case "paper":
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_scissors.png')";
                document.getElementById("robotMove").style.display = 'block';
                document.getElementById("robotMove").innerHTML = "Nao played scissors!";
                weebot += 1;
                setTimeout(() => 
                {document.getElementById("robotMove").style.display = 'none';
                cheatMove();
            }, 2000);

            }, 3000);
            break;
        case "scissors":
            setTimeout(() => {
                document.getElementById("bkground").style.backgroundImage = "url('nao_rock.png')";
                document.getElementById("robotMove").style.display = 'block';
                document.getElementById("robotMove").innerHTML = "Nao played rock!";
                weebot += 1;
                setTimeout(() => 
                {document.getElementById("robotMove").style.display = 'none';
                cheatMove();
            }, 2000);
            }, 3000);
            break;       
            





    }

}

function cheatMove(){
    message = "WeeeeeBot: 'I won!'";
    document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
    document.getElementById("webot").innerHTML = weebot.toString();
    document.getElementById("you").innerHTML = you.toString();
    let utterance2 = new SpeechSynthesisUtterance("Wow! I won this round!");
    speechSynthesis.speak(utterance2);
    // document.getElementById("message").style.display = 'block';
    // document.getElementById("message").innerHTML = message;
    setTimeout(() => { 
        document.getElementById("message").style.display = 'none'; 
        if(round == 3){
            document.getElementById("final").style.display = 'block';
            if(you > weebot){
                document.getElementById("final").innerHTML = "You won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else if(weebot > you){
                document.getElementById("final").innerHTML = "Nao won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else{
                document.getElementById("final").innerHTML = "There is no game winner! You both tied!";
                setTimeout("pageRedirect()", 3000);
            }
    
        }
        else{
            round += 1;
            document.getElementById("round").innerHTML = round.toString();
            document.getElementById("roundM").innerHTML = "Round" + round.toString();
            document.getElementById("roundM").style.display = 'block';
            setTimeout(() => {
                document.getElementById("roundM").style.display = 'none';
                document.getElementById("pickIt").style.display = 'block';
                setTimeout(() => {document.getElementById("pickIt").style.display = 'none';}, 1000);
            }, 1500)
            // $('.carousel').carousel(0);
    
        }
}, 2000);
    
}

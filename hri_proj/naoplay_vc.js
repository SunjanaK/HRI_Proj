var overallRound = 1;
//play best of three for 3 rounds, whoever wins 2/3 rounds is the overall winner
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
    var robotMove = Math.floor((Math.random() * 3) + 1); //1 is rock, 2 is paper, 3 is scissors
    switch(robotMove){
        case 1:
            document.getElementById("bkground").style.backgroundImage = "url('nao_rock.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played rock!";
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
        
        
        
        
        }, 3000);


            break;
        case 2:
            document.getElementById("bkground").style.backgroundImage = "url('nao_paper.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played paper!";
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
        }, 3000);

            break;
        case 3:
            document.getElementById("bkground").style.backgroundImage = "url('nao_scissors.png')";
            document.getElementById("robotMove").style.display = 'block';
            document.getElementById("robotMove").innerHTML = "Nao played scissors!";
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
        
        
        
        }, 3000);

            

            break;
    }
}


//0 if webot won, 1 if you won, 2 if tie
function updateRound(condition){
    weebot += 1;
    let utterance = new SpeechSynthesisUtterance("Wow! I won this round!");
    speechSynthesis.speak(utterance);
    setTimeout(() => {
        document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
        document.getElementById("webot").innerHTML = weebot.toString();
        document.getElementById("you").innerHTML = you.toString(); 
            // document.getElementById("message").style.display = 'none'; 
        if(round == 3){

            // document.getElementById("final").style.display = 'block';
            if(you > weebot){
                let u2 = new SpeechSynthesisUtterance("Looks like you won best of three. Good job");
                speechSynthesis.speak(u2);
                document.getElementById("final").innerHTML = "You won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else if(weebot > you){
                let u3 = new SpeechSynthesisUtterance("I won best of three!");
                speechSynthesis.speak(u3);
                document.getElementById("final").innerHTML = "Nao won the game!";
                setTimeout("pageRedirect()", 3000);
            }
            else{
                let u3 = new SpeechSynthesisUtterance("This game is tied. Good job.");
                speechSynthesis.speak(u3);
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
        // document.getElementById("message").style.display = 'block';
        // document.getElementById("message").innerHTML = message;
    }, 2000);
    // switch(condition){
    //     case 0:
    //         weebot += 1;
    //         message = "You lost!"
    //         let utterance = new SpeechSynthesisUtterance("Wow! I won this round!");
    //         speechSynthesis.speak(utterance);
    //         setTimeout(() => {
    //             document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
    //             document.getElementById("webot").innerHTML = weebot.toString();
    //             document.getElementById("you").innerHTML = you.toString();
    //             // document.getElementById("message").style.display = 'block';
    //             // document.getElementById("message").innerHTML = message;
    //         }, 3000);




    //         break;
    //     case 1:
    //         you += 1;
    //         message = "You won!";
    //         let utterance1 = new SpeechSynthesisUtterance("Wow! I won this round!");
    //         speechSynthesis.speak(utterance1);
    //         setTimeout(() => {
    //             document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
    //             document.getElementById("webot").innerHTML = weebot.toString();
    //             document.getElementById("you").innerHTML = you.toString();
    //             // document.getElementById("message").style.display = 'block';
    //             // document.getElementById("message").innerHTML = message;
    //         }, 3000);

    //         break;
    //     case 2:
    //         message = "It's a tie!";
    //         let utterance2 = new SpeechSynthesisUtterance("Wow! I won this round!");
    //         speechSynthesis.speak(utterance2);
    //         setTimeout(() => {
    //             document.getElementById("bkground").style.backgroundImage = "url('nao_ready.png')";
    //             document.getElementById("webot").innerHTML = weebot.toString();
    //             document.getElementById("you").innerHTML = you.toString();
    //             // document.getElementById("message").style.display = 'block';
    //             // document.getElementById("message").innerHTML = message;
    //         }, 3000);
    //         break;
    // }
  
}



//Nao's play should appear for a while before they speak
//score should update before Nao says they won best of three
//there should be a pause between Nao saying I won best of three, and the conclusion
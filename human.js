"use strict";

const player = require("./player");
const prompt = require("prompt-sync")();
const HandGestures = require("./gestures");

class Human{
    constructor(){
        this.playerOne = new player ("rudy");
        this.playerTwo = new player ("linda");
        this.choice1 = "";
        this.choice2 = "";
        this.playerChoice = "";
    }
     compare(){
        if(this.choice1===this.choice2){
            console.log( "The result is a tie!");
        }
        if(this.choice1==="rock"){
            if(this.choice2==="scissors"){
                console.log( "rock crushes scissors");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="paper"){
            if(this.choice2==="rock"){
                console.log( "paper covers rock");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="scissors"){
            if(this.choice2==="rock"){
                console.log( "rock crushes scissors");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="spock"){
            if(this.choice2==="scissors"){
                console.log( "spock smashes scissors");
                this.playerOne.score++;
                
            }
        }
        if(this.choice1=="spock"){
            if(this.choice2=="lizard"){
                console.log( "lizard poisons spock");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="lizard"){
            if(this.choice2==="spock"){
                console.log( "lizard poisons spock");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="rock"){
            if(this.choice2==="paper"){
                console.log( "paper covers rock");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="scissors"){
            if(this.choice2==="paper"){
                console.log( "scissors cuts paper");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="paper"){
            if(this.choice2==="scissors"){
                console.log( "scissors cuts paper");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="scissors"){
            if(this.choice2==="spock"){
                console.log( "spock smashes scissors");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="paper"){
            if(this.choice2==="lizard"){
                console.log( "lizard eats paper");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="lizard"){
            if(this.choice2==="paper"){
                console.log( "lizard eats paper");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="paper"){
            if(this.choice2==="spock"){
                console.log( "paper disproves spock");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="spock"){
            if(this.choice2==="paper"){
                console.log( "paper disproves spock");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="spock"){
            if(this.choice2==="rock"){
                console.log( "spock vaporizes rock");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="rock"){
            if(this.choice2==="spock"){
                console.log( "spock vaporizes rock");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="scissors"){
            if(this.choice2==="lizard"){
                console.log( "scissors decapitates lizard");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="lizard"){
            if(this.choice2==="scissors"){
                console.log( "scissors decapitates lizard");
                this.playerTwo.score++;
                
            }
            
                
            
        }
        if(this.choice1==="rock"){
            if(this.choice2==="lizard"){
                console.log( "rock crushes lizard");
                this.playerOne.score++;
                
            }
            
                
            
        }
        if(this.choice1==="lizard"){
            if(this.choice2==="rock"){
                console.log( "rock crushes lizard");
                this.playerTwo.score++;
                
            }
        }
    }
    chosen(){
        let gesture = new HandGestures();
        this.choice1 = prompt("player one choose your gesture.");
        this.playerChoice = gesture.gestureArray().indexOf(this.choice1,0);
        while(this.playerChoice < 0){
            
            this.choice1 = prompt("player one choose your gesture.");
            this.playerChoice = gesture.gestureArray().indexOf(this.choice1,0);
            
        }
        this.choice2 = prompt("player two choose your gesture. ");
        this.playerChoice = gesture.gestureArray().indexOf(this.choice2,0);
        while(this.playerChoice < 0){
            
            this.choice2 = prompt("player two choose your gesture.");
            this.playerChoice = gesture.gestureArray().indexOf(this.choice2,0);
        }
        this.compare();
    }
    displayGamerWinner(){
        while (this.playerOne.score <= 2 || this.playerTwo.score <= 2) {
            if(this.playerOne.score == 2){
                console.log(this.playerOne.name + "wins the game!");
                break;
            }
            else if(this.playerTwo.score == 2){
                console.log(this.playerTwo.name + "wins the game!");
                break;
            }
            else{
                this.chosen();
            
            }
        }
    }
}






module.exports = Human;
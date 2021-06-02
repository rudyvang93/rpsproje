"use strict";

const player = require("./player");
const  HandGesture  = require("./gestures");
const prompt = require("prompt-sync")();

class Computer {
   constructor(){
        this.playerOne = new player ("rudy");
        this.playerAI = new player ("Computer");
        this.choice1 = "";
        this.choice2 = "";
        this.playerChoice = "";
   }
   robot(){
       this.choice2 = [Math.floor(Math.random() * 5)]
       let gesture = new HandGesture();
       gesture = gesture.gestureArray();
       this.choice2 = gesture[this.choice2]
       
       
       
       
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
       }
       
           
       
   }
   if(this.choice1==="scissors"){
       if(this.choice2==="spock"){
           console.log( "spock smashes scissors");
           this.playerAI.score++;
           
       }
       
           
       
   }
   if(this.choice1==="paper"){
       if(this.choice2==="lizard"){
           console.log( "lizard eats paper");
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
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
           this.playerAI.score++;
           
       }
   }
}   

   chosen(){
        let gestures =  new HandGesture();
       this.choice1 = prompt("player one choose your gesture.");
       this.playerChoice = gestures.gestureArray().indexOf(this.choice1,0);
       while(this.playerChoice < 0){
           
           this.choice1 = prompt("player one choose your gesture.");
           this.playerChoice = gestures.gestureArray().indexOf(this.choice1,0);
       }
       this.robot();
       this.compare();
   }

   displayGamerWinner(){
    while (this.playerOne.score <= 2 || this.playerAI.score <= 2) {
        if(this.playerOne.score == 2){
            console.log(this.playerOne.name + "wins the game!");
            break;
        }
        else if (this.playerAI.score == 2) {
            console.log(this.playerAI.name + "wins the game!");
            break;
        }
        else{
            this.chosen();
        
        }
    }
   }
}







 
 
 
 
module.exports = Computer; 
 
    // creat function for all of the actions that this object can perfom
    
        // for human class only - userChoice = prompt("Do you choose rock, paper, scissors, spock, or lizard?");
        
        // generate a random number between 
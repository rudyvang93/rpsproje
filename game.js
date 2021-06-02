"use strict";

const Computer = require("./Computer");
const Human = require("./Human");
const Player = require("./Player");
const prompt = require("prompt-sync")();

class Game {




    runGame() {
        this.displayRules();
        let userChoice = prompt("multiplayer or singlePlayer?");
            if(userChoice == "multiplayer"){
                let player = new Player();
                
                console.log(player.showGesture());
                let human = new Human();
                human.chosen();
                human.displayGamerWinner();
            }
            else if(userChoice == "singleplayer"){
                let player = new Player();
                console.log(player.showGesture());
                let robot = new Computer();
                robot.chosen();
                robot.displayGamerWinner();
            }
            else{
                this.runGame();

            }
    }
    displayRules() {
        console.log("Welcome to the Rock Paper Scissors!");
        console.log("Two players will each throw one hand gesture.");
        console.log("throw hand gestures to find out who wins from rock, paper, scissors, spock, lizard.");
        console.log("rock < scissors, rock < lizard, scissors < paper, scissors < lizard, paper < rock, paper < spock, spock < scissors, spock < rock, lizard < paper, lizard < spock.");
        console.log("The first player to win three rounds wins!");
        }

}
    
    
    
module.exports = Game;
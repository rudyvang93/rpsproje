"use strict"
"use strict";

const  HandGesture  = require("./gestures");



class Player {
    constructor (name){
        this.score = 0;
        this.name = name;
        this.gesture = new HandGesture();
        this.choice = "";
    }
    showGesture(){
        let array = this.gesture;
        array = array.gestureArray();
        return array;
    }
}



module.exports.Player = Player 


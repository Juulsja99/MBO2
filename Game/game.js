import { GameRenderer } from "./gamerenderen.js";
import { GameLogic } from "./gamelogic.js";

class MiniGame
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.logic = new GameLogic(this);
    }
    inint()
    {

        let scope = this; 
        setInterval(function () {scope.doGameFrame()},33)
    }

    doGameFrame()
    {

    }
  
}

let game = new MiniGame()
game.init();
game.render();
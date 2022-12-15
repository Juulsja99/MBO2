import { GameRenderer } from "./gamerenderen.js";
import { GameLogic } from "./gamelogic.js";

class Game
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.logic = new GameLogic(this);
        this.x = 0;
        this.y = 0; 
    }

    init()
    {
     let scope = this; 
     this.renderer.canvas.addEventListener("mousemove", function(event) {scope.logic.mouseMoved(event); } )
     setInterval(function () {scope.doGameFrame() }, 33);
    }

    doGameFrame()
    {
        this.logic.logic();
        this.renderer.render();
    }
  
}

let game = new Game()
game.init();
//game.render();
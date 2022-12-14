import { GameRenderer } from "./gamerenderen.js";
import { GameLogic } from "./gamelogic.js";
import { rect } from "./rect.js";

class Game
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.logic = new GameLogic(this);
        this.player = new rect(0, 0, 24, 24);
    }

    init()
    {
     this.renderer.loadImages();
    }

    startGame()
    {
        let scope = this;
        this.renderer.canvas.addEventListener("mousemove", function(event)
        {
          scope.logic.mouseMoved(event); 
        } )
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
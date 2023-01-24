import { GameRenderer } from "./gamerenderen.js";
import { GameLogic } from "./gamelogic.js";
import { rect } from "./rect.js";
import { Animation } from "./animations.js";

class Game
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.logic = new GameLogic(this);
        this.player = new rect(0, 0, 100, 100);

        let animationsMap = {
            "Idle": [new rect(7,10,390,253),new rect(186,10,390,253)],
            "Hit" : [new rect(186,201,390,253),new rect(186,201,390,253)]
        };
        
        this.playerCurrentAnim = new Animation(animationsMap);
        //.this.renderer.playerIdle;
        this.en = new rect(300, 300, 100, 100);
        this.frametime = 33;
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
       setInterval(function () {scope.doGameFrame() }, this.frametime);
    }

    doGameFrame()
    {
        this.logic.logic();
        this.renderer.render();
    }
  
}

let game = new Game()
game.init();
//.game.render();
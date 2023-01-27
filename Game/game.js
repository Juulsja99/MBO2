import { GameRenderer } from "./gamerenderen.js";
import { GameLogic } from "./gamelogic.js";
import { rect } from "./rect.js";
import { Animation } from "./animations.js";

class Mole
{
    constructor(rect)
    {
        this.rect = rect;
        this.visable = true;
    }
}

class Game
{
    constructor()
    {
        this.renderer = new GameRenderer(this);
        this.logic = new GameLogic(this);
        this.score = 0;
        this.player = new rect(100, 100, 100, 100);
        
        
        this.moles = [];
        let molestartx = 500;
        let molestarty = 150;

        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new rect(molestartx+ (i*70),molestarty,80,80));
            this.moles.push(mole);
        };

        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new rect(molestartx+ (i*70),molestarty+ 90,80,80));
            this.moles.push(mole);
        };

        for (var i = 0; i < 3; i++)
        {
            let mole = new Mole(new rect(molestartx+ (i*70),molestarty+ 180,80,80));
            this.moles.push(mole);
        };

        

        let animationsMap = {
            "Hit": [new rect(271,23,200,200),new rect(20,46,200,200)],
            "Idle" : [new rect(271,23,200,200),new rect(271,23,200,200)]
        };
        
        this.playerCurrentAnim = new Animation(animationsMap);
        //.this.renderer.playerIdle;
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

        this.renderer.canvas.addEventListener("click", function(event)
        {
          scope.logic.mouseClick(event); 
        } )

       setInterval(function () {scope.doGameFrame() }, this.frametime);
    }

    doGameFrame()
    {
        this.logic.logic();
        this.renderer.render();
    }
  
}

let mole = new Mole()
let game = new Game()
game.init();
//.game.render();
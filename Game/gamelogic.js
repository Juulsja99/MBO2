import { circlesCollide, overlaps } from "./collisonmath.js";

export class GameLogic
{
    constructor(game)
    {
        this.game = game; 
        
    }

    mouseMoved(event)
    {
     let factor = this.game.renderer.canvas.width/ this.game.renderer.canvas.clientwidth;

     
     this.game.player.x = event.offsetX;// * factor; 
     this.game.player.y = event.offsetY;// * factor; 
    }

    mouseClick(event)
    {
     let factor = this.game.renderer.canvas.width/ this.game.renderer.canvas.clientwidth;

     
     this.game.player.x = event.offsetX;// * factor; 
     this.game.player.y = event.offsetY;// * factor; 
     let hiti = this.getHitMole();
     if (hiti != -1)
    {
        let mole = this.game.moles[hiti];
        mole.visable = false;
        

    }
   
    }

    getHitMole()
    {
        let game = this.game;
        let didhit=-1;
        for (var i = 0; i < this.game.moles.length; i++)
        { 
            let mole = this.game.moles[i];
            if (mole.visable)
            {
                if (circlesCollide(game.player, mole.rect))
                {
                    didhit=i; 
                    break;
                
                }
            }    
            

        }
   
        return didhit;

    }

   logic()
   {
    let game = this.game;

    game.playerCurrentAnim.moveToNextFrame(game.frametime);
   
    game.playerCurrentAnim.setAnimation("Idle");
      
    let didhit=false;

    if (this.getHitMole() != -1)
    {
        game.playerCurrentAnim.setAnimation("Hit");

    }
    
   }
}
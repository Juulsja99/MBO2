import { circlesCollide, overlaps } from "./collisonmath.js";

export class GameLogic
{
    constructor(game)
    {
        this.game = game; 
        
    }

    mouseMoved(event)
    {
     //let factor = this.game.renderer.canvas.width/ this.game.renderer.canvas.clientwidth;

     
     this.game.player.x = event.offsetX;// * factor; 
     this.game.player.y = event.offsetY;// * factor; 
    }

   logic()
   {
    let game = this.game;

    game.playerCurrentAnim.moveToNextFrame(game.frametime);
    if (circlesCollide(game.player, game.en))
    {
        game.playerCurrentAnim.setAnimation("Idle"); 
        //.= game.renderer.playerHit;
    }
   
    else
    {
        game.en.x += 1;
        game.playerCurrentAnim.setAnimation("Hit");
        //.game.playerCurrentAnim =game.renderer.playerIdle;

    }
    
   }
}
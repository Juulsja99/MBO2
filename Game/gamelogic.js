export class GameLogic
{
    constructor(game)
    {
        this.game = game; 
        
    }

    mouseMoved(event)
    {
     this.game.player.x = event.offsetX; 
     this.game.player.y = event.offsetY; 
    }

   logic()
   {

   }
}
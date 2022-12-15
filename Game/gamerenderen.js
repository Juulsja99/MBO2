export class GameRenderer
{
 constructor(game)
   {
     this.game = game;
     this.canvas = document.getElementById("canvas");
     this.g = canvas.getContext("2d");
   }
   render()
   {
       let g = this.g;
       g.fillStyle = "#44ab38";
       g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
       
       g.fillStyle = "#e31926";
       g.fillRect(this.game.x, this.game.y, 10, 10);  
   }
}
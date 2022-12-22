import { rect } from "./rect.js";

export class GameRenderer
{

  constructor(game)
  {
   this.game = game;
   this.canvas = document.getElementById("canvas");
   this.g = canvas.getContext("2d");
   this.images = [];

   this.playerIdle = new rect(1,9,24,24);
  }
  
  loadImages()
  {
    let sources = ["img/bomberman.jpeg", "img/lara.jpeg", "img/link.jpeg", "img/mario.jpeg", "img/pac man.jpeg", "img/pikachu.jpeg", "img/Sonic.jpeg", "img/achtergrond.jpeg"];
    let scope = this;
    let loaded = 0;

    for(let i = 0; i < sources.length; i++)
    {

      let img = new Image();

      img.onload = function ()
      {
        loaded++;
        if (loaded == sources.length)
        {
          scope.game.startGame();
        }

      };
      img.src = sources[i];

      this.images.push[i];

    }
  }

  render()
 {
   let g = this.g;
   g.fillStyle = "#44ab38";
   g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
   g.fillStyle = "#e31926";
   let player = this.game.player;
   let clip = this.playerIdle;
   g.drawImage(this.images[0],clip.x, clip.y, clip.w, clip.h,
    player.x, player.y, player.w, player.h);
   g.fillRect(player.x, player.y, player.w, player.h);  
 }
}
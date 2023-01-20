import { rect } from "./rect.js";

export class GameRenderer
{

  constructor(game)
  {
   this.game = game;
   this.canvas = document.getElementById("canvas");
   this.g = canvas.getContext("2d");
   this.images = [];
   //. this.canvas.width = 800;
   //. this.canvas.height = 800;

   let animationsMap = {
    "Idle": [new rect(7,10,390,253)],
    "Hit" : []
   };
   this.playerIdle = new rect(7,10,390,253);
   this.playerHit = new rect(186,201,390,253);
   this.enIdle = new rect(7,10,390,253);
   
  }
  
  loadImages()
  {
    let sources = ["img/hamer.jpeg", "img/hamerhit.png", "img/lara2.png", "img/link.jpeg", "img/mario.jpeg", "img/pac man.jpeg", "img/pikachu.jpeg", "img/Sonic.jpeg", "img/achtergrond.jpeg", "img/bomberman.jpeg"];
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

      this.images.push(img);

    }
  }

  renderSprite(img, clip, pos)
  {
   this.g.drawImage(img, clip.x, clip.y, clip.w, clip.h, pos.x, pos.y, pos.w, pos.h); 

  }

  renderUi()
  {
    this.g.font = "30px Verdana";
    this.g.fillStyle = "#FFFF"
    this.g.fillText("Score:", 40, 40);
  }

  render()
 {
   let g = this.g;
   g.fillStyle = "#44ab38";
   g.fillRect(0, 0, this.canvas.width, this.canvas.height);
   this.renderSprite(this.images[0], this.playerIdle, this.game.player);
   this.renderSprite(this.images[1], this.playerHit, this.game.player)
   this.renderSprite(this.images[2], this.enIdle, this.game.en);

    g.beginPath();
    g.arc(this.game.player.cx(), this.game.player.cy(), this.game.player.w2(), 0, 2 * Math.PI);
    g.stroke();

    g.beginPath();
    console.log(this.game.en);
    g.arc(this.game.en.cx(), this.game.en.cy(), this.game.en.w2(), 0, 2 * Math.PI);
    g.stroke();

    this.renderUi()

 }
}
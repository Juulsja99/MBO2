export class GameRenderer
{

  constructor(game)
  {
   this.game = game;
   this.canvas = document.getElementById("canvas");
   this.g = canvas.getContext("2d");
   this.images = [];
  }
  
  loadImages()
  {
    let sources = ["bomberman.jpeg", "lara.jpeg", "link.jpeg", "mario.jpeg", "pac man.jpeg", "pikachu.jpeg", "Sonic.jpeg", "achtergrond.jpeg"];
    let scope = this;
    let loaded = 0;

    for(let i = 0; i , sources.length; i++)
    {

      let img = new Image();

      img.onload(function()
      {
        if (loaded == sources.length)
        {

        }

      })
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
   g.fillRect(player.x, player.y, player.w, player.h);  
 }
}
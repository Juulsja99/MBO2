export class Animation 
{
    constructor(animations)
    {
        this.animations = animations;
        this.setAnimation("Idle")
        this.animationName = "";
        this.frame = 0;
        this.frametime = 0;
    }

    setAnimation(animationName)
    {
        if (this.animationName == animationName)
        {
            return;
        }
        this.frame = 0;
        this.frametime = 0;
        this.animationName = animationName;
        this.current = this.animations[animationName];
    }

    moveToNextFrame(frametime)
    {
        this.frametime += frametime;
        if(this.frametime > 200)
        {
            this.frametime = 0;
            this.frame++;
        if (this.frame >= this.current.length)
        {
            this.frame = 0;
        }
        }
        
    }

    getCurrentFrame()
    {
        return this.current[this.frame];
    }
}
export class rect
{
    constructor(x, y, w, h)
    {
        this.x = 0.0 + x;
        this.y = 0.0 + y;
        this.w = 0.0 + w;
        this.h = 0.0 + h;
    }
    cx()
    {
        return this.x + this.w2();
    } 
    cy()
    {
        return this.y + this.h2();
    }
    w2()
    {
        return this.w / 2;
    }
    h2()
    {
        return this.h / 2;
    }
    right()
    {
        return this.x + this.w;
    }
    bottom()
    {
        return this.y + this.h;
    }
    Contains(x, y)
    {
        return x >= this.x && x <= this.Right() && y >= this.y && y <= this.Bottom()
    }
}

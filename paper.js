class paper
{
    constructor(x,y,r)
    {
    var options{
        isStatic:false,
        restituting:0.3,
        friction:0.5,
        density:1.2

    }
   this.x=x;
   this.y=y; 
   this.body=Bodies.circle(this.x, this.y, this.r/2, options)
   World.add(world, this.body);

}
disply()
{
       var paperpos=this.body.position;
       Push()
       Translaste(paperpos.x, paperpos.y);
       rectmode(center)
       strokeweight(3);
       fill(255,0,255)
       ellipse(0,0,this.r, this.r);
       Pop()

   }

}   


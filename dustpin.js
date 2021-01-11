class Dustpin
{
    constructor(x, y,width, height)
     {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustpin.png");
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("pink");
      image(this.image,pos.x,pos.y, this.width, this.height);
      pop();
    }
  };
  
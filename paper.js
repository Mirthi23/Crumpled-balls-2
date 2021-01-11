class Paper {
  constructor(x,y,radius) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,radius,options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    
    push();

    fill("white");
    image(this.image,pos.x, pos.y, this.radius,this.radius);
    pop();
  }
};
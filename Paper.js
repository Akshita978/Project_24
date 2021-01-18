class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }

    display() {
      ellipseMode(RADIUS);
      stroke(rgb(18,85,7))
      fill(rgb(18,85,7));
      ellipse(this.body.position.x,this.body.position.y, this.width, this.height);
    }
};
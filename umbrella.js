class Umbrella{

    constructor(x, y, width, height, angle){

        var options = {

            'restitution': 0.8,

            'friction': 0.1,

            'density': 1.0,

            isStatic : true

      }


      this.body = Bodies.rectangle(x, y, 10, 10, options);

      this.width = width;

      this.height = height;

      this.image = loadImage("walking_1.png");

      World.add(world, this.body);

    }

      display(){

        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);

        rotate(angle);

        strokeWeight(2);

        stroke(50, 50, 50);

        fill("red");

        imageMode(CENTER);

        image(this.image, 100, 400, 400, 400);

        pop();

      }

    }
  
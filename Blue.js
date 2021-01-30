class Bluepiece{

    constructor(x,y,width,height){
    
    var options = {
        friction:0,
        frictionAir: 0.098,
        density: 0.001
    }
    
    this.body = Bodies.rectangle(x , y, width , height , options);
    this.image = loadImage("blue.png");
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x , pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0 , this.width, this.height);
    pop();
    
    }
        moveRight(){
            Body.setVelocity(this.body,{x:5.6 , y: 0});
        }
        
        moveLeft(){
            Body.setVelocity(this.body,{x:-5.6 , y: 0});
        }
        moveUp(){
            Body.setVelocity(this.body,{x:0 , y: -6.2});
        }
        
    
    }
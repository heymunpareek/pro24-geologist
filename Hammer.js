class Hammer{
    constructor(x,y) {
        var hammerOptions={            
            friction: 1,
            density: 2,
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,150,50, hammerOptions);
        this.width = 150;
        this.height = 50;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;        
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("white");
        stroke("blue");
        strokeWeight(3);
        rect(0,0, this.width, this.height);
        pop();
        fill("blue");
        text("Hammer", pos.x -20, pos.y);
        
        
    }
}
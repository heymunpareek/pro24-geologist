class Rubber{
    constructor(x,y) {
        var rubberOptions={            
            friction: 5,
            density: 1,
            restitution: 0.3
        }
        this.body = Bodies.circle(x, y, 30, rubberOptions);
        this.radius = 30;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("blue");
        stroke("blue");
        strokeWeight(3);
        circle(0,0, this.radius*2); //circle in p5.js expects the third arguement to be the radius, but in matter.js, it is the diameter.
        pop();
        fill("white");
        textSize(7.5);
        text("Rubber", pos.x - 12, pos.y);
    }
}
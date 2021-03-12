class Sand {
    constructor(x,y) {
        var stoneOptions={
            friction: 1.3,
            density: 5,
            restitution: 1 
        }
        this.body = Bodies.circle(x, y, 5, stoneOptions);
        this.radius = 5;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("yellow");
        stroke("brown");
        strokeWeight(2);
        circle(0,0, this.radius*2);
        pop();
        fill("white");
        textSize(10);
        text("Sand", pos.x - 12, pos.y - 10);
    }
}
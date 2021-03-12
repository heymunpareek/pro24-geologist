class Stone {
    constructor(x,y) {
        var stoneOptions={
            friction: 1,
            density: 5,
            restitution: 1 
        }
        this.body = Bodies.rectangle(x, y, 50, 20, stoneOptions);
        this.width = 50;
        this.height = 20;
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
        stroke("brown");
        strokeWeight(3);
        rect(0,0, this.width, this.height);
        pop();
        fill("blue");
        textSize(10);
        text("Stone", pos.x-12, pos.y);
    }
}
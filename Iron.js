class Iron {
    constructor(x,y) {
        var ironOptions={
            friction: 1.4,
            density: 7,
            restitution: 0.5 
        }
        this.body = Bodies.rectangle(x, y, 100, 100, ironOptions);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("black");
        stroke("red");
        strokeWeight(3);
        rect(0,0, this.width, this.height);
        pop();
        fill("white");        
        textSize(10);
        text("Iron", pos.x-12, pos.y);
    }
}
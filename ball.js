class PaperBall {
    constructor(x, y, radius){
        var options = {
            restitution: 0.1,
            density: 1.2,
            friction: 0
        };
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        
        
        this.image = loadImage('paper.png');
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}
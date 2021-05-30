class Ball{
    
    constructor(x,y,radius,color) {
        var options = { isStatic:false, 
            restitution:1.2, 
            friction:0.01,
             density:1.5 }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius;
        this.color = color;
       
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(0);
        ellipseMode(RADIUS);
        
        
        ellipse(0,0,this.radius,this.radius);
        
        pop()
        
        
    }
}
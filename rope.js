class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.8,
            length: 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("yellow");
            strokeWeight(4);
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
    }
    
}
class Chain {
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            stiffness: 0.1,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        
        var X1 = pointA.x;
        var Y1 = pointA.y;

        var X2 = pointB.x + this.offsetX;
        var Y2 = pointB.y + this.offsetY;

        line(X1,Y1,X2,Y2);

        
    }
}
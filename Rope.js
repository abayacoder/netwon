class rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY =offsetY;

    var op={
        bodyA:body1,
        bodyB:body2,
        pointB={x:offsetX=offsetX,y:offsetY =offsetY}
    }
    this.rope=mater.constraint.create(op)
    World.add(World,this.rope)
    }
    display(){
        var point1 =this.rope.bodyA.position;
        var point2 =this.rope.bodyB.position;

        strokeWeight(2)

        var anchor1X = point1.X;
        var anchor1Y = point1.Y;

        var anchor2X = point2.X  + this.offsetX
        var anchor2Y = point2.Y  + this.offsetY

        Line(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }
}
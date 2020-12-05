class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY =offsetY;

    var op={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX=offsetX,y:offsetY =offsetY}
    }
    this.Rope=mater.constraint.create(op)
    World.add(world,this.Rope)
    }
    display(){
        var point1 =this.Rope.bodyA.position;
        var point2 =this.Rope.bodyB.position;

        strokeWeight(2)

        var anchor1X = point1.X;
        var anchor1Y = point1.Y;

        var anchor2X = point2.X  + this.offsetX
        var anchor2Y = point2.Y  + this.offsetY

        Line(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }
}

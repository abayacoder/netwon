class roof{
    constructor(x,y,width,height)
    {
       this.width=width;
       this.heigth=height;
       this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        World .add(world,this.body)
    }
}

display()
{
    
     push()
     rectMode(CENTER)
     rect(this.body.position.x,this.body.position.y,this.width,this.height,)
     fill(128,128,128)
     pop()
}
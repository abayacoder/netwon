
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,Rope1,Rope2,Rope3,Rope4,Rope5,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//roof=Bodies.rectangle(350,100,300,30,)
	//World.add(world,roof)
	
	
	bobObject1= new bob(250,300,50);
	bobObject2= new bob(300,300,50);
	bobObject3= new bob(350,300);
	bobObject4= new bob(400,300,50);
	bobObjec5= new bob(450,300,50);
	
roof1=new roof (350,100,300,20);	
	
  Rope1=new Rope (bobObject1.body,roof1.body,-100,0);
  World.add(world,Rope1)	
  
  Rope2=new Rope (bobObject1.body,roof1.body,-50,0);
  World.add(world,Rope2)	
  
  Rope3=new Rope (bobObject1.body,roof1.body,-0,0);
  World.add(world,Rope3)	
  
  Rope4=new Rope (bobObject1.body,roof1.body,+50,0);
  World.add(world,Rope4)	
  
  Rope5=new Rope (bobObject1.body,roof1.body,+100,0);
  World.add(world,Rope5)	
  
 
}


function draw() {
  
  background("lavender");
  Engine.udpate(engine)

roof1.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  Rope1.display();
  Rope2.display();
 Rope4.display();
 Rope5.display();

 drawSprites();
 
}
function keyPressed(){
	if(KeyCode===32)
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:730,y:0})
}










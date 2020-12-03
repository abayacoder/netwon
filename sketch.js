var roof,rope1,rope2,rope3,rope4,rope5,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=Bodies.rectangle(350,100,300,30,)
	World.add(world,roof)
	
	
	bobObject1= new bob(250,300);
	bobObject2= new bob(300,300);
	bobObject3= new bob(350,300);
	bobObject4= new bob(400,300);
	bobObjec5= new bob(450,300);
	
  rope1=new rope (bobObject1.body,roof.body,-100,0);
  World.add(world,rope1)	
  
  rope2=new rope (bobObject1.body,roof.body,-50,0);
  World.add(world,rope2)	
  
  rope3=new rope (bobObject1.body,roof.body,-0,0);
  World.add(world,rope3)	
  
  rope4=new rope (bobObject1.body,roof.body,+50,0);
  World.add(world,rope4)	
  
  rope5=new rope (bobObject1.body,roof.body,+100,0);
  World.add(world,rope5)	
  
 
}


function draw() {
  
  background("white");
  Engine.udpate(engine)

roof.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
 rope4.display();
 rope5.display();

 drawSprites();
 

function keyPressed(){
	if(Keycode===32)
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:730,y:0})
}
}


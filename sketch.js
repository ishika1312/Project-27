
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 170, 25);;

	bobObj1 = new Bob(340, 350, 15);
	bobObj2 = new Bob(370, 350, 15);
	bobObj3 = new Bob(400, 350, 15);
	bobObj4 = new Bob(430, 350, 15);
	bobObj5 = new Bob(460, 350, 15);

	rope1 = new Rope(bobObj1.body, roof.body, -60, 0);
	rope2 = new Rope(bobObj2.body, roof.body, -30, 0);
	rope3 = new Rope(bobObj3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObj4.body, roof.body, 30, 0);
	rope5 = new Rope(bobObj5.body, roof.body, 60, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var options ={
			isStatic:false}
		Matter.Body.applyForce(bobObj1.body, bobObj1.body.position,{x:-20,y:-20});
	}
}




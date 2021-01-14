
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(400,140,300,30);

	bob_1 = new bob(300,400,25);
	bob_2 = new bob(350,400,25);
	bob_3 = new bob(400,400,25);
	bob_4 = new bob(450,400,25);
	bob_5 = new bob(500,400,25);

	rope_1 = new rope(bob_1.body,roof1.body,-100,0);
	rope_2 = new rope(bob_2.body,roof1.body,-50,0);
	rope_3 = new rope(bob_3.body,roof1.body,0,0);
	rope_4 = new rope(bob_4.body,roof1.body,50,0);
	rope_5 = new rope(bob_5.body,roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkgrey");

  rope_1.display();
  rope_2.display();
  rope_3.display();
  rope_4.display();
  rope_5.display();

  roof1.display();

  bob_2.display();
  bob_1.display();
  bob_3.display();
  bob_4.display();
  bob_5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob_1.body,bob_1.body.position,{x:-15,y:-15});
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

  	roof = new Roof(240,150,250,20);
  	bob1 = new Bob(240,350);
  	bob2 = new Bob(200,350);
  	bob3 = new Bob(160,350);
  	bob4 = new Bob(280,350);
   	bob5 = new Bob(320,350);
  	rope1 = new Chain(bob1.body,roof.body,0,0);
    rope2 = new Chain(bob2.body,roof.body,-50,0);
    rope3 = new Chain(bob3.body,roof.body,-120,0);
    rope4 = new Chain(bob4.body,roof.body,60,0);
    rope5 = new Chain(bob5.body,roof.body,120,0);
    //line(240,150,240,350);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //line.display();
  keyPressed();

  
  drawSprites();
 
}

  function keyPressed(){
		if(keyCode === UP_ARROW){
            Matter.Body.applyForce(bob3.body,bob3.body.position,{x:100,y:-100});
        }
	}





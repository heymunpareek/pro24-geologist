
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

	//Create the Bodies Here.
	
	ground1 = new Ground(400,height,800,100);
	hammer1 = new Hammer(400,0);
	
	stone1 = new Stone(300,0);
	rubber1 = new Rubber(450,0);
	iron1 = new Iron(600,10);
	sand1 = new Sand(400,-50);
	sand2 = new Sand(500,0);
	sand3 = new Sand(450, 0);
	sand4 = new Sand(550,0);
	
	Engine.run(engine);
  
}


function draw() {  
  background(0);
  Engine.update(engine);

  hammer1.display();
  ground1.display();
  
  stone1.display();	
  rubber1.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();

}




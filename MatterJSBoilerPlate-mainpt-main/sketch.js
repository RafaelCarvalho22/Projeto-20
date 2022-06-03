
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var block1,block2,block3,ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	Engine.run(engine);

	var ground_options ={
    	isStatic : true
	}

	var block1_options ={
    	restution : 3,
		//friction : 0.95,
		//frictionAir : 0.01
	}
	var block2_options ={
    	restution : 3,
		//friction : 1,
		//frictionAir : 0.02
	}
	var block3_options ={
    	restution : 3,
		//friction : 0.85,
		//frictionAir : 0.03
	}

    
	ground = Bodies.rectangle(400,690,800,15,ground_options);
    World.add(world,ground);

	block1 = Bodies.circle(100,10,80,block1_options);
	World.add(world,block1);
    block2 = Bodies.rectangle(400,50,80,80,block2_options);
	World.add(world,block2);
    block3 = Bodies.rectangle(650,50,200,80,block3_options);
	World.add(world,block3);
	
	rectMode(CENTER); 
    ellipseMode(RADIUS);

}


function draw() {
  
  background("blue");
  Engine.update(engine);
 


  ellipse(block1.position.x,block1.position.y,80);
  rect(block2.position.x,block2.position.y,80,80);
  rect(block3.position.x,block3.position.y,200,80);
  rect(ground.position.x,ground.position.y,800,15);


  drawSprites();
 
}




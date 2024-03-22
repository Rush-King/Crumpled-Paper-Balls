
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var wall1;
var wall2;


function setup() {

	createCanvas(1535,726);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,706,width,20);
	wall1 = new Ground(1100,670,20,120);
	wall2 = new Ground(1400,670,20,120);

	var ball_options = {

		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(300,20,25,ball_options);
	World.add(world,ball);
	fill(270);

	Engine.run(engine);
  
}

function draw() {

	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);

	ellipse(ball.position.x,ball.position.y,25);
	ground.display();
	wall1.display();
	wall2.display();

	Engine.update(engine);

	if(keyDown("up")){

		hForce() && vForce();

	}

	drawSprites();
 
}

function hForce() {

	Matter.Body.applyForce (ball,{x:0,y:0},{x:10,y:0});

}

function vForce() {

	Matter.Body.applyForce (ball,{x:0,y:0},{x:0,y:-15});

}




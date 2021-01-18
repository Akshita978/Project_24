//Declaring the variables.
var paper,ground,dustbinLeft,dustbinRight,dustbinBottom;
var dustbinExtra1,dustbinExtra2,dustbinExtra3,dustbinExtra4;

//Declaring the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Function to Setup.
function setup() {
	//Creating the canvas area.
	createCanvas(800, 700);

	//Creating Engine for the variable 'engine'.
	engine = Engine.create();
	//Storing engine's world in the variable 'world'.
	world = engine.world;

	//Creating the Bodies.
	paper = new Paper(100,200);
	ground = new Ground(width/2,650);
	dustbinLeft = new Dustbin(600,590,10,100);
	dustbinRight = new Dustbin(680,590,10,100);
	dustbinBottom = new Dustbin(640,635,70,10);

	//Creating extra sprites.
	dustbinExtra1 = createSprite(640,615,70,10);
	dustbinExtra2 = createSprite(640,595,70,10);
	dustbinExtra3 = createSprite(640,575,70,10);
	dustbinExtra4 = createSprite(640,555,70,10);
	//Giving them red color.
	dustbinExtra1.shapeColor = "red";
	dustbinExtra2.shapeColor = "red";
	dustbinExtra3.shapeColor = "red";
	dustbinExtra4.shapeColor = "red";

	//Running the previously created engine.
	Engine.run(engine);
}

//Draw loop function.
function draw() {

	//Setting rectMode as 'CENTER'.
	rectMode(CENTER);
	//Setting ellipseMode as 'RADIUS'.
	ellipseMode(RADIUS);
	//Setting background as light blue.
	background("yellow");

	//Displaying info text.
	fill("black");
	textSize(20);
	textFont("cursive");
	textStyle(BOLD);
	textAlign(CENTER);
	text("Press Right arrow key to drop the ball of trash into the dustbin and make the",400,200);
	text("city clean.",400,225);

	 
	//Displaying the bodies.
	paper.display();
	ground.display();
	dustbinLeft.display();
	dustbinRight.display();
	dustbinBottom.display();

	//Displaying the sprites.
	drawSprites();
}

//Function for pressing keys.
function keyPressed() {
	//Applying force to paper body when Right Arrow key is pressed.
	if(keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-75});
	}
}
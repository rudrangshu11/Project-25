
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paper, ground, dustbin2, dustbin3,dustbin,dustbinImg;

function preload()
{
dustbinImg = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	//dustbin = createSprite(970, 525, 40,40);
	//dustbin.addImage(dustbinImg);
	//dustbin.scale = 0.8;
	dustbin1 = new Box(870,520,200,15);
	dustbin2 = new Box(1070,520,200,15);
	dustbin3 = new Box(970,635,15,200);
	paper = new Paper(70,570);
	ground = new Ground();
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
	image(dustbinImg, 970, 525, 200, 200);
	paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
  //fill('white');
 //text(mouseX+","+mouseY, 100,100);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
	}
}


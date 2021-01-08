
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var groundObject,paperObject,dusbinObj;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj =new Dustbin(1200,650);
	paperObject =new Paper(200,450,40);
	groundObject =new Ground(width/2,670,width,20);
	//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100
	 boxY=610;

	 boxleftSprite = createSprite(boxPostion,boxY,20,100);
	 boxleftSprite.shapeColor=color(255,0,0);

	 boxleftBody = Bodies.rectangle(boxPostion+20,boxY,20,100, {isStatic:true} );
	 World.add(world, boxleftBody);

	 boxBase=createSprite(boxPostion+100,boxY+40,200,20);
	 boxBase.shapeColor=color(255,0,0);

	 boxBottomBody = Bodies.rectangle(boxPostion+100,boxY+45-20,200,20, {isStatic:true} );
	 World.add(world,boxBottomBody);

	 boxleftSprite=createSprie(boxPostion+200,boxY,20,100,);
	 boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPositon+200-20,boxY,20,100, {isStatic:true} );
	World.add(world,boxRightBody);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	})

	Engine.run(engine);
	//Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display();
  paperObject.display();
  groundObject.display();
  world.display();
  
  drawSprites();
 
}
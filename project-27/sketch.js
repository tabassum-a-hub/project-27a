
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const constraint = Matter.Constraint;
var ropeObj, bob1,roofObject	
var world;
var bob2,bob3,bob4,bob5;
var line;
var ropeObj1;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	
	ropeObj=new Rope(1200,650);
	bob1=new Bob(200,450,40);
	roofObject=new Roof(width/2,670,width,20);

    bob2=new Bob(240,450,40);
	bob3=new Bob(280,450,40);
	bob4=new Bob(320,450,40);
	bob5=new Bob(360,450,40);

	line = new Line(285,350,200,20)

	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);

	ropeObj1= new Rope (bob1.body,roofObject.body,-bobDiameter*2,0)


  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  ropeObj.display();
  bob1.display();
  roofObject.display();
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  line.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:85,y:-85});
    
  	}
}







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

   roof = new Ground(400,350,350,20);

   ball1 = new Ball(400,550,30);
   ball2 = new Ball(460,550,30);
   ball3 = new Ball(520,550,30);
   ball4 = new Ball(340,550,30);
   ball5 = new Ball(280,550,30);
   chain1 = new Slingshot(ball1.body,{x:400,y:350})
   chain2 = new Slingshot(ball2.body,{x:460,y:350})
   chain3 = new Slingshot(ball3.body,{x:520,y:350})
   chain4 = new Slingshot(ball4.body,{x:340,y:350})
   chain5 = new Slingshot(ball5.body,{x:280,y:350})
  
	Engine.run(engine);

}


function draw() {

  background("grey");
  
roof.display()
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
chain1.display() 
chain2.display()
 chain3.display()
 chain4.display()
 chain5.display()
}

function keyPressed(){
	if(keyCode === 32){
			Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-180,y:10});
	}
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, world, engine, polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
background(800,800)
engine = Engine.create()
world = engine.world;
ground = new Ground(600,height,1200,20);
platform = new Ground(230, 310, 150, 20);



block1 = new Box(170,285,20,30)
block2 = new Box(190,285,20,30)
block3 = new Box(210,285,20,30)
block4 = new Box(230,285,20,30)
block5 = new Box(250,285,20,30)
block6 = new Box(270,285,20,30)
block7 = new Box(290,285,20,30)
fill("red")
block8 = new Box(190,255,20,30)
block9 = new Box(210,255,20,30)
block10= new Box(230,255,20,30)
block11 = new Box(250,255,20,30)
block12 = new Box(270,255,20,30)
fill("orange")
block13 = new Box(210,225,20,30)
block14 = new Box(230,225,20,30)
block15 = new Box(250,225,20,30)
fill("yellow")
block16 = new Box(230,195,20,30)
fill("gray")

ball = Bodies.circle(50,100,20)
World.add(world,ball)

slingshot = new SlingShot(this.ball,{x:200, y:50});
}

function draw(){
    background("white")
ground.display();
platform.display();

fill("blue");
imageMode(CENTER);
image(polygon_img ,ball.position.x,ball.position.y,40,40);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
slingshot.display()
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
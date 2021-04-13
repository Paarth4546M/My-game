const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball;
var score = 0

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.rectangle(400,10,10,10,{restitution:0.8})
  World.add(world,ball)

 bucket1 = Bodies.rectangle(250,350,90,90,{isStatic:true})
 World.add(world,bucket1)

 bucket2 = Bodies.rectangle(550,400,90,90,{isStatic:true})
 World.add(world,bucket2)
 
  
}

function draw() {
  background(230);
  Engine.update(engine);
  push();
  fill("red")
  text(mouseX + "," + mouseY, mouseX, mouseY);
  pop();

  
  rectMode(CENTER)
  rect(bucket1.position.x,bucket1.position.y,90,90)
  rect(bucket2.position.x,bucket2.position.y,90,90)
 

  rect(ball.position.x,ball.position.y,10,10)

 if(keyDown(RIGHT_ARROW)){
   ball.position.x = ball.position.x + 2
 }
 if(keyDown(LEFT_ARROW)){
  ball.position.x = ball.position.x - 2
}

  if(frameCount>100 && ball.position.y < 600){
    push()
    textSize(40)
    text("You Win",330,300)
    pop()
  }
  
  if(ball.position.y >= 600){
    push()
    textSize(40)
    text("You Lose",330,300)
    pop()
  }

  text("Try not to make the ball go out off the canvas",100,10)
  text("You can use arrow keys to control the ball",102,30)
  drawSprites();
}

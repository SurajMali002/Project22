var fair,fairImg;
var night;
var star,star1;

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

function preload(){
  fairImg=loadAnimation("images/fairy1.png","images/fairy2.png");
  night=loadImage("images/starnight.png");
 star1=loadImage("images/star.png");

}

function setup() {
  createCanvas(800, 750);

  fair=createSprite(150,550,50,50);
  fair.addAnimation("fairRunning",fairImg);
  fair.scale=0.3;

  star=createSprite(750,100,50,50);
  star.addImage(star1);
  star.scale=0.2;
  
  engine=Engine.create()
  world=engine.world;
  
  starBody=Bodies.circle(650,30,5,);
  World.add(world,starBody,{restitution:0.5,isStatic:true})
  

  Engine.run(engine)


}


function draw() {
  background(night);

  fair.velocityX=0; 
 
  
 
drawSprites();
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fair.x=fair.x-20;
  }
  if(keyCode === RIGHT_ARROW){
    fair.x = fair.x +20 
  }
  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }
}


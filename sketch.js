var garden,rabbit;
var leaf,path,grass,apple,orangeLeaf,redImage;
var leafImg,pathImg,grassImg,appleImg,orangeLeafImg,redImage;
var gardenImg,rabbitImg;
var score =0;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg= loadImage("leaf.png");
  pathImg= loadImage("path.png");
  grassImg= loadImage("grass.png");
  appleImg= loadImage("apple.png");
  orangeLeafImg= loadImage("orangeLeaf.png");
  redImageImg= loadImage("redImage.png");
  

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX
 
  spawnApples();
  spawnLeaf();

  drawSprites();
  textSize(20);
  stroke("Red");
  text("score:"+score,300,50);

}

 

function spawnApples()
{
if  (frameCount% 80===0) 
{

  apple= createSprite(100,40,10,10);
      apple.addImage(appleImg);
    apple.x=Math.round(random(10,100))
      apple.scale=0.09;
  apple.velocityY=3;
  apple.lifeTime=200;
}
}   
  
 function spawnLeaf()
 {
  if  (frameCount% 80===0)
  {
    leaf= createSprite(200,50,10,10);
leaf.addImage(leafImg);
leaf.x=Math.round(random(150,200))
leaf.scale=0.09;
leaf.velocityY=3;
leaf.lifeTime=200;
  }

 }
  



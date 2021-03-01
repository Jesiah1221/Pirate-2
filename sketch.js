



var ship, shipImage
var backgroundImage
var enemyship, enemyshipImage; 
var canon, canonImage
var bomb, bombImage
var score = 0;

function preload() {
  shipImage = loadImage("Images/ship.png")
  backgroundImage = loadImage("Images/ocean.jpg")
  enemyshipImage = loadImage("Images/ship.png") 
  canonImage = loadImage("Images/canonball.png")
  bombImage = loadImage("Images/bomb.png")



}

function setup() {
  createCanvas(800,800);
  ship = createSprite(100, 400, 50, 50);
  ship.addImage(shipImage)
  ship.scale = 0.4;



  

  
}

function draw() {
  background(backgroundImage);
  textSize(24);  
  text("score: "+score, 650,50);


  if(keyDown(UP_ARROW)){
    ship.y-= 4;
  }
  if(keyDown(DOWN_ARROW)){
    ship.y+= 4;
  }
  if(keyDown("SPACE")){
    spawncanon();
    canon.velocityX = 3;
  }
  

   
  spawnships();
  

  drawSprites();
}

function spawnships(){
  if(frameCount% 60 === 0){
    var r = Math.round(random(350,600));
    enemyship = createSprite(700,r,50,50);
    enemyship.addImage(enemyshipImage)
    enemyship.velocityX = -2
    enemyship.scale = 0.4;

    enemyship.lifeTime = 50
  }
    
}

function spawncanon(){
  canon = createSprite(ship.x, ship.y,50,50)
  canon.addImage(canonImage)
  canon.scale = 0.1;

}
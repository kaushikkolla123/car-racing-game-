var background;
var obstacle1;
var background_img;
var volkswagen_img;
var volkswagen;
var track;
var track_img;
var obstacle2;
var invisibleGround;
var gamstate = PLAY;
var END;
var PLAY;
var maserati_img;
var maserati;

function preload(){
	background_img = loadImage("background.png");
	volkswagen_img = loadImage("volkswagen.png");
	track_img = loadImage("track.png");
	maserati_img = loadImage("maserati.png"); 
}
function setup() {
createCanvas(500,500);
var obstacle1 = createSprite(250,484.5,500,30);
obstacle1.shapeColor = "red";

volkswagen = createSprite(50,400,30,10);
volkswagen.addImage("volkswagen",volkswagen_img);
volkswagen.scale = 0.1;

invisibleGround = createSprite(495,250,30,500);
invisibleGround.shapeColor = "blue";

maserati = createSprite(450,100,30,10);
maserati.addImage("maserati",maserati_img);
maserati.scale = 0.1;


invisibleGround = createSprite(5,250,30,500);
invisibleGround.shapeColor = "blue";
}

function draw() {
  background(track_img);
  fill("red");
  text("collide the ground with invisibleGround to win");
  drawSprites();
volkswagen.collide(invisibleGround);
  maserati.collide(invisibleGround);
if(gamstate === PLAY){
	invisibleGround.velocityX = 0;
}
  if(keyCode === LEFT_ARROW){
  	volkswagen.velocityX = 2;
  }
  else if(keyCode === RIGHT_ARROW){
  	volkswagen.velocityX = 0;
  }

  if(keyCode === UP_ARROW){
maserati.velocityX = -2;
  }
  else if(keyCode === DOWN_ARROW){
  maserati.velocityX  = 0;
  }
}
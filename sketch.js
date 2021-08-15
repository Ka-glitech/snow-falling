var background, backgroundImg;
var snow1, snow1Img;
var snow4Img;
var snow5Img;





function preload() {
  backgroundImg= loadImage("SnowFalling-C33-Template-main\snow Background.jpg")
  snow4Img= loadImage("SnowFalling-C33-Template-main\snow4.webp")
  snow5Image= loadImage("SnowFalling-C33-Template-main\snow5.webp")


}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background.addImage(backgroundImg);
  
  background(255,255,255);  
  drawSprites();
}
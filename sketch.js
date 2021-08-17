
var newX=500

function preload (){
  spaceShip1Img=loadImage("spaceship1.png")
  spaceShip2Img=loadImage("spaceship2.png")
  spaceShip3Img=loadImage("spaceship3.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
for(var i=0; i<25; i++){
  spaceship1=new SpaceShip(newX)
  newX=spaceship1.width + newX + 300

  bulletGroup=new Group ()
}
  
rocket1=new Rocket()

}

function draw() {
  background(0);  
  drawSprites();
camera .position.x=rocket1.body.x+300
  if(keyDown(UP_ARROW)){
    rocket1.body.y-=5}

    if(keyDown(DOWN_ARROW)){
      rocket1.body.y+=5}

      if(keyDown(RIGHT_ARROW)){
        rocket1.body.x+=5}

        if(keyDown(LEFT_ARROW)){
          rocket1.body.x-=5
        }
if(frameCount%100===0){
  bullet=createSprite(width-100,random(0,height))
  bullet.velocityX=-6
  bulletGroup.add (bullet)
}
}


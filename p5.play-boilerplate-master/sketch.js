var playable_character
var npc,b
var bgr,npcgr;
var score=0;
var playable_character_image;
var playable_character_left;
var playable_character_right;

function preload() {
  playable_character_image = loadImage("images/front.png")
  playable_character_left = loadImage("images/left.png")
  playable_character_right = loadImage("images/right.png")
}

function setup() {
  createCanvas(500, 500);
playable_character = createSprite(250, 450, 20, 60);

 bgr=createGroup();
  npcgr=createGroup();
}
function bullet() {
     if (keyWentDown(32)) { 
      playable_character.addImage("label1", playable_character_image)
      playable_character.scale = 0.45
      b = createSprite(playable_character.x + 25, 400, 9, 25)
      b.velocityY = -6
  bgr.add(b);
      // b.debug=true;
    }
   
}

function draw() {
  background("pink");  
  text("score" +score,445,95);
  hitman()
 // createEdgeSprites()
 move()
  borders()
  player_legs()
 
  
  bullet();
  
  obstacles()
 // if(npcgr.y<400){
  if(npcgr.isTouching(bgr)){
    console.log("i m here")
    score=score+1;
    npc. shapeColor="red"
    npc.destroy();
  }
 // }
  drawSprites();
}

function player_legs()
{
// this is for left arrow
if (keyWentUp("left")) {
  playable_character.velocityX = 0
}

if (keyWentDown("left")) {
  playable_character.velocityX = -4
}
// this is for right arrow
if (keyWentDown("right")) {
  playable_character.velocityX = 4
  
}

if (keyWentUp("right")) {
  playable_character.velocityX = 0
  
}
}



function hitman()
{
  if (frameCount % 100 === 0) {
    npc = createSprite(250,10,20,60);
    npc.x = Math.round(random(50,450));
    // npc.addImage(cloudImage);
    // npc.scale = 0.5;
    npc.velocityY = 3;
    npcgr.add(npc);
    // npc.debug=true;
}
}
function borders() {
  if (playable_character.x < 10) {
    playable_character.velocityX = 4
    console.log("working")
  }
  
  else if (playable_character.x > 490){
    playable_character.velocityX = -4
  }
}


function obstacles()
{
  if (frameCount % 600 === 0) {
    barrier = createSprite(250,-5,50,60);
    barrier.x = Math.round(random(50,450));
    // npc.addImage(cloudImage);
    // npc.scale = 0.5;
    barrier.velocityY = 2;
}
}

function move() {
  if (keyWentDown("left")) {
    playable_character.addImage("label1", playable_character_left)
    playable_character.scale = 0.45
  }
  
  if (keyWentUp("left")) {
   playable_character.addImage("label1", playable_character_image)
   playable_character.scale = 0.45
  }

  if (keyWentUp("right")) {
    playable_character.addImage("label1", playable_character_image)
    playable_character.scale = 0.45
  }
  
  if (keyWentDown("right")) {
    playable_character.addImage("label1", playable_character_right)
    playable_character.scale = 0.45
  }
}
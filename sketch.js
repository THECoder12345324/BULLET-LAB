/* This is the code for the car simulator. Made by Madhuram Sharma*/


//The settings for the simulator
var wall1, wall2, wall3, wall4, thickness1, thickness2, thickness3, thickness4;
var startbullet, bullet1, bullet2, bullet3, bullet4, speed, weight;

var START = 0;
var END = 1;
var PLAY = 2;
var gamestate = START;
var height = 800;
var width = 1600;

function setup() {
  createCanvas(1600,800);
  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);
  thickness4 = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall1 = createSprite(1300, height / 6, thickness1, 100);
  wall2 = createSprite(1300, height / 3, thickness2, 100);
  wall3 = createSprite(1300, height / 2, thickness3, 100);
  wall4 = createSprite(1300, (height / 3) * 2, thickness4, 100);
  startwall = createSprite(1200, (height / 8), 50, 100);
  startbullet = createSprite(200, (height / 8), 40, 10);
  bullet1 = createSprite(200, height / 6, 40, 10);
  bullet2 = createSprite(200, height / 3, 40, 10);
  bullet3 = createSprite(200, height / 2, 40, 10);
  bullet4 = createSprite(200, (height / 3) * 2, 40, 10);
  bullet1.visible = false;
  bullet2.visible = false;
  bullet3.visible = false;
  bullet4.visible = false;
  startbullet.visible = true;
  startwall.visible = true;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
}

function draw() {
  background(255, 250,250);  
  //Draws the sprites
  drawSprites();

  //Only collides if the gamestate is start
  if (gamestate === START) {
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    wall4.visible = false;
    bullet1.visible = false;
    bullet2.visible = false;
    bullet3.visible = false;
    bullet4.visible = false;
    startbullet.visible = true;
    startwall.visible = true;
    fill("black");
    textSize(50);
    text("Welcome to the Bullet Lab", 550, 300);
    textSize(25);
    text("Here we test wall strength against bullets", 600, 350);
    textSize(40);
    text("Press s to start", 700, 470)
    startbullet.velocityX = 48;
    if (hasCollided(startbullet, startwall)) {
      startbullet.velocityX = 0;
      if (World.frameCount % 60 === 0) {
        startbullet.x = 200;
        startbullet.y = height / 8;
      }
    }
  }
  if (gamestate === START && keyDown("s")) {
    gamestate = PLAY;
    thickness1 = random(22, 83);
    thickness2 = random(22, 83);
    thickness3 = random(22, 83);
    thickness4 = random(22, 83);
  }
  if (gamestate === PLAY) {
    startbullet.visible = false;
    startwall.visible = false;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    wall4.visible = true;
    
    wall1.width = thickness1;
    wall2.width = thickness2;
    wall3.width = thickness3;
    wall4.width = thickness4;
    speed = random(223, 321);
    weight = random(30, 52);
    bullet1.velocityX = speed;
    bullet2.velocityX = speed;
    bullet3.velocityX = speed;
    bullet4.velocityX = speed;
    if(hasCollided(bullet1, wall1)) {
      bullet1.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness1 * thickness1 * thickness1);
      
      if (damage>10) {
        wall1.shapeColor = color(255, 0, 0);
      }

      if (damage<10) {
        wall1.shapeColor = color(0, 255, 0);
      }
      gamestate = END;
    }
    if(hasCollided(bullet2, wall2)) {
      bullet2.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness2 * thickness2 * thickness2);
  
      if (damage>10) {
        wall2.shapeColor = color(255, 0, 0);
      }

      if (damage<10) {
        wall2.shapeColor = color(0, 255, 0);
      }
      gamestate = END;
    }
    if(hasCollided(bullet3, wall3)) {
      bullet3.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness3 * thickness3 * thickness3);
      
      if (damage>10) {
        wall3.shapeColor = color(255, 0, 0);
      }

      if (damage<10) {
        wall3.shapeColor = color(0, 255, 0);
      }
      gamestate = END;
    }
    if(hasCollided(bullet4, wall4)) {
      bullet4.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness4 * thickness4 * thickness4);
      
      if (damage>10) {
        wall4.shapeColor = color(255, 0, 0);
      }

      if (damage<10) {
        wall4.shapeColor = color(0, 255, 0);
      }
      gamestate = END;
    }
  }
  if (gamestate === END) {
    textSize(30);
    fill("black");
    text("Press r to reset", 700, 400);
  }
  if (gamestate === PLAY || gamestate === END) {
    text("Bullet Speed: " + Math.floor(speed), 150, 730);
    text("Bullet Weight: " + Math.floor(weight), 450, 730);
  }
  if (gamestate === END && keyDown("r")) {
    gamestate = START;
    reset();
  }
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}


//Defining the reset function so that it can be used by the main code
function reset() {
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  bullet1.visible = false;
  bullet2.visible = false;
  bullet3.visible = false;
  bullet4.visible = false;
  startbullet.visible = true;
  startwall.visible = true;
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1, boggie2, boggie3;
var chain1;
var trainSound
var crashSound
var flag = 0;
var b1, b2, b3, b4, b5, b6;
var rock;
var c1, c2, c3, c4, c5;
var flag = 0;

function preload() {
  bg = loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200, 400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600, 380, 1200, 20);
  b1 = new Boggie(100, 200, 50, 50);
  b2 = new Boggie(200, 200, 50, 50);
  b3 = new Boggie(300, 200, 50, 50);
  b4 = new Boggie(400, 200, 50, 50);
  b5 = new Boggie(500, 200, 50, 50);
  b6 = new Boggie(600, 200, 50, 50);
  rock = new Rock(1000, 300, 120, 120);
  c1 = new Chain(b1.body, b2.body);
  c2 = new Chain(b2.body, b3.body);
  c3 = new Chain(b3.body, b4.body);
  c4 = new Chain(b4.body, b5.body);
  c5 = new Chain(b5.body, b6.body);
}

function draw() {
  background(bg);
  Engine.update(myEngine);
  ground.show();
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  rock.show();
  c1.show();
  c2.show();
  c3.show();
  c4.show();
  c5.show();
  var colision = Matter.SAT.collides(b6.body, rock.body);
  if(colision.collided){
    flag = 1;
  }
  if(flag===1){
    textSize(30);
    fill("blue");
    text("crash",500,200);
    crashSound.play();
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(b6.body,{x:b6.body.position.x,y:b6.body.position.y},{x:0.5,y:0});
  }
}

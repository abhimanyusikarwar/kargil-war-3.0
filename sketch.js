const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var soldier;
var enemy;
var img;
var ground;
var flag;
var fl;
var gameState=0;
var button;
var img2;
var sm;

function preload(){
  img=loadImage("images/mount.png");
  fl=loadImage("images/Indianflag.png");
  img2=loadImage("images/image (23).png");
  sm=loadImage("images/s2.png");
  sm2=loadImage("images/soldier.png");
}

function setup() {
  createCanvas(1200,750);

  database = firebase.database();

  engine=Engine.create();
  world=engine.world;
  soldier= createSprite(400,550,150,150);
  soldier.addImage(sm);
  soldier.scale=0.3;
  enemy= new Enemy(870,80,200,100);
  ground=new Mountains(600,650,1200,10); 
  flag=createSprite(550,550,20,20);
  flag.addImage(fl);
  flag.scale=0.5;
  button= new Button();
}

function draw() {
  
  Engine.update(engine);
  if(gameState===0){
    background(img); 
    enemy.display();
    button.display();
   
   textSize(20);
  fill("white");
  text("point 4574",830,60);
  fill("black");
  text("enemy country have captured a large area of Kargil",200,300);
  text("two points are most important to be recaptured they are 4574 and 5353 because these points covers a very large area of Kargil",50,345)
  text(" out of which point 5353 is most difficult to recapture",200,360)
text("13 JAK rifles have been targeted to recapture the point 4574 and 5353 click on this button to start the game ",200,380);
text("Kargi WAR",750,400);

}
  if(gameState===1){
    
    textSize(24);
    fill("black");
//text("gameStarted",800,150);
//ground.display();
background(img2);
    var hide=createButton("hide");
    hide.position(800,580);
  if(hide.mousePressed(function(){
    soldier.visible=false;
  }));
    var shoot=createButton("shoot");
    shoot.position(800,660);
    if(shoot.mousePressed(function(){
  soldier.addImage(sm2);
  soldier.scale=0.3;
    }));
    var run=createButton("run");
    run.position(800,620);
    if(run.mousePressed(function(){
      soldier.position.x=soldier.position.x+100;
    }));
   var walk=createButton("walk");
   walk.position(840,620);
   if(walk.mousePressed(function(){
   soldier.position.x=soldier.position.x+10;
   }));
   var show=createButton("show");
   show.position(840,580);
   if(show.mousePressed(function(){
    soldier.visible=true;
   }));
   var stand=createButton("stand");
   stand.position(860,660);
   if(stand.mousePressed(function(){
    soldier.addImage(sm);
   }));
   
  }
  drawSprites();
}
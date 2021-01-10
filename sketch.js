var bow,bowimage,back,backimage;
var balloon1,balloon2,balloon3,balloon4;
var arrow,Arrow,arrowimage,arrowGroup;
var blue,red,green,pink,blueGroup,redGroup,greenGroup,pinkGroup;
var score,life;
var gamestate="play"; 
var end;
var inv;



function preload() {
  backimage = loadImage("background0.png");
  
  bowimage = loadImage("bow0.png");
  
  arrowimage = loadImage("arrow0.png");
  
  balloon1 = loadImage("blue_balloon0.png");
  balloon2 = loadImage("red_balloon0.png");
  balloon3 = loadImage("green_balloon0.png");
  balloon4 = loadImage("pink_balloon0.png"); 
}

function setup() {
  createCanvas(600, 600);
  back = createSprite(0, 0, 600, 600);
  back.addAnimation("BG", backimage);
  back.scale = 3;


  bow = createSprite(550, 300, 20, 50);
  bow.addImage("B", bowimage);
  bow.scale = 1;
  
  inv = createSprite(600,300,5,600);
  inv.visible=false;
  
  score=0;
  life=5;
  arrowGroup=new Group();
  blueGroup=new Group();
  redGroup=new Group();
  greenGroup=new Group();
  pinkGroup=new Group();
}

function draw(){ 
  background("white")
  
  if(gamestate==="play"){
    
  bow.y=mouseY;

  back.velocityX = -3
    
  if(keyWentDown("space")){
  Arrow();
  }     
  
    
  var select_balloon = Math.round(random(1,4));
 if(World.frameCount % 65=== 0){
    if(select_balloon === 1){
      Blue_Balloon();
    }else if(select_balloon === 2){
      Red_Balloon();       
    }else if(select_balloon === 3){
      Green_Balloon();
    }else if(select_balloon === 4){
      Pink_Balloon();
    }                     
 } 
    
    if(arrowGroup.isTouching(blueGroup)){
      blueGroup.destroyEach();
      score=score+2
    }
    if(arrowGroup.isTouching(redGroup)){
      redGroup.destroyEach();
      score=score+2
    }
    if(arrowGroup.isTouching(greenGroup)){
      greenGroup.destroyEach();
      score=score+2
    }
    if(arrowGroup.isTouching(pinkGroup)){
      pinkGroup.destroyEach();
      score=score+2 
    }
    
    if(blueGroup.isTouching(inv)){
      life=life-1; 
      blueGroup.destroyEach();
    }
    if(redGroup.isTouching(inv)){
      life=life-1;  
      redGroup.destroyEach();
    }
    if(greenGroup.isTouching(inv)){
      life=life-1; 
      greenGroup.destroyEach();
    }
    if(pinkGroup.isTouching(inv)){
      life=life-1;  
      pinkGroup.destroyEach();   
    }
    
    if(life===0){
      back.velocityX=0;          
      gamestate="end";
    }
     
} else if(gamestate==="end"){ 
    blueGroup.eachVelocityX=0;
    redGroup.eachVelocityX=0;
    greenGroup.eachVelocityX=0;
    pinkGroup.eachVelocityX=0;
  }
  
if(back.x<0){
   back.x=back.width/2;
  }
  
drawSprites();
  
  text("Score  -  "+ score, 40,20,textSize(16),fill(20)); 
  text("Life  -  "+life,140,20,textSize(16),fill(20));
  
}

function Blue_Balloon() { 
  var blue = createSprite(0,Math.round(random(10,550)),10,10);
  blue.addImage("BB",balloon1);
  blue.velocityX=4;
  blue.lifetime=210;
  blue.scale=0.1;
  blue.depth=bow.depth;
  bow.depth=bow.depth+1;
  blueGroup.add(blue);
}

function Red_Balloon() {
  var red = createSprite(0,Math.round(random(10,550)),10,10);
  red.addImage("RB",balloon2);
  red.velocityX=4;
  red.lifetime=210;
  red.scale=0.09;
  red.depth=bow.depth;
  bow.depth=bow.depth+1;  
  redGroup.add(red);
}

function Green_Balloon() {
  var green = createSprite(0,Math.round(random(10,550)),10,10);
  green.addImage("GB",balloon3);
  green.velocityX=4;
  green.lifetime=210;
  green.scale=0.09;
  green.depth=bow.depth;
  bow.depth=bow.depth+1;  
  greenGroup.add(green);
}

function Pink_Balloon() {
  var pink = createSprite(0,Math.round(random(10,550)),10,10);
  pink.addImage("PB",balloon4);
  pink.velocityX=4;
  pink.lifetime=210;
  pink.scale=1.2;
  pink.depth=bow.depth;
  bow.depth=bow.depth+1;  
  pinkGroup.add(pink);
}


function Arrow() {
  arrow = createSprite(525,200,15,15);
  arrow.addImage("A",arrowimage);
  arrow.y = bow.y;
  arrow.scale = 0.27;
  arrow.lifetime = 200;
  arrow.velocityX = -7;
  arrowGroup.add(arrow);
  arrow.setCollider("circle",-30,0,80);
  arrow.debug = false;
}


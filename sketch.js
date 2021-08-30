var player;
var box1, box2, box3, box4, box5, box6;
var chance=3;
var reset;
var question1;
var gameState= "play";
function preload()
{
	box1img= loadImage("box.png");
	kidImg=loadImage("kid.png"); 
    bgImg= loadImage("bg.jpg");
	reImg=loadImage("re.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight);

	question1=createElement('H2')
player= createSprite(100, 100, 50, 50)
	player.shapeColor="yellow";
	player.addImage(kidImg);
	player.scale=(0.2);


	box1= createSprite(displayWidth/2, 100, 100, 100)
	box1.shapeColor="brown";
	box1.addImage(box1img)


	box2= createSprite(1000, 100, 100, 100)
	box2.shapeColor="red";
	box2.addImage(box1img)

	box3= createSprite(displayWidth/2, 400,100, 100)
	box3.shapeColor="pink";
	box3.addImage(box1img)


	box4= createSprite(1000, 400,100, 100)
	box4.shapeColor="green";
	box4.addImage(box1img)

	
	box5= createSprite(displayWidth/2, 700,100, 100)
	box5.shapeColor="blue";
	box5.addImage(box1img)


	box6= createSprite(1000, 700,100, 100)
	box6.shapeColor="white";
	box6.addImage(box1img)


	reset= createSprite(displayWidth/2, displayHeight/2)
	reset.visible=false;
	reset.addImage(reImg);

edges= createEdgeSprites();
}


function draw() {
  background(bgImg);
fill("white");
textSize(20)
text("You have only 3 chances to win the game!", 100, 50);


text("CHANCE: "+chance, 950, 30)

if (keyDown(UP_ARROW)){
	player.y-=10;
}
if (keyDown(DOWN_ARROW)){
	player.y+=10;
}
if (keyDown(LEFT_ARROW)){
	player.x-=10;
}
if (keyDown(RIGHT_ARROW)){
	player.x+=20;
}

if (player.isTouching(box2)){
    chance-=1;
	box2.destroy()
}
if (gameState=="quiz"){
	question();
}
if(chance==0){
	fill("pink");
	textSize(100)
	text("You lost the game!", 300, 200);
	player.velocityX=0;
	player.velocityY=0;
    reset.visible=true;
	box1.destroy();
	box4.destroy();
	box6.destroy();

}
if (player.isTouching(box1)){
gameState="quiz";
player.visisble= false;
    box1.destroy();
    box2.destroy();
	box3.destroy();
	box4.destroy();
	box5.destroy();
	box6.destroy();
}

if (player.isTouching(box3)){
    chance-=1;
	box3.destroy()
}

if (player.isTouching(box5)){
    chance-=1;
	box5.destroy()
}


  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  player.collide(edges[3]);
  drawSprites();

}


function question (){
	question1.html("Question:- How many days are there in a leap year?" );
	question1.position(displayWidth/2, displayHeight/2-50);
}

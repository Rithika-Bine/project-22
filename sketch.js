var starImg,bgImg;
var star, starBody;
var fairy;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadImage("images/fairy.png");

	fairy2Img=loadImage("images/fairyImage1.png");
	// load Sound
	fairySound=loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairySound.play;

	//create fairy sprite and add animation for fairy
	fairy=createSprite(800,600,70,70);
	fairy.addImage(fairy2Img);
	fairy.debug=true;
	fairy.setCollider("rectangle",0,0,200,200)
	fairy.velocitX=-5;
	fairy.scale=0.2;


	star = createSprite(650,30);
	star.debug=true;
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y> 500 && starBody.position.y>500){
    Matter.Body.setStatic(starBody,true) ;
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode===LEFT_ARROW) {
	// fairy.scale=0.2;
    fairy.x-=15
	}
	
	if(keyCode===RIGHT_ARROW){
    // fairy.scale=0.2;
	fairy.x+=15;
	}

}

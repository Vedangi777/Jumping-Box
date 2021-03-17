var canvas;
var music;
var block1,block2,block3,block4;
var square;
var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1= createSprite(0,580,360,15);
block1.shapeColor="Red";
block2= createSprite(290,580,210,15);
block2.shapeColor="Orange";
block3= createSprite(515,580,230,15);
block3.shapeColor="Yellow";
block4= createSprite(740,580,200,15);
block4.shapeColor="Green";
square= createSprite(random(20,700),100,15,15);
square.shapeColor="White";
square.velocityX=5;
square.velocityY=5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edge=createEdgeSprites();
square.bounceOff(edge);
if(block1.isTouching(square)&& square.bounceOff(block1)){
    square.shapeColor="Red";
    music.play();
}
if(block2.isTouching(square)){
    square.shapeColor="Orange";
    square.velocityX=0;
    square.velocityY=0;
    music.stop();
}
if(block3.isTouching(square)&& square.bounceOff(block3)){
    square.shapeColor="Yellow";
}
if(block4.isTouching(square)&& square.bounceOff(block4)){
    square.shapeColor="Green";
}
drawSprites();
    //add condition to check if box touching surface and make it box
}

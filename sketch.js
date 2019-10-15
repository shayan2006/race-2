var ball;
var gamestate=0
var playerCount=0,database,player,allPlayer,game;
var cars,car1_img,car2_img,car3_img,car4_img,c1,c2,c3,c4;
function preload(){
    car1_img=loadImage('cars/car1.png');
    car2_img=loadImage('cars/car2.png');
    car3_img=loadImage('cars/car3.png');
    car4_img=loadImage('cars/car4.png');
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    ball = createSprite(250,250,10,10);
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1);
   }
   if(gamestate===1){
       clear()
       game.play()
       drawSprites();
   }
   if(gamestate===2){
       game.end();
   }
}


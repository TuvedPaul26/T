var canvas, backgroundImage,shrek,c1,c2,c3,c4;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game, car1, car2, car3, car4, arreyCars;

function preload(){
c1 = loadImage("images/car1.png");
c2 = loadImage("images/car2.png");
c3 = loadImage("images/car3.png");
c4 = loadImage("images/car4.png");
shrek = loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-175);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
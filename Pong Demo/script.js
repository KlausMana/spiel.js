//Drawing the game canvas
spiel.drawCanvas(800,600, "#000000");

//Creating and drawing the player paddle
var player = new spiel.Rectangle(10,200, 30,150, "#FFFFFF");
player.draw();

//Creating and drawing the opponent's paddle
var enemy = new spiel.Rectangle(760,200, 30,150, "#FFFFFF");
enemy.draw();

//Creating and drawing the ball
var ball = new spiel.Rectangle(400,300, 20,20, "FFFFFF");
ball.draw();

//Setting velocity variables for the player, enemy and ball
var enemyVel = 6;
var playerVel = 4;
var ballVelVer = 4;
var ballVelHor = 6;

//Starting the gameLoop which will run the game
spiel.gameLoop(function(){

  //Setting up key bindings for the player movement
  if(spiel.keyPressed("ArrowUp")){
    player.moveUp(playerVel);
  }
  if(spiel.keyPressed("ArrowDown")){
    player.moveDown(playerVel);
  }

  //Starting the automatic opponent movement
  enemy.moveUp(enemyVel);

  //Starting the automatic ball movement
  ball.moveDown(ballVelVer);
  ball.moveLeft(ballVelHor);

  //Making opponent change direction when hitting screen borders
  if(enemy.posY <= 0 || enemy.posY >= 450){
    enemyVel = -enemyVel;
  }

  //Making ball change direction when hitting screen borders
  if(ball.posY <= 0 || ball.posY >= 580){
    ballVelVer = -ballVelVer;
  }

  //Making ball reset it's position when reaching one of the goals
  if(ball.posX <= -20 || ball.posX >= 800){
    ball.posX = 400;
    ball.posY = 300;
  }

  //Collision handling between player and ball
  if(spiel.collide(ball, player)){
    ballVelHor = -ballVelHor;
  }

  //Collision handling between ball and opponent
  if(spiel.collide(ball, enemy)){
    ballVelHor = -ballVelHor;
  }


  //Handling events where player paddle hits screen borders
  if(player.posY <= 0){
    playerVel = 0;
    player.moveDown(4);
  }else if(player.posY >= 450){
    playerVel = 0;
    player.moveUp(4);
   }
  else{
    playerVel = 4;
  }

});

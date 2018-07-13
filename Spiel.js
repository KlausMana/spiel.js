//spiel.js is a game-oriented, barebones Open-Source JavaScript library. Currently in version 0.0.3
//Klaus Mana, 2018

//This variable holds the canvas context
var c;

//This variable holds the char code that the KeyDown EventListener gets
var code;

//Main Object that holds all the necessary functions
var spiel = {

  //drawCanvas draws a blank cavas in the screen. It gets the parameters of the canvas' width, height and color. For lack of
  //arguments, it recieves a width of 800, a height of 600, and a black color. This should be defined of the start of any
  //spiel.js project.
  drawCanvas : function drawCanvas(width, height, color){
    if(!width){
      width = 800;
    }
    if(!height){
      height = 600;
    }
    if(!color){
      color = "#000000"
    }
      window.resizeTo(width, height);
      var canvas = document.createElement("CANVAS");
      canvas.id = "gameScreen";
      canvas.width = width;
      canvas.height = height;
      canvas.style.backgroundColor =  color;
      document.body.appendChild(canvas);
      var can = document.getElementById("gameScreen");
      c = can.getContext('2d');
      c.translate(1, 1);
  },

  //Initializes the game loop
  gameLoop : function gameLoop(func){
    requestAnimationFrame(function(){gameLoop(func); func();});
    document.addEventListener("keydown", function(e){
	     code = e.code;
     });

     document.addEventListener("keyup", function(e){
 	     code = 0;
      });
  },

  //Handles a Rectangle object in the canvas
  Rectangle : function Rectangle(posX, posY, width, height, color){
    //Pass the values to the object
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;

    //Draws a recatngle on the screen
    this.draw = function(){
    c.fillStyle = this.color;
    c.fillRect(this.posX, this.posY, this.width, this.height);
    }

    //These functions move the created rectangle in a certain direction
    this.moveLeft = function moveLeft(velocity){
        this.velocity = velocity;
        c.clearRect(this.posX, this.posY, this.width, this.height);
        this.posX -= this.velocity;
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }

    this.moveRight = function moveRight(velocity){
        this.velocity = velocity;
        c.clearRect(this.posX, this.posY, this.width, this.height);
        this.posX += this.velocity;
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }

    this.moveUp = function moveUp(velocity){
        this.velocity = velocity;
        c.clearRect(this.posX, this.posY, this.width, this.height);
        this.posY -= this.velocity;
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }

    this.moveDown = function moveDown(velocity){
        this.velocity = velocity;
        c.clearRect(this.posX, this.posY, this.width, this.height);
        this.posY += this.velocity;
        c.fillStyle = this.color;
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }
  },

  //This function checks if two objects are colliding with each other, and if so, returns true. Otherwise, it returns false
  collide : function collide(obj1, obj2){

    if (obj1.posX < obj2.posX + obj2.width && obj1.posX + obj1.width > obj2.posX && obj1.posY < obj2.posY + obj2.height && obj1.height + obj1.posY > obj2.posY) {

     return true;

   }

  return false;
  },

  //This function returns true if the KeyCode value passed to it matches the value of the key currently pressed.
  keyPressed : function keyPressed(KeyCode){
    if(KeyCode == code){
      return true;
    }

    return false;
  }

};

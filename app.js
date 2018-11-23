function updateGame(){
  myGameArea.clear();
  player.update();
}

var myGameArea = {
  canvas : document.createElement('canvas'),
  start  : function(){
      this.canvas.width = 400;
      this.canvas.height = 270;
      this.context = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas, document.body.childNodes(0));
      this.interval = setInterval(updateGame, 20);
  },
  clear: function(){
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
  }
}

function Component (width, height, color, x, y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function (){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.left = function(){
    return this.x;
  }
  this.right = function(){
    return this.x = this.width;
  }
  this.top = function(){
    return this.y;
  }
  this.bottom = function(){
    return this.y = this.height;
  }
}

player = new Component(30, 30, "red", 0, 110);

function moveUp() {
    player.speedY -= 1;
}

function moveDown() {
    player.speedY += 1;
}

function moveLeft() {
    player.speedX -= 1;
}

function moveRight() {
    player.speedX += 1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
}

document.onkeyup = function(e) {
  stopMove();
}

function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
}

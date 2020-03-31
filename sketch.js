let ball
let ball_player
let colicion
let color
let id=0
var lista=[];

function setup() {
	createCanvas(windowWidth, windowHeight);
	let pw = 80
	let ph = 160
	let py = floor(windowHeight / 2) - floor(ph / 2)
	
}

function draw() {	
	background('#33FFE3')
	
	lista.forEach(function(i){
    	ball_player=i;
    	ball_player.draw();
    	ball_player.move();
    	
    	lista.forEach(function(i){
			colicion=i;

			if (ball_player.getId != colicion.getId) {
				
				if ((ball_player.pX>=colicion.pX && ball_player.pX<=colicion.pX+20) && (ball_player.pY>=colicion.pY && ball_player.pY<=colicion.pY+20)) {
    				ball_player.changeDirection();
    				colicion.changeDirection()
    				console.log('colicion id= '+ ball_player.getId + " " + 'con id= ' + colicion.getId)
    				console.log('colicion x= '+ ball_player.pX + " " + 'con y= ' + ball_player.pY + '//// x= '+ colicion.pX + " " +'con y= ' + colicion.pY)
    			
    			}else{

    			}
			}else{

			}
    		
		});
    	
	});
}

function mousePressed () {
	
	ball = new Ball(floor(Math.random() * windowWidth),floor(Math.random() * windowHeight),getRandomColor(),floor(windowWidth),floor(windowHeight ),id)
	lista.push(ball);
	
	id+=1
	
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
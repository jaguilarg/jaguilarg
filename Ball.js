class Ball{
	
	constructor(x,y,c,tw,th,id){
		
		this.x=x
		this.y=y
		this.c=c
		this.tw=tw
		this.th=th
		this.id=id
		this.spx= 4 * this.direction()
		this.spy= 4 * this.direction()
	}


	draw(){
		push()
		noStroke()
		fill(this.c)


		ellipse(this.x,this.y,25,25)
		pop()
	}

	move(){
		if (this.x <= 0) {
			this.spx=this.spx*-1
		}else if (this.x >= this.tw) {
			this.spx=this.spx*-1
		}

		if (this.y <= 0) {
			this.spy=this.spy*-1
		}else if (this.y >= this.th) {
			this.spy=this.spy*-1
		}



		
		this.x+=this.spx
		this.y+=this.spy
	}

	changeDirection(){
		this.spx=this.spx*-1
		this.spy=this.spy*-1
	}

	direction(){
		
		return floor(random(2))* 2 - 1

	}

	get getspeedX(){

	}
	get pX() {
    	return this.x;
  	}

  	get pY() {
    	return this.y;
  	}

  	get getId() {
    	return this.id;
  	}

  	get color() {
    	return this.c;
  	}
}
var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = [];

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
}
babyObj.prototype = {
	constructor: babyObj,
	init: function(){
		this.x = canWidth/2 - 50;
		this.y = canHeight/2 + 50;
		this.angle = 0;
		this.babyEye.src ='./image/babyEye0.png';
		this.babyBody.src ='./image/babyFade0.png';
		for(var i=0;i<8;i++){
			this.babyTail[i] = new Image();
			this.babyTail[i].src = "./image/babyTail"+i+".png";
		}
	},
	draw: function(){
		//lerp x y  大鱼坐标趋向于坐标
		this.x = lerpDistance(mom.x,this.x,0.98);
		this.y = lerpDistance(mom.y,this.y,0.98);

		//delta angle
		//Math.atan2(y,x)  大鱼角度趋向于鼠标位置
		var deltaY = mom.y - this.y;
		var deltaX = mom.x - this.x;
		var beta = Math.atan2(deltaY,deltaX) + Math.PI;

		//lerp angle
		this.angle = lerpAngle(beta,this.angle,0.6);

		//baby tail count
		this.babyTailTimer +=deltaTime;
		if(this.babyTailTimer > 50){
			this.babyTailCount = (this.babyTailTimer + 1) % 8;
			this.babyTailTimer %=50;
		}
		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);

		var babyTailCount = this.babyTailCount;
		ctx1.drawImage(this.babyTail[babyTailCount],-this.babyTail[babyTailCount].width/2+23,-this.babyTail[babyTailCount].height/2);
		ctx1.drawImage(this.babyBody,-this.babyBody.width/2,-this.babyBody.height/2);
		ctx1.drawImage(this.babyEye,-this.babyEye.width/2,-this.babyEye.height/2);
		ctx1.restore();
	}
}
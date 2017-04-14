var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype = {
	constructor: momObj,
	init: function(){
		this.x = canWidth/2,
		this.y = canHeight/2,
		this.angle = 0,
		this.bigEye.src ='./image/bigEye0.png';
		this.bigBody.src ='./image/bigSwim0.png';
		this.bigTail.src ='./image/bigTail0.png';
	},
	draw: function(){

		//lerp x y  大鱼坐标趋向于坐标
		this.x = lerpDistance(mx,this.x,0.98);
		this.y = lerpDistance(my,this.y,0.98);

		//delta angle
		//Math.atan2(y,x)  大鱼角度趋向于鼠标位置
		var deltaY = this.y - my;
		var deltaX = this.x - mx;
		var beta = Math.atan2(deltaY,deltaX)

		//lerp angle
		this.angle = lerpAngle(beta,this.angle,0.6);

		ctx1.save();
		ctx1.translate(this.x,this.y);
		ctx1.rotate(this.angle);
		ctx1.drawImage(this.bigTail,-this.bigTail.width/2+30,-this.bigTail.height/2);
		ctx1.drawImage(this.bigBody,-this.bigBody.width/2,-this.bigBody.height/2);
		ctx1.drawImage(this.bigEye,-this.bigEye.width/2,-this.bigEye.height/2);
		ctx1.restore();
	}
}
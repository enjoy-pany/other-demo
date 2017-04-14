var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];//从小到大
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype = {
	constructor: fruitObj,
	num: 30,
	init: function(){
		for(var i=0;i<this.num;i++){
			this.alive[i] = false;
			this.x[i] = 0;
			this.y[i] = 0;
			this.spd[i] = Math.random()*0.017 + 0.003;//增长速度
			this.fruitType[i] = '';
			this.born(i);
		}
		this.orange.src = './image/fruit.png';
		this.blue.src = './image/blue.png';
	},
	draw: function(){
		for(var i=0;i<this.num;i++){
			if(this.alive[i]){
				if(this.fruitType[i] == 'blue'){
					var pic = this.blue;
				}else{
					var pic = this.orange;
				}
				if(this.l[i]<=14){
					this.l[i] += this.spd[i]*deltaTime;
				}else{
					this.y[i] -= 7*this.spd[i]*deltaTime;
				}
				ctx2.drawImage(pic,this.x[i]-this.l[i]/2,this.y[i]-this.l[i]/2,this.l[i],this.l[i]);
				if(this.y[i]<-10){
					this.alive[i] = false;
				}
			}
		}
	},
	updata: function(){
		var num = 0;
		for(var i=0;i<this.num;i++){
			if(this.alive[i]) num++;
			this.x[i] = 0;
			this.y[i] = 0;
		}
	},
	born: function(i){//随机找到一个海葵 记录位置
		var aneID = Math.floor(Math.random()*ane.num);
		this.x[i] = ane.x[aneID];
		this.y[i] = canHeight - ane.len[aneID];
		this.l[i] = 0;
		this.alive[i] = true;
		var ran = Math.random();
		if(ran<0.2){
			this.fruitType[i] = 'blue'
		}else{
			this.fruitType[i] = 'orange'
		}

	},
	fruitMonitor: function(){
		var num = 0;
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]) num++;
		}
		if(num < 15){
			this.sendFruit();
			return;
		}
	},
	sendFruit: function(){
		for(var i=0;i<fruit.num;i++){
			if(!fruit.alive[i]){
				fruit.born(i)
			}
		}
	},
	dead: function(i){
		this.alive[i] = false;
	}
}
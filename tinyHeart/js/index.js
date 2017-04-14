document.body.onload = game;
var can1,can2,ctx1,ctx2;
var canWidth,canHeight;
var lastTime,deltaTime;
var ane,fruit,mom,baby;
var mx,my;
var bgImg = new Image();
function game() {
	deltaTime = 0;//两针间隔差
	lastTime = Date.now();
	init();
	gameLoop();

}
function init(){
	can1 = document.getElementById('canvas1');
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);//监听鼠标事件

	bgImg.src='image/background.jpg';
	canWidth = can1.width;
	canHeight = can1.height;
	//drawBackground(bgImg,canWidth,canHeight);

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth/2;
	my = canHeight/2;

	


}
function gameLoop(){
	requestAnimFrame(gameLoop);//当前绘制完成之后 根据机器性能决定绘制下一帧
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime>40) deltaTime = 40;
	//drawBackground(bgImg,canWidth,canHeight);
	ctx2.drawImage(bgImg,0,0,canWidth,canHeight);
	ane.draw();
	fruit.fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);//清空上一帧内容
	mom.draw();
	momFruitCollision();
	baby.draw();
}
function onMouseMove(e){
	if(e.offSetX || e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
	}
}
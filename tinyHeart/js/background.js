function drawBackground(bgImg,canWidth,canHeight) {
	bgImg.onload =function(){
		ctx2.drawImage(bgImg,0,0,canWidth,canHeight);
	}
}

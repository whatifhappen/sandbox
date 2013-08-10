function Slider (container, nav) {
	this.container = container;
	this.nav = nav.css('display', 'block');



	this.imgs = this.container.find('img');
	this.imgLen = this.imgs.length;
	console.log(this.imgs);
	this.imgWidth = this.imgs[0].width;


	// this.imgWidth = [];
	// for (i=0, len=this.imgLen; i < len; i++) {
	// 	this.imgWidth = this.imgs[i].width;
	// }
	// console.log(this.imgWidth);
	this.current = 0;

}

Slider.prototype.transition = function( coords ) {
	this.container.animate({
		'margin-left': coords || -(this.current * this.imgWidth)
	});
}

Slider.prototype.direction = function (dir) {
	var current = this.current;
	var	pos = (dir === 'next') ? ++current : --current;

	// pos += (~~(dir === 'next' ) || -1 );
	this.current  = ( pos < 0 ) ? this.imgLen - 1 : pos % this.imgLen;

	return pos;
}
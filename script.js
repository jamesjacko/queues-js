
// create supermarket instance
var supermarket = new SuperMarket(7, 10);
// initialise the supermarket
supermarket.init();


function clearCanvas(canvas, ctx){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawQueues(canvas, ctx, img){
	var queues = supermarket.getQueues();
	clearCanvas(canvas, ctx);
	var i;
	queues.forEach(function(elem, ind, array){
		for(i = 0; i < elem.getSize(); i++){
			ctx.drawImage(img, 100 * ind + 20 , 31 * i, 26, 31 );
		}
		ctx.fillStyle = (supermarket.shortest === ind)? 'red' : 'black';
		ctx.fillText(supermarket.queueLengths[ind] + "[" + elem.getSize() + "]", 100 * ind, 10);
	});
}


window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var img = new Image();
	img.src = "images/person.png";


	

	window.onkeypress=function(e){
		if(e.charCode === 13){
			supermarket.addACustomer();
			drawQueues(canvas, ctx, img);
		} else if(e.charCode === 80 || e.charCode === 112){
			supermarket.processItems();
			drawQueues(canvas, ctx, img);
		}
	}
};

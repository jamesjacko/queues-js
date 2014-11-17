// create supermarket instance
var supermarket = new SuperMarket(7, 10);

//global variables for the canvas, context and image
var canvas, ctx, img;
// globals for the interval timers
var itemProcessor, customerAdder;
// keys are disabled by default
var keys = false;
// initialise the supermarket
supermarket.init();

// function to clear the canvas
function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// draws the queues on the canvase
function drawQueues(){
	var queues = supermarket.getQueues();
	clearCanvas();
	var i;
	// loop through each queue
	queues.forEach(function(elem, ind, array){
		for(i = 0; i < elem.getSize(); i++){
			ctx.drawImage(img, 100 * ind + 20 , 31 * i, 26, 31 );
		}
		// red text color for the shortest queue
		ctx.fillStyle = (supermarket.shortest === ind)? 'red' : 'black';
		// write the ammount of items and queue length against each queue
		ctx.fillText(supermarket.queueLengths[ind] + "[" + elem.getSize() + "]", 100 * ind, 10);
	});
}

//autoupdate function, adds customers (500ms) and processes items (100ms)
function autoUpdate(){
	keys = false;
	//process an item in each queue every 100ms
	itemProcessor = setInterval(function(){
		supermarket.processItems();
		drawQueues();
	}, 100);
	// add a customer to the shortest queue every 500ms
	customerAdder = setInterval(function(){
		if(Math.round(Math.random() * 5)){
			supermarket.addACustomer();
			drawQueues();
		}
	}, 500);
}

// function to detect the status of the radio buttons
function handleRadioClick(rad){
	// if auto is selected
	if(rad.value == "auto"){
		autoUpdate();
	} else {
		// enable keys
		keys = true;
		// stop both timers
		clearInterval(itemProcessor);
		clearInterval(customerAdder);
	}
}


window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	img = new Image();
	img.src = "images/person.png";

	// automatic is the default setting so call the autoUpdate function on page load
	autoUpdate(canvas, ctx, img);

	// key press detection for manual operation
	window.onkeypress=function(e){
		if(keys){
			// if enter key pressed
			if(e.charCode === 13){
				supermarket.addACustomer();
				drawQueues();
			} else if(e.charCode === 80 || e.charCode === 112){ // lower and uppercase p
				supermarket.processItems();
				drawQueues();
			}
		}
	}
};

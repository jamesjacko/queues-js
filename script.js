
// create supermarket instance
var supermarket = new SuperMarket(3, 10);
// initialise the supermarket
supermarket.init();

setInterval(function(){
	supermarket.processItems();
}, 100);

setInterval(function(){
	if(Math.floor(Math.random() * 4) === 1)
		supermarket.addACustomer();
	console.log(supermarket.toString());
}, 1000);
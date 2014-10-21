var NUM_QUEUES = 3;
var PAYMENT_TIME = 10;
var queues = new Array();
var shortest = 0;
var queueLengths = new Array();

for(var i = 0; i < NUM_QUEUES; i++){
  queues.push(new Queue());
  queueLengths.push(0);
}

function addACustomer(){
  var newCustomer = Math.floor(Math.random() * 100) + PAYMENT_TIME;
  queues[shortest].add(newCustomer);
  queueLengths[shortest] += newCustomer;
  findShortest();
}

function processItem(queue){
  if(--queues[queue].first.obj == 0){
    queues[queue].first.obj.remove();
  }
  queueLengths[queue]--;
  findShortest();
}

function findShortest(){
  for(var i = 0; i < NUM_QUEUES; i++)
    shortest = (queueLengths[shortest] > queueLengths[i]) ? i : shortest;
}
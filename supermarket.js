/**
  SuperMarket stucture,
  A simple impementation of a supermarket made up of a specified number of queues

*/
function SuperMarket(num_queues, payment_time){

  this.queues = new Array();
  this.shortest = 0;
  // array of integers to hold the queue lengths
  this.queueLengths = new Array();

  // initialise the queues and queue lengths
  this.init = function(){
    for(var i = 0; i < num_queues; i++){
      this.queues.push(new Queue());
      this.queueLengths.push(0);
    }
  }
  
  // find the shortest queue and assign it's index to the shortest variable
  this.findShortest = function(){
    for(var i = 0; i < num_queues; i++)
      this.shortest = (this.queueLengths[this.shortest] > this.queueLengths[i]) ? i : this.shortest;
  }
  
  // add a customer to the shortest queue
  this.addACustomer = function(){
    var newCustomer = Math.floor(Math.random() * 100) + payment_time;
    this.queues[this.shortest].add(newCustomer);
    this.queueLengths[this.shortest] += newCustomer;
    this.findShortest();

  }
  
  // remove one item from the first customer in the queue providing the queue is not empty
  this.processItems = function(){
    for(var queueCounter = 0; queueCounter < num_queues; queueCounter++){
      // if the queue is not empty
      if(!this.queues[queueCounter].isEmpty()){
        this.queues[queueCounter].reduceFirst()
        this.queueLengths[queueCounter]--;
      }
    }

  }

  // returns the queues array
  this.getQueues = function(){
    return this.queues;
  }

  // returns a string representation of the supermarket
  this.toString = function(){
    var string = "";
    for(var i = 0; i < num_queues; i++){
      string += "Queue: " + this.queues[i].getSize() + " [" + this.queueLengths[i] + "] ";
      string += "\nServing: " + this.itemsToProcess[i] + "\n";
    }
    return string;
  }
  
}

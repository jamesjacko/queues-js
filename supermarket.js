function SuperMarket(num_queues, payment_time){

  this.queues = new Array();
  this.shortest = 0;
  this.queueLengths = new Array();
  this.itemsToProcess = new Array(num_queues);

  this.init = function(){
    for(var i = 0; i < num_queues; i++){
      this.queues.push(new Queue());
      this.queueLengths.push(0);
    }
  }
  
  this.findShortest = function(){
    for(var i = 0; i < num_queues; i++)
      this.shortest = (this.queueLengths[this.shortest] > this.queueLengths[i]) ? i : this.shortest;
  }
  
  this.addACustomer = function(){
    var newCustomer = Math.floor(Math.random() * 100) + payment_time;
    this.queues[this.shortest].add(newCustomer);
    this.queueLengths[this.shortest] += newCustomer;
    this.findShortest();
  }
  
  this.processItems = function(){
    for(var queueCounter = 0; queueCounter < num_queues; queueCounter++){
      // if the queue is not empty
      if(!this.queues[queueCounter].isEmpty()){

        console.log(1);
        // if there is not an element in the itemts to be processed array
        if(this.itemsToProcess[queueCounter]===0){
          // remove the customer from the queue
          this.queues[queueCounter].remove();
          // if the queue is not now empty
          if(!this.queues[queueCounter].isEmpty())
            // assign the new first to the processing array
            this.itemsToProcess[queueCounter] = this.queues[queueCounter].getNextInQueue();
          else
            // otherwise continue to next loop iteration
            continue;
        // if the item in processing array is 0
        } else if (!this.itemsToProcess[queueCounter]){
          // add the first in queue to the processing array
          this.itemsToProcess[queueCounter] = this.queues[queueCounter].getNextInQueue();
        }
        this.itemsToProcess[queueCounter]--;
        this.queueLengths[queueCounter]--;
      }
    }
  }

  this.toString = function(){
    var string = "";
    for(var i = 0; i < num_queues; i++){
      string += "Queue: " + this.queues[i].getSize() + " [" + this.queueLengths[i] + "] ";
      string += "\nServing: " + this.itemsToProcess[i] + "\n";
    }
    return string;
  }
  
}

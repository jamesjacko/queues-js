function SuperMarket(num_queues, payment_time){

  this.queues = new Array();
  this.shortest = 0;
  this.queueLengths = new Array();
  this.itemsToProcess = new Array();

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
      if(!this.queues[queueCounter].isEmpty()){
        if(this.itemsToProcess[queueCounter] === null || this.itemsToProcess[queueCounter] === 0){
          this.itemsToProcess[queueCounter] = this.queues[queueCounter].first;
          this.queues[queueCounter].remove();
        }
        this.itemsToProcessp[queueCounter]--;
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

function SuperMarket(num_queues, payment_time){

  this.queues = new Array();
  this.shortest = 0;
  this.queueLengths = new Array();
  
  for(var i = 0; i < num_queues; i++){
    this.queues.push(new Queue());
    this.queueLengths.push(0);
  }
  
  this.findShortest() = function(){
    for(var i = 0; i < num_queues; i++)
      shortest = (queueLengths[shortest] > queueLengths[i]) ? i : shortest;
  }
  
  this.addACustomer = function(){
    var newCustomer = Math.floor(Math.random() * 100) + payment_time;
    queues[shortest].add(newCustomer);
    queueLengths[shortest] += newCustomer;
    findShortest();
  }
  
  this.processItem(queue) = function(){
    if(--queues[queue].first.obj == 0){
      queues[queue].first.obj.remove();
    }
    queueLengths[queue]--;
    findShortest();
  }
  
}

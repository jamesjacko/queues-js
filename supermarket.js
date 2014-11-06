function SuperMarket(num_queues, payment_time){

  this.queues = new Array();
  this.shortest = 0;
  this.queueLengths = new Array();
  
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
    for(var queue = 0; queue < num_queues; queue++);
    {
      if(--queues[queue].first.obj == 0)
        queues[queue].first.obj.remove();
    }
    this.findShortest();
  }

  this.toString = function(){
    var string = "";
    for(var i = 0; i < num_queues; i++){
      string += this.queueLengths[i] + " ";
    }
    return string;
  }
  
}

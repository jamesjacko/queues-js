/**
  Queue stucture,
  A simple impementation of a list with 2 basic functions
  
  add
  ===
  Adds an object to the end of the list
  
  remove
  ===
  Removes the first object from the queue

*/
function queue(){
  this.first = null;
  this.last = null;
  this.length = 0;
  // adds a new node to the end of the queue
  this.add = function(obj){
    var newNode = {
      obj: obj,
      next: null
    }
    if(this.first === null){
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }
  // removes the first node from the queue
  this.remove = function(){
    if(this.first.next === null){
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
  }
}
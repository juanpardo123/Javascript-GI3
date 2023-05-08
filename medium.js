
function cutPizzaSlices(a){
    
    return function share (b) {
        this.slices = a;
        return this.slices/b;
    }
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

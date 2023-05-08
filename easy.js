function exercise(a) {
    if(a == 'running'){
        return function a(){
            return "Today's exercise: running";
        }
    }
    if(a == 'swimming'){
        return function a(){
            return "Today's exercise: running";
        }
    }
    else{
        return function a(){
            return "Today's exercise: nothing :(";
        } 
    }
}

var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"

function fibonacciGenerator (n) {
    var fibonacci = [];
    for (var i = 0; i <= n; i++){
            if(i === 1){
                fibonacci.push(0);  
            } else if (i === 2){
                fibonacci.push(1);
            } else if (i > 2){
                var position = fibonacci.length-1;
                var nextNumber = fibonacci[position] + fibonacci[position-1];
                fibonacci.push(nextNumber);
            }
    }
return fibonacci;
}
    
    
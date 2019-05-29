function Fibonacci(num){
    var fib = 0;
    var numA = 0;
    var numB = 1;
    if(num===1){
        return 0;
    }
    else if(num==2){
        return 1;
    }
    for(var i = 3; i<=num;i++){
        fib = numA+numB;
        numA = numB;
        numB = fib;
    }
    return fib;
}
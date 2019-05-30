// coin change given cents

function coinchange(cents){
    var change = {
        dollar:0,
        quarter:0,
        dime:0,
        nickel:0,
        penny:0
    }
    while(cents>=100){
        cents-=100;
        change.dollar++;
    }
    while(cents>=25){
        cents-=25;
        change.quarter++;
    }
    while(cents>=10){
        cents-=10;
        change.dime++;
    }
    while(cents>=5){
        cents-=5;
        change.nickel++;
    }
    change.penny = cents;
    return change;
}

// fizzbuzz

function fizzbuzz(num){
    for(var i = 0; i<=num; i++){
        if (i%3===0 & i%5===0){
            console.log("fizzbuzz");
        }else if (i%3===0){
            console.log("fizz");
        }else if (i%5===0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}
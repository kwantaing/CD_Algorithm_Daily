//print Key value pairs

function printObjectKV(object){
    var key;
    for (key in object){
        console.log(k);
        console.log(object[key]);
    }
}

//reverse using new array

function reverseNewArray(arr){
    var newarr = [];
    var j = arr.length; i++;
    for (var i=0; i<arr.length; I++){
        newarr[i] = arr[j];
        j--;
    }
    return newarr;
}

function ReverseInPlace(arr){
    var start = 0;
    var end = arr.length-1;
    while(start<end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

function removeDupe(arr){
    var newarr = [];
    for(var i = 0, j = 0; j<arr.length; i++,j++){
        if( checkDupe(arr[j],newarr).isfalse){
            newarr[i] = arr[j];
        }
        else if(checkDupe(arr[j],newArr).istrue){
            i--;
        }
    }
    return newarr;
}
function checkDupe(x,newArr){
    for(var i = 0; i<newarr.length; i++){
        if(x=== newarr[i]){
            return true;
        }
    }
    return false;
}

function noDupes(arr){
    var Obj = {};
    for(var i = 0; i<arr.length; i++){
        Obj[arr[i]] = i;
    }
    var newarr = [];
    for( var k in Obj){
        newarr[newarr.length] = k;
    }
    return newarr;
}
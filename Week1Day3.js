function removeAt(arr,index){
    var newArr=[];
    for(var i = 0; i<arr.length; i++){
        if(index === i){
            for(i;i<arr.length-1; i++){
                newArr[i] = arr[i+1];
            }
            return newArr;
        }else{
            newArr[i] = Arr[i];
        }
    }
}

function RemoveAtWhile(arr,index){
    var newArr=[];
    var i = 0;
    var j = 0;
    while(i<arr.length){
        if(i!==index){
            newArr[j]=arr[i];
            j++;
            i++;
        }else{
            i++;
        }
    }
}
function popFront(arr){
    var newarr=[];
    for(var i = 1; i<arr.length; i++){
        newarr[i-1] = arr[i];
    }
    return newarr;
}

function pushFront(arr,val){
    var newArr=[val];
    for(var i = 0; i<arr.length; i++){
        newArr[i+1] = arr[i];
    }
    return newArr;
}
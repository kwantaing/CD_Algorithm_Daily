function isPalindrome(string){
    var start = string[0];
    var end = string[string.length-1];
    while(start<end){
        if(string[start]!==string[end]){
            return false;
        }else{
            start++;
            end--;
        }
    }
    return true;
}

function isPanagram(string){
    var used = [string[0]];
    for(var i =0;i<string.length-1;i++){
        for(var j = 0; j<string.length-1; j++){
            if(used[j] === string[i]){
                return false;
            }else{
            used.push(string[i]);
            }
        }
    }
    return true;
}

function isSuperVocalic(string){
    var vowels = ['a','e','i','o','u'];
    var used = [];
    if(isPanagram.isFalse){
        return false;
    }
    for(var i = 0; i<string.length-1;i++){
        for(var j = 0; j<vowels.length;j++){
            if(string[i] === vowels[j]){
                used.push(string[i]);
            }
        }
        if(used.length === 5){
            return true;
        }else{
            return false;
        }
    }
}
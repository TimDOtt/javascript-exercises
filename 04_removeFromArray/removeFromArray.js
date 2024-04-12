const removeFromArray = function(array) {
    for (i=0; i < arguments.length; i++){
        for (j=0; j < array.length; j++){
            if (arguments[i] === array[j]) {
                array.splice(j, 1);
                j--
            }
        }
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(num1, num2) {
    let value;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (num1 > num2) {
        value = num2;
        while(num2 != num1) {
            value += num2 + 1;
            num2++;
        }
    }else {
        value = num1;
        while(num1 != num2) {
            value += num1 + 1;
            num1++;
        }
    }
    return value;
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(str, num) {
    let string = '';
    if (num < 0) return "ERROR";
    while (num > 0){
        string += str;
        num--;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;

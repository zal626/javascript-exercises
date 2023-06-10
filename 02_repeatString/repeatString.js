const repeatString = function(text, num) {
    let msg = "";
    if (num < 0) return "ERROR";
    for (let i = 1; i <= num; i++){
        msg += text;
    }
    return msg
};

// Do not edit below this line
module.exports = repeatString;

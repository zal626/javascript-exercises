const removeFromArray = function(array, ...param) {
    let arr = [];
    array.forEach(item => {
        if(!param.includes(item)){
            arr.push(item)
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

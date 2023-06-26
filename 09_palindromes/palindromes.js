const palindromes = function (string) {
    let newStr = string.replace(/\W/g, '').toLowerCase();
    let palindrome =  newStr.split('').reverse().join('');
    return palindrome === newStr;
};

// Do not edit below this line
module.exports = palindromes;

const {odd, even} = require('./3_3_var');

function checkOddOrEven(num) {
    if (num % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;
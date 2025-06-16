const repeatString = function(string, number) {
    let baseString = '';

    if (number < 0 ) return('ERROR');

    for (i = 0; i < number; i++) {
        baseString +=string;
    }

    return baseString;
};

// Do not edit below this line
module.exports = repeatString;

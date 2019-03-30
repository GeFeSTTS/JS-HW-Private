//https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function (n) {
    let binNum = n.toString(2).split("");
    let counter = 0;
    for (let i = 0; i < binNum.length; i++) {
        if (binNum[i] == 1) {
            counter++
        }
    };
    return counter;
};
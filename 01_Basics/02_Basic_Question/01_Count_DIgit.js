// Count the Digit
function countDigit(num) {

    // edge case
    if (num == 0) {
        return 1;
    }

    // edge case
    if (num < 0) {
        num = Math.abs(num);
    }

    let count = 0;

    while (num > 0) {
        num = Math.floor(num / 10);
        console.log(num)
        count++;
    }

    return count;

}

let num = -345;
console.log("count")
let noOfDigits = countDigit(num);

console.log("Number of Digits : ", noOfDigits);


// Math.round
// Math.ceil
// Math.floor (works differently in case of negative)
// Math.abs
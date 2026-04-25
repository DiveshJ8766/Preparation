var reverse = function (x) {
    let check = false;
    if (x < 0) {
        x = Math.abs(x);
        check = true;
    }

    let reverse = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        reverse = (reverse * 10) + lastDigit;
        x = Math.floor(x / 10);
    }

    let limit = Math.pow(2, 31);
    //* let limit = 2**31;
    if (reverse < -limit || reverse > (limit - 1))
        return 0;

    return check ? -reverse : reverse;
};


let num = -234;

console.log(reverse(num));
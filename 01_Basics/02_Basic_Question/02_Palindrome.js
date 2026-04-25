// check palindrome

function checkPalindrome(num) {

    if (num < 0) return false;

    let copyNum = num;
    let reverse = 0;

    while (copyNum > 0) {
        let lastDigit = copyNum % 10;
        reverse = (reverse * 10) + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    console.log(reverse, " ", num)

    if (reverse == num) {
        return true;
    }

    return false;
}

let num = 12321;

console.log(checkPalindrome(num));

// https://leetcode.com/problems/palindrome-number/submissions/1987777342/
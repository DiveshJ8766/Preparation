function sum(index) {

    let isOdd = arr[index] % 2 != 0 ? arr[index] : 0
    if (index == 0) { return isOdd }

    return isOdd + sum(--index);
}

let arr = [5, 3, 2, 10, 1];
let n = arr.length;

console.log(sum(n - 1));

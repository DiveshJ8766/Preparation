function sum(index) {
    if (index == 0) { return arr[index] };
    return sum(index - 1) + arr[index];
}

let arr = [1, 3, 4, 5, 6];
let n = arr.length;

console.log("Sum of Array Elements : ", sum(n - 1));
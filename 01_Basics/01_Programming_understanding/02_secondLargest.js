// second largest First Logic
function getSecondlargest(arr) {

    let largest = -Infinity;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (largest <= arr[i]) {
            largest = arr[i];
            index = i;
        }
    }

    arr[index] = -Infinity;

    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (secondLargest <= arr[i]) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// second Largest Number 
function getSecondLargest(arr) {

    if (arr.length < 2) {
        return -1;
    }
    let firstLargest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


let arr = [4, 9, 0, 2, 8, 7, 1];

console.log("Second Largest Element : ", getSecondlargest(arr));

// https://www.geeksforgeeks.org/problems/second-largest3735/1

// Corner Scenarios
// All Negatives
// All Positives
// Empty Array
// Duplicates
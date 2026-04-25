// Basic of Language
// arr string  number Boolean

let obj = {
    name: "Divesh",
    age: 25,
    bool: true,
    arr: [1, 2, 3, 4]
}

// function
// if else if else

function sum(a, b) {
    return a + b;
}

// console.log(sum(20, 30));

function square(num) {
    return num * num;
}

// console.log(square(2));

function eligible(age) {
    if (age < 1) {
        console.log("Invalid Output");
    } else if (age < 18) {
        console.log("Not eligible to Vote")
    } else {
        console.log("eligible to vote");
    }
}

// eligible(1);

function isEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Is Even");
    } else {
        console.log("Is Odd");
    }
}

// isEvenOdd(7);


// For Loop
// For Loop with Functions
// For loop and Array
// While Loop

let arr = [34, 3, 4, 7, 8, 23, 2];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        // console.log(arr[i]);
    }
}

arr = [4, 2, 0, 10, 8, 30];
function getIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}

// console.log("Index :", getIndex(arr, 1));

function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

arr = [2, -9, 17, 0, 1, -10, -4, 8, -1];

// console.log("Count of Negative : ", countNegative(arr));

function findLargest(arr) {
    let largest = Math.max();
    // let largest = -Infinity;
    // let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

arr = [5, 0, 7, 10, 8, 17, 1];
// console.log(findLargest(arr));

function findSmallest(arr) {
    let smallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

arr = [-9, -19, -3, -100];
console.log("Smallest : ", findSmallest(arr));
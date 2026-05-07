let arr = [6, 7, 8, 0, 4];

let target = 0;

function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
}

console.log("Element found At : ", findElement(arr, target));

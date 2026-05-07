function removeDuplicate(arr) {
    let length = arr.length;

    let setElements = new Set();

    for (let i = 0; i < length; i++) {
        if (!setElements.has(arr[i])) {
            setElements.add(arr[i]);
        }
    }

    arr = [...setElements];

    return arr;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicate(arr));
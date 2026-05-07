// function sum(x, sumTotal = 0) {
//     if (x == 0) {
//         return sumTotal;
//     };

//     sumTotal += x;

//     return sum(--x, sumTotal);
// }

function sum(x) {
    if (x == 0) {
        return 0;
    };
    return sum(--x) + x;
}

let x = 5;
console.log(sum(x));

// Recurssion Tree


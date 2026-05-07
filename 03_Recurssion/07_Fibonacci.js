function fib(n) {
    if (n <= 1) {
        return n;
    }

    let previous2 = 0;
    let previous1 = 1;

    for (let i = 2; i <= n; i++) {
        let curr = previous2 + previous1;
        previous2 = previous1;
        previous1 = curr;
    }

    return previous1;
}

let n = 4;

console.log(fib(n));
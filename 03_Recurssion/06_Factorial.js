function fact(x) {
    if (x == 1) {
        return 1;
    }

    return x * fact(--x);
}

let x = 7;
console.log(fact(x));
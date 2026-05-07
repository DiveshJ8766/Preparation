function print(x) {
    if (x == 0) return;

    console.log(x);
    print(--x);
}

let n = 5;

print(n);
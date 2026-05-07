function print(x) {

    if (x == 1) return;

    print(--x);

    console.log(x);
}

let n = 5;

print(n);
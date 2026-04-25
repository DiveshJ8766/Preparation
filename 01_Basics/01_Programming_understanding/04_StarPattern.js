// square pattern
let n = 10;

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
        row += "* ";
    }
    console.log(row);
}

// triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Number triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (j + 1);
    }
    console.log(row);
}

// Number triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += (i + 1);
    }
    console.log(row);
}


// Inverted Number Triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (n - i); j++) {
        row += (j + 1);
    }
    console.log(row);
}

// Inverted star Triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < (n - i); j++) {
        row += "* ";
    }
    console.log(row);
}

for (let i = 0; i < n; i++) {
    // for spaces
    let row = "";
    for (let j = 0; j < (n - (i + 1)); j++) {
        row += "_";
    }
    // for star
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// 10 triangle
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        if (j % 2 == 0)
            row += "1"
        else {
            row += "0"
        }
    }
    console.log(row);
}

// 11 Triangle
let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += toggle;
        if (toggle == 1) {
            toggle = 0;
        } else {
            toggle = 1;
        }
    }

    console.log(row);
}

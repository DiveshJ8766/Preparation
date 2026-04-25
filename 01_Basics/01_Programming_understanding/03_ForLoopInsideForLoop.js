//* For Loop inside For Loop
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // console.log("i=", i + " " + "j=", j);
    }
}

//* For Loop till < i
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        // console.log("i=", i + " " + "j=", j);
    }
}

// 1 0
// 2 0 1

//* For Loop Till <= i
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        // console.log("i=", i + " " + "j=", j);
    }
}

// 0 0
// 1 0
// 1  1
// 2 0
// 2 1
// 2 2
// 3 0
// 3 1
// 3 2
// 3 3
// 4 0
// 4 1
// 4 2
// 4 3
// 4 4

//* for Loop till > 0 from i

for (let i = 0; i < 5; i++) {
    for (let j = i; j > 0; j--) {
        // console.log("i=", i + " " + "j=", j);
    }
}

// 1 1
// 2 2
// 2 1
// 3 3
// 3 2
// 3 1
// 4 4
// 4 3
// 4 2
// 4 1

//* for Loop till >= 0 from i
for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        // console.log("i=", i + " " + "j=", j);
    }
}

// 0 0
// 1 1
// 1 0
// 2 2
// 2 1
// 2 0

//* for loop from 5 to 0
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log("i=", i + " " + "j=", j);
    }
}

// 5 0
// 5 1
// 5 2
// 5 3
// 5 4
// 4 0
// 4 1
// 4 2
// 4 3
// 3 0
// 3 1
// 3 2
// 2 0
// 2 1
// 1 0
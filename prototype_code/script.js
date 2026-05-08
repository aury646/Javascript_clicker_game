// Vienrindes komentārs
/*asdcasd
ascfasfasdf
asfasfasf
ascfasf*/

let sk = 10


// print()
console.log("Ziņojums")
console.warn("Brīdinājums")
console.error("Kļūda")

// num = 10
let num = 10 // Izmantojam šo
num = num + 5
let a = 1
let b = 2.5
let c = "asda"
let d = true

var num2 = 15

const number = 100
// number = 150

// + - / * ** %

/*

if x < 5:
    print(x)
elif x > 2:
    print(x - 2)
else:
    print(x + 5)
*/
let x = 4
if (x > 5) {
    console.log(x)
}
else if (x < 2) {
    console.log(x - 2)
}
else {
    console.log(x + 5)
}

// < > <= >=    == != === !==
let i = 2.5
let j = "2.5"

if (i == j) {
    console.log("i ir vienāds ar j")
}
else {
    console.log("i nav vienāds ar j")
}

if (i === j) {
    console.log("i ir vienāds ar j")
}
else {
    console.log("i nav vienāds ar j")
}

// AND, OR, NOT
// &&,  ||, !

if (!(i > j || i == j && i === j)) {
    console.log(i + j)
}

/*
while x < 5:
    print(x)
    x += 1
*/
x = 0
while (x < 5) {
    console.log(x)
    x += 1
}

/*
for x in range(1, 10, 2):
    print(x)
*/
console.log("-----------------")
for (let x = 1; x < 10; x += 2) {
    console.log(x)
}

console.log("-----------------")
for (; sk > 1; sk -= 3) {
    console.log(sk)
}

/*
def sayHello(name):
    print("Hello, " + name)

sayHello("John")
*/
sayHello("John")

function sayHello(name) {
    console.log("Hello, " + name)
}
myFunction("John")


const myFunction = (name) => {
    console.log("Goodbye, " + name)
}

document.addEventListener("DOMContentLoaded", () => {
    
})

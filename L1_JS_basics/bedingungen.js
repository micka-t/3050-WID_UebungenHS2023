// IF-Anweisungen

// if (Bedingung) {
//   ...
// } else if (Bed3) {
//
// } else {
//   ...
// }

let a = 5;
let b = 4;

if (a > b) {
    console.log("a > b");
} else if (a < 5) {
    console.log("a < b");
} else {
    console.log("a = b");
}

// Einfache IF-ELSE -> TERNÄRE OPERATOR (ternary operator)
// Bedingung ? Ausdruck wenn true : Ausdruck wenn false

let value = a > b ?"A" : "B";
console.log(value);

let value2;

if (a > b) {
    value2 = "a > b";
} else {
    value2 = "a <= b";
}
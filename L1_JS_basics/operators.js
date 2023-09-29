let a = 5;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// IMPLIZITE TYPENUMWANDLUNG!
b = "3"

console.log(a + b); // '53'
console.log(a - b); // 2

// Number, String, Boolean
console.log(Number("42"), typeof Number("42"));
console.log(String(42), typeof String(42));

// Vergleichs-Operatoren
a = 5;
b = 3;

console.log(a == b); // F
console.log(a != b); // T
console.log(a > b); // T
console.log(a < b); // F
console.log(a <= b); // F

// GOTCHAS
a = 3
b = "3"

console.log(a == b); // T!!!
console.log(a === b); //  F
console.log(a !== b); // T

console.log("" == []); // T!!!
console.log("" === []); // F!!!

// LOGISCHE OPERATOREN
// logische AND, OR,
// logische NOT

console.log("");
console.log(true && true); // T
console.log(true && false); // F
console.log(true || false); // T
console.log(false || false); // F
console.log(!true);
console.log(!false);

// "truthly" und "false" Werte
// 0 -> "falsy"

// FALSY Werte bei anderen Datentypen
console.log("");
console.log(Boolean(0)); //
console.log(Boolean(undefined)); //
console.log(Boolean(null)); //
console.log(Boolean("")); // 

// TRUTHY WRTE
console.log(Boolean([])); // !!!

console.log(true && "string");
console.log(false || "string");

// use case
let userConfig;

// ...
config = userConfig || "default";

console.log(config);

userConfig = "user config";
config = userConfig || "default";
console.log(config);
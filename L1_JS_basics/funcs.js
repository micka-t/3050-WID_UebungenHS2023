function add(a, b){
    console.log(a, b);
}

add(1,2);

let value;

value = add(1,2);
console.log(value); //

// 3 Syntax Varianten

// - Funktionen-Deklaration
function add(a, b){
  //  console.log(a, b);
  return a + b;
}

// - Funktions-Ausdruck (function expression)
const add2 = function(a, b){
    return a + b;
  };
console.log(add2(1,2));

// - Pfeilfunktionen (arrow functions)
const add3 = (a, b) => a + b;

console.log(add3(1,2));



print(function (arg) {
    return arg * 2;
}, 42);

print((a) => a * 100, 42);


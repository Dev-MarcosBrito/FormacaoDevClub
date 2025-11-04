/*

    Operadores Lógicos

    &&  -> E (AND)
    true && true  -> true
    true && false -> false
    false && true -> false
    false && false -> false

    ||  -> OU (OR)
    true || true  -> true
    true || false -> true
    false || true -> true
    false || false -> false


    !   -> NÃO (NOT)
    !true  -> false
    !false -> true  


   

*/

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

a = 5 > 2;  // true
b = 10 === 10; // true
console.log(a && b);

a = 5 < 2;  // false
b = 10 === 10; // true
console.log(a && b);
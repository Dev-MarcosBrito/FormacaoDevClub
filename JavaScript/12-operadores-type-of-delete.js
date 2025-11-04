/*

    Operadores Type of e Delete

    typeof -> Retorna o tipo de dado
    delete -> Remove uma propriedade de um objeto

*/

const myObject = {
    name: 'John',
    age: 30,
    isStudent: false
};

delete myObject.age;

console.log(myObject); // { name: 'John', isStudent: false }


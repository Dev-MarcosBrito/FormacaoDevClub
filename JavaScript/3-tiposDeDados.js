/*
    1. String -> Texto
    2. Number -> Número
    3. Boolean -> Verdadeiro ou Falso
    4. Null -> Nulo
    5. Undefined -> Indefinido
    6. Object -> Objeto

    

*/

// String
const texto1 = "texto com aspas duplas";
const texto2 = 'texto com aspas simples';
const texto3 = `texto com crase`; // template literals ou template strings

console.log(texto1);
console.log(texto2);
console.log(texto3);

const myAge = 23;
const mensagem = `Minha idade é ${myAge} anos`;
console.log(mensagem);

// Number
const numero1 = 10; // inteiro
const numero2 = 10.5; // ponto flutuante
console.log(numero1);
console.log(numero2);

// Boolean
const verdadeiro = true;
const falso = false;
console.log(verdadeiro);
console.log(falso);

// Null
let nulo = null;
console.log(nulo);

// Undefined
let indefinido;
console.log(indefinido);

// Object
const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua A",
        numero: 100,
        cidade: "São Paulo"
    }
};
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Rua: " + pessoa.endereco.rua);
console.log("N°: " + pessoa.endereco.numero);
console.log("Cidade: " + pessoa.endereco.cidade); // undefined, pois a cidade nao foi definida



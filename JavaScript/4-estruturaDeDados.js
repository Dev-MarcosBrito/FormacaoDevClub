/*
 Estrutura de Dados
    - Arrays

*/

// Declaração de um array
let users = [
    'João',
    'Maria',
    'Pedro',
    'Ana'
];
console.log(users);

// Acessando elementos do array
console.log(users[0]); // João
console.log(users[2]); // Pedro
console.log(users[4]); // undefined

// Adicionando elementos ao array
users.push('Carlos');
console.log(users);
users.unshift('Beatriz');
console.log(users);
users[10] = 'Fernanda'; // Adiciona na posição 10, deixando posições vazias
console.log(users);

// Removendo elementos do array
users.pop(); // Remove o último elemento
console.log(users);
users.shift(); // Remove o primeiro elemento
console.log(users);
delete users[2]; // Remove o elemento na posição 2, deixando um "buraco"
console.log(users);
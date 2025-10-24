/*
  Controladores de fluxo
    - IF (SE)
    - ELSE (SENÃO)
    - ELSE IF (SENÃO SE)

    Operadores de comparação
    - Igualdade: == ou ===
    - Desigualdade: != ou !==
    - Maior que: >
    - Menor que: <

*/

const notaDeCorte = 6;
let notaDoAluno = 8;

if (notaDoAluno >= notaDeCorte) {
    console.log('Aluno aprovado!');
} else {
    console.log('Aluno reprovado!');
}

if (notaDoAluno >= 7) {
    console.log('Aluno aprovado com Distinction!');
} else if (notaDoAluno >= notaDeCorte) {
    console.log('Aluno aprovado!');
} else {
    console.log('Aluno reprovado!');
}

// Exemplo com igualdade
const senhaCorreta = 'abc123';
let senhaDigitada = 'abc123';

if (senhaDigitada === senhaCorreta) {
    console.log('Acesso permitido!');
} else {
    console.log('Acesso negado!');
}

// Exemplo com desigualdade
let idade = 17;

if (idade < 18) {   
    console.log('Menor de idade');
} else {
    console.log('Maior de idade');
}
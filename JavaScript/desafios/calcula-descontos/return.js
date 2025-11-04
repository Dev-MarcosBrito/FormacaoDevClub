/*

    Calcula descontos:

    Todos os produtos acima de R$ 30,00 recebem 10% de desconto.

*/

// Cria uma lista (array) com os produtos do carrinho, cada um com nome e preço
cart = [
    { name: 'Camisa', price: 25.00 },
    { name: 'Calça', price: 45.00 },
    { name: 'Tênis', price: 80.00 },
    { name: 'Meias', price: 15.00 },
];

// Inicializa as variáveis para armazenar os totais
let totalSemDesconto = 0;     // Soma de todos os preços originais
let totalComDesconto = 0;     // Soma dos preços após aplicar os descontos

// Função que calcula o valor com desconto
function calculateDiscount(price, discount) {
    // Retorna o preço subtraindo o percentual do desconto
    return price - (price * (discount / 100));
}

// Percorre cada item do carrinho
cart.forEach(item => {
    // Soma o preço original de cada produto ao total sem desconto
    totalSemDesconto += item.price;

    // Verifica se o produto tem valor acima de R$ 30,00
    if (item.price > 30) {
        // Calcula o preço com 10% de desconto
        const precoComDesconto = calculateDiscount(item.price, 10);

        // Adiciona o valor com desconto ao total com desconto
        totalComDesconto += precoComDesconto;
    } else {
        // Caso contrário, adiciona o preço original (sem desconto)
        totalComDesconto += item.price;
    }
});

// Calcula o valor total de desconto (diferença entre os totais)
const valorDesconto = totalSemDesconto - totalComDesconto;

// Cria uma função para formatar os valores em Real (R$)
const formatar = valor => valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

// Exibe no console o total sem desconto
console.log(`🧾 Total sem desconto: ${formatar(totalSemDesconto)}`);

// Exibe o total com desconto aplicado
console.log(`💰 Total com desconto: ${formatar(totalComDesconto)}`);

// Exibe o valor total do desconto obtido
console.log(`🔻 Valor de desconto: ${formatar(valorDesconto)}`);



/*

    Switch Case - Controlador de Fluxo

    switch (expressão) {
        case valor1:
            // Código a ser executado se a expressão for igual ao valor1
            break;
        case valor2:
            // Código a ser executado se a expressão for igual ao valor2
            break;
        default:
            // Código a ser executado se a expressão for diferente de nenhum dos casos anteriores
            break;
    }

*/

let diaSemana = 3;
let nomeDia;
switch (diaSemana) {
    case 1:
        nomeDia = 'Domingo';
        break;
    case 2:
        nomeDia = 'Segunda-feira';
        break;
    case 3:
        nomeDia = 'Terça-feira';
        break;
    case 4:
        nomeDia = 'Quarta-feira';
        break;
    case 5:
        nomeDia = 'Quinta-feira';
        break;
    case 6:
        nomeDia = 'Sexta-feira';
        break;
    case 7:
        nomeDia = 'Sábado';
        break;
    default:
        nomeDia = 'Dia inválido';
        break;
}
console.log(`Hoje é ${nomeDia}`);
/*QUESTÃO 3
Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o salário mensal atual do funcionário: ', (salarioAtual) => {
    rl.question('Digite o percentual de reajuste: ', (percentualReajuste) => {
        salarioAtual = parseFloat(salarioAtual);
        percentualReajuste = parseFloat(percentualReajuste);

        let novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));

        console.log(`O novo salário é: R$ ${novoSalario.toFixed(2)}`);

        rl.close();
    });
});
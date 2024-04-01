/*QUESTÃO 9
Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (numero1) => {
    rl.question('Digite o segundo número: ', (numero2) => {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        let resultado = (numero1 + numero2) * numero1;

        console.log(`O resultado da operação é: ${resultado}`);

        rl.close();
    });
});
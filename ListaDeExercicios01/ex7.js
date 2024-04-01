/*QUESTÃO 7
Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso
das notas é 4 e 6.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {
        nota1 = parseFloat(nota1);
        nota2 = parseFloat(nota2);

        let mediaFinal = (nota1 * 4 + nota2 * 6) / (4 + 6);

        console.log(`A média final do aluno é: ${mediaFinal.toFixed(2)}`);

        rl.close();
    });
});
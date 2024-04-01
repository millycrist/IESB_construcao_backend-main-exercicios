/*QUESTÃO 1
Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média
superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {
        rl.question('Digite a terceira nota: ', (nota3) => {
            rl.question('Digite a quarta nota: ', (nota4) => {
               
                nota1 = Number(nota1);
                nota2 = Number(nota2);
                nota3 = Number(nota3);
                nota4 = Number(nota4);

               
                let media = (nota1 + nota2 + nota3 + nota4) / 4;

             
                if (media >= 7.0) {
                    console.log(`Média: ${media.toFixed(1)} - Aprovado`);
                } else {
                    console.log(`Média: ${media.toFixed(1)} - Reprovado`);
                }

                rl.close();
            });
        });
    });
});
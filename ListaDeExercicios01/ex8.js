/*QUESTÃO 8
Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura.*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o raio da caixa d\'água (em metros): ', (raio) => {
    rl.question('Digite a altura da caixa d\'água (em metros): ', (altura) => {

        raio = parseFloat(raio);
        altura = parseFloat(altura);

        let volume = Math.PI * Math.pow(raio, 2) * altura;

        console.log(`O volume da caixa d'água cilíndrica é: ${volume.toFixed(2)} metros cúbicos`);

        rl.close();
    });
});
/*QUESTÃO 2
Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o 
percentual que cada um representa em relação ao total de eleitores.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número total de eleitores: ', (totalEleitores) => {
    rl.question('Digite o número de votos em branco: ', (votosBranco) => {
        rl.question('Digite o número de votos nulos: ', (votosNulos) => {
            rl.question('Digite o número de votos válidos: ', (votosValidos) => {
              
                totalEleitores = parseInt(totalEleitores);
                votosBranco = parseInt(votosBranco);
                votosNulos = parseInt(votosNulos);
                votosValidos = parseInt(votosValidos);

               
                let percentualBranco = (votosBranco / totalEleitores) * 100;
                let percentualNulos = (votosNulos / totalEleitores) * 100;
                let percentualValidos = (votosValidos / totalEleitores) * 100;

                console.log(`Percentual de votos em branco: ${percentualBranco.toFixed(2)}%`);
                console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
                console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);

                rl.close();
            });
        });
    });
});
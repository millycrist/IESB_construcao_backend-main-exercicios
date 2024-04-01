/*QUESTÃO 5
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de
 fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o 
 custo final ao consumidor.*/

 const readline = require('readline');

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 rl.question('Digite o custo de fábrica do carro: ', (custoFabrica) => {
     rl.question('Digite a porcentagem do distribuidor (%): ', (percentualDistribuidor) => {
         rl.question('Digite a porcentagem de impostos (%): ', (percentualImpostos) => {
             custoFabrica = parseFloat(custoFabrica);
             percentualDistribuidor = parseFloat(percentualDistribuidor);
             percentualImpostos = parseFloat(percentualImpostos);
 
             let custoFinal = custoFabrica + (custoFabrica * (percentualDistribuidor / 100)) + (custoFabrica * (percentualImpostos / 100));
 
             console.log(`O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`);
 
             rl.close();
         });
     });
 });
 
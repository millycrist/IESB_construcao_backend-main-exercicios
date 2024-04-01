/*QUESTÃO 6
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro 
vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de
 suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.*/

 const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número de carros vendidos: ', (numCarrosVendidos) => {
    rl.question('Digite o valor total das vendas: ', (valorTotalVendas) => {
        rl.question('Digite o salário fixo: ', (salarioFixo) => {
            rl.question('Digite o valor por carro vendido: ', (valorPorCarro) => {

                numCarrosVendidos = parseInt(numCarrosVendidos);
                valorTotalVendas = parseFloat(valorTotalVendas);
                salarioFixo = parseFloat(salarioFixo);
                valorPorCarro = parseFloat(valorPorCarro);

                let comissaoCarros = numCarrosVendidos * valorPorCarro;
                let comissaoVendas = valorTotalVendas * 0.05;
                let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas;

                console.log(`O salário final do vendedor é: R$ ${salarioFinal.toFixed(2)}`);

                rl.close();
            });
        });
    });
});
const prompt = require ('prompt-sync')();
const calcImc = require('./calcImc')

    const peso = Number (prompt ('digite o peso do usuário: '));
    const altura = Number (prompt ('digite a altura do usuário: '));
    
    calcImc(peso, altura)
    console.log (`o valor do imc é: ${calcImc (peso, altura)}`);



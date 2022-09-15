const PromptSync = require("prompt-sync")();

function calcImc (peso, altura) {

    const calcImc = peso / (altura*altura);
    
    return calcImc
}

module.exports = calcImc;   


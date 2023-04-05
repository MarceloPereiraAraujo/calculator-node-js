
const { calculator } = require('../functions/calculator');

test(' Função SOMA deve somar 1 e 2 e retornar 3', () => {
    expect(calculator.sum(1,2)).toBe (3);

});

test(' Função SUBTRAIR deve Subtrair 5 e 3 e retornar 2', () => {
    expect(calculator.subtract(5,3)).toBe (2);

});

test(' Função DIVIDIR deve dividir 8 e 2 e retornar 4', () => {
    expect(calculator.divide(8,2)).toBe (4);

});

test(' Função MULTIPLY deve somar 3 e 2 e retornar 6', () => {
    expect(calculator.multiply(3,2)).toBe (6);

});


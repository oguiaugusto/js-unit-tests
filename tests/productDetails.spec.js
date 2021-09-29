const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('batata', 'banana'))).toBeTruthy();
    expect(productDetails('batata', 'banana').length).toBe(2);
    // Dois itens são objetos.
    expect(typeof productDetails('batata', 'banana')[0]).toBe('object');
    expect(typeof productDetails('batata', 'banana')[1]).toBe('object');
    // Dois itens diferentes
    const products = productDetails('laranja', 'alface');
    const product1 = JSON.stringify(products[0]);
    const product2 = JSON.stringify(products[1]);
    expect(product1 === product2).toBeFalsy();
    // Dois productIds terminam com 123.
    const productEnd1 = products[0].details.productId;
    const productEnd2 = products[1].details.productId;
    expect(productEnd1.endsWith('123')).toBeTruthy();
    expect(productEnd2.endsWith('123')).toBeTruthy();
  });
});

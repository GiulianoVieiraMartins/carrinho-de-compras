require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

const { expect } = require('@jest/globals');

describe('2 - Teste a função fetchItem', () => {
  it('verifica se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toEqual('function')
  });
  //falta testar se com o parametro ver se fetch foi chamada
  //falta testar se a função fetch utiliza o endpoint certo
  it('testa se passado o parametro retorna o objeto',() => {
    expect(fetchItem('MLB1615760527')).toEqual(item)
  })});
  //tem que testar o erro da função sem parametro

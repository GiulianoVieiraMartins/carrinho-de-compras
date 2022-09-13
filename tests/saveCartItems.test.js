const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('chai');
// const { expect } = require('chai');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('testa se localStorage.setItem foi chamada', () => {
    saveCartItems(cartItem)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })
  it('testa se ao executar a função com cartItem passado como argumento, o metodo localStorage.setItem é chamado com dois parametros, sendo um deles a chave: cartItems e o segundo ', () => {

  })
  // fail('Teste vazio');
})

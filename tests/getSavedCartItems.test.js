const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
// const { expect } = require('chai');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled()
  })
  it('Teste se o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
  // fail('Teste vazio');
});

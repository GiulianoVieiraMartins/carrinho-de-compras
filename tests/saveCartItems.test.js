const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
// const { expect } = require('chai');
// const { expect } = require('chai');
// const { expect } = require('chai');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('testa se localStorage.setItem foi chamada', () => {
    saveCartItems('cartItem')
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })
  it('testa se os parametros certos foram usados', () => {
    saveCartItems('queijo')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'queijo')
  })
  // fail('Teste vazio');
})

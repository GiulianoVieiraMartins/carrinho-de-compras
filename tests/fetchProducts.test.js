require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

// const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
  it('verifica se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toEqual('function')
  })
  it('verifica se a função, ao passar o parametro computador, a função fetch foi chamada', async ()=>{
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  it('verifica se a função, ao passar o parametro computador, a função fetch utiliza a URL correta', async ()=>{
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(`https://api.mercadolibre.com/sites/MLB/search?q=computador`)
  })
  it('testa se ao receber o argumento computador retorna o objeto esperado computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  });
  it('testa se a função sem parametro retorna a mensagem correta', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error.message).toBe('You must provide an url')
    }
  })
})

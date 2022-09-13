require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

const { expect } = require('@jest/globals');

describe('2 - Teste a função fetchItem', () => {
  it('verifica se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toEqual('function')
  });
  it('verifica se a função, ao passar um parametro, a função fetch foi chamada', async ()=>{
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  it('verifica se a função, ao passar o id, a função fetch utiliza a URL correta', async ()=>{
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })
  it('testa se passado o parametro retorna o objeto',async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  })
  it('testa a função sem parametro', async () => {
try {
  await fetchItem()
} catch (error) {
  expect(error.message).toBe('You must provide an url')
}
  })
});

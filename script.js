// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const { fetchItem } = require("./helpers/fetchItem");

// const { thumbnail } = require('./mocks/item');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
 const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
// Função para remover do carrinho
const cartItemClickListener = (event) => {
  event.target.remove();
  // console.log(event.target);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
// criar uma função loading antes da função assincrona, e depois remove-la com a função assincrona.
const getResults = async () => {
  const result = await fetchProducts('computador');
  // console.log(result.results);
  return result.results;
};

// getResults();
// adicionar ao DOM com forEach
async function criarLista() {
  const resultado = await getResults();
  const classeItem = document.getElementsByClassName('items')[0];
  resultado.forEach((element) => {
    const obj = { id: element.id, title: element.title, thumbnail: element.thumbnail }; 
    classeItem.appendChild(createProductItemElement(obj));
  });
}
const [classeCart] = document.getElementsByClassName('cart__items');
// função para adicionar ao carrinho
async function select(event) {
  const itemId = event.target.parentNode.firstChild.innerText;
  const item = await fetchItem(itemId);
  // const obj = { id: item.id, title: item.title, price: item.price };
  classeCart.appendChild(createCartItemElement(item));
  // console.log(obj);
  // sessionStorage.setItem();
}
async function adicionaEscutador() {
  await fetchItem('MLB2663143313');
  const all = document.querySelectorAll('.item__add');
  all.forEach((element) => element.addEventListener('click', select));
} 
// adicionaEscutador();

function removeClass() {
  const itensCarro = document.getElementsByClassName('cart__item');
  for (let i = 0; i < itensCarro.length; i += 1) {
    itensCarro[i].remove();
  }
}

  [itemClasse] = document.getElementsByClassName('empty-cart');
  itemClasse.addEventListener('click', removeClass);

  window.onload = () => { criarLista(); adicionaEscutador(); };

// eventtarget=event
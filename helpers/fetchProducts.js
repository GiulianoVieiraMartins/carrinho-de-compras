const fetchProducts = async (produto) => {
  if (!produto) {
    throw new Error('You must provide an url');
  }
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

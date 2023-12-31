const fetchProducts = async (produto) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
    const request = await fetch(url);
    const json = await request.json();
    return json;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

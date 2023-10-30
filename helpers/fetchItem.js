const fetchItem = async (itemId) => {
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const request = await fetch(url);
  const json = await request.json();
  // console.log(json);
  return json;
};
// fetchItem('MLB1615760527');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

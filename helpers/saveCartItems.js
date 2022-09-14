const saveCartItems = (a) => {
  localStorage.setItem('cartItems', a);
  // local Storage
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

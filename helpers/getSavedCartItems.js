const getSavedCartItems = () => { 
  localStorage.getItem('cartItems');
  // local storage
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

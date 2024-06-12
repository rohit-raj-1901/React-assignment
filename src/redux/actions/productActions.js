
export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export const updateProduct = (product) => ({
  type: 'UPDATE_PRODUCT',
  payload: product,
});

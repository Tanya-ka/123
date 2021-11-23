import api from '../../../http';

// export const getPokemons = () => api.get('/pokemon');
// export const getPokemons = () => api.get('/products');
export const getPokemons = (page) => api.get(`/products?page=${page}`);
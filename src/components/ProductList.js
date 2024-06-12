import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products');
      dispatch(setProducts(response.data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/create">Create Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
            <Link to={`/edit/${product.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

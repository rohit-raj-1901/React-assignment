import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;

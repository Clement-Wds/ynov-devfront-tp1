import React from 'react';

function ProductCard(props) {
  return (
    <div className="product-card">
        <div className="product-header">
            <img src={props.product.image} alt={props.product.title} />
        </div>
        <div className="product-body">
            <h2>{props.product.title}</h2>
            <p>{props.product.price} € </p>
        </div>
        <div className="product-footer">
        <button className="button button-primary">Ajouter au panier</button>
        </div>
    </div>
  );
}

export default ProductCard;

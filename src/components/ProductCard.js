import Link from 'next/link';
import React from 'react';
import Button from '/src/components/button';

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
          <Button type="button" classes="button button-primary" click={() => console.log(props.product)} content="Ajouter au panier" />
          <Link href={`/eshop/${props.product.id}`}>
            <a>
              Voir le Produit
            </a>
          </Link>
        </div>
    </div>
  );
}

export default ProductCard;

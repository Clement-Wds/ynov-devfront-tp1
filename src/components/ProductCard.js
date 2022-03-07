import Link from 'next/link';
import React from 'react';
import Button from '/src/components/button';

function ProductCard(props) {

  const addToCart = (element) => {
    //On créer un nouvel objet avec une nouvelle propriété quantity
    let productToInsert = {
        id: element.id,
        title: element.attributes.title,
        image: element.attributes.image,
        price: element.attributes.price,
        quantity: 1
    };

    let cartArray = [];
    if(localStorage.getItem('cart')){
        let obj = JSON.parse(localStorage.getItem('cart'));
        
        for (let i = 0; i < obj.length; i++) {
            cartArray.push(obj[i]);
        }

        const indexOfExistingProduct = cartArray.findIndex(productItem => productItem.id === productToInsert.id);
        //Si le produit n'a pas deja été ajouté
        if(indexOfExistingProduct == -1){
            cartArray.push(productToInsert);
        }else{
            cartArray[indexOfExistingProduct].quantity ++;
        }

        localStorage.setItem('cart', JSON.stringify(cartArray));
    
    //Si localstorage est vide
    }else{
        cartArray.push(productToInsert);
        localStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }

  return (
    <div className="product-card">
        <div className="product-header">
            <img src={`http://localhost:1337${props.product.attributes.image.data.attributes.url}`} alt={props.product.attributes.title} />
        </div>
        <div className="product-body">
            <h2>{props.product.attributes.title}</h2>
            <p>{props.product.attributes.price} € </p>
        </div>
        <div className="product-footer">
          <Button type="button" classes="button button-primary" click={() => addToCart(props.product)} content="Ajouter au panier" />
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

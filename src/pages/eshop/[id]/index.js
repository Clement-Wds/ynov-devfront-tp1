import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TitlePage from "/src/components/TitlePage";
import ProductPrice from "/src/components/ProductPrice";
import Button from "/src/components/Button";
import productService from "/src/services/product.services";

const Index = () => {
    const router = useRouter();
    const [product, setProduct] = useState();

    useEffect(() => {
        if(!router.isReady) return;
        const id = router.query.id;
        productService.getProduct(id)
          .then((data) => {
            setProduct(data.data);
          })
        .catch(err=>console.log(err))
    },[router.isReady]);
    
    const addToCart = (element) => {
        //On créer un nouvel objet avec une nouvelle propriété quantity
        let productToInsert = {
            id: element.id,
            title: element.title,
            image: element.image,
            price: element.price,
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
        <div>
            <TitlePage title={product && product.attributes.title} />

            <div className="text-center">
                <ProductPrice price={product && product.attributes.price} currency="€"/>
                <Button type="button" classes="button button-primary" click={() => addToCart(product)} content="Ajouter au panier" />  
            </div>
        </div>
    );
}

export default Index;

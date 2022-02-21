import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
import Button from "../../../components/Button";

const Index = () => {
    const router = useRouter();
    const [product, setProduct] = useState();

    const users = [
        {
            id: 1,
            firstName:'Clement'
        },
        {
            id: 2,
            firstName:'Faouizi'
        }
    ]

    const indexOfExistingUser = users.findIndex(user => user.id === 2);
    console.log(indexOfExistingUser);
    console.log(users[indexOfExistingUser].firstName);

    

    //EXEMPLE
    const myObj = {
        prop1: 'test',
        prop2: 'clement'
    }

    //Destructuration d'objet EXEMPLE
    const {prop1, prop2} = myObj;
    
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
            console.log(indexOfExistingProduct);
            if(indexOfExistingProduct == -1){
                cartArray.push(productToInsert);
            }else{
                cartArray[indexOfExistingProduct].quantity ++;
            }

            localStorage.setItem('cart', JSON.stringify(cartArray));
            
        }else{
            array.push(productToInsert);
            localStorage.setItem('cart', JSON.stringify(cartArray));
        }
        
    }

    useEffect(() => {

        //Destructuration de l'objet router
        const {id} = router.query;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));

    }, []);

    return (
        <div>
            <TitlePage title={product && product.title} />

            <div className="text-center">
                <ProductPrice price={product && product.price} currency="€"/>
                <Button type="button" classes="button button-primary" click={() => addToCart(product)} content="Ajouter au panier" />  
            </div>
        </div>
    );
}

export default Index;

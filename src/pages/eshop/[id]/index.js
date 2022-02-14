import React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import TitlePage from "../../../components/TitlePage";
import ProductPrice from "../../../components/ProductPrice";
import Button from "../../../components/Button";

const Index = () => {
    const router = useRouter();
    const [product, setProduct] = useState();

    //EXEMPLE
    const myObj = {
        prop1: 'test',
        prop2: 'clement'
    }

    //Destructuration d'objet EXEMPLE
    const {prop1, prop2} = myObj;

    useEffect(() => {

        //Destructuration de l'objet router
        const {id} = router.query;

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(
                (res) => {
                    console.log(res);
                    return res.json();
            })
            .then(data => setProduct(data));

    }, []);

    return (
        <div>
            <TitlePage title={product && product.title} />

            <div className="text-center">
                <ProductPrice price={product && product.price} currency="€"/>
                <Button type="button" classes="button button-primary" click={() => console.log(product)} content="Ajouter au panier" />  
            </div>
        </div>
    );
}

export default Index;

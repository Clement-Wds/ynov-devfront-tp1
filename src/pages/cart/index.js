import React from 'react';
import { useEffect, useState } from "react";
import TitlePage from "/src/components/TitlePage";
import ProductCard from '/src/components/ProductCard';


const Index = () => {

    let [cartArray, setCartArray] = useState([]);

    useEffect(() => {

        if(localStorage.getItem('cart')){
            let obj = JSON.parse(localStorage.getItem('cart'));
            
            obj.forEach(element => {
                cartArray.push(element);       
            });

        }
        else{
            cartArray.push('Panier vide');
        }

    }, []);

    return (
        <div>
            <TitlePage title="Panier" />

            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {cartArray &&
                    cartArray.map((product) => (
                        <tr>
                            <td key={product.id}>{product.title}</td>
                            <td key={product.id}>{product.price} €</td>
                            <td><a href="#">Voir le produit</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Index;
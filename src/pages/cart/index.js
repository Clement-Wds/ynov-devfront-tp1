import React from "react";
import { useEffect, useState } from "react";
import TitlePage from "/src/components/TitlePage";
import Button from "/src/components/Button";

const Index = () => {
  const [cart, setCart] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) : []);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
  const deleteCart = () => {
    localStorage.removeItem("cart");
    setCart(null);
  }

  useEffect(() => {

    setTotal(cart.reduce((total, product) => total + (product.quantity * product.price), 0));
    setTotalQuantity(cart.reduce((total, product) => total + (product.quantity), 0));
    
  }, []);

  const deleteToCart = (element) => {
    let cartArray = [];
    let obj = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < obj.length; i++) {
      cartArray.push(obj[i]);
    }

    console.log(element);
    const indexOfExistingProduct = cartArray.findIndex(productItem => productItem.id === element.id);
    cartArray.pop(indexOfExistingProduct);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    setCart(JSON.parse(localStorage.getItem("cart")));
    setTotal(cart.reduce((total, product) => total + (product.quantity * product.price), 0));
    setTotalQuantity(cart.reduce((total, product) => total + (product.quantity), 0));
  }

  const manageQuantity = (element, increment) => {
    let cartArray = [];
    let obj = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < obj.length; i++) {
      cartArray.push(obj[i]);
    }

    const indexOfExistingProduct = cartArray.findIndex(productItem => productItem.id === element.id);
    if(increment == '+'){
      
      cartArray[indexOfExistingProduct].quantity ++;
    }else{
      if(cartArray[indexOfExistingProduct].quantity > 1){
        cartArray[indexOfExistingProduct].quantity --;
      }
    }
    
    localStorage.setItem('cart', JSON.stringify(cartArray));
    setCart(JSON.parse(localStorage.getItem("cart")));
    setTotal(cart.reduce((total, product) => total + (product.quantity * product.price), 0));
    setTotalQuantity(cart.reduce((total, product) => total + (product.quantity), 0));
  }

  return (
    <div>
      <TitlePage title="Panier" />

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité : {totalQuantity}</th>
            <th>Total : {(total).toFixed(2)}€</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            //Condition equivalent de if exist
            cart ? (
              cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.title}</td>
                  <td>{cartItem.price} €</td>
                  <td>
                  <button onClick={() => manageQuantity(cartItem, '-')}>-</button>
                    {cartItem.quantity}
                    <button onClick={() => manageQuantity(cartItem, '+')}>+</button>
                  </td>
                  <td>{(cartItem.price * cartItem.quantity).toFixed(2)}€</td>
                  <td>
                  <Button type="button" classes="button button-secondary" click={() => deleteToCart(cartItem)} content="Supprimer" />  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Votre panier est vide</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Index;

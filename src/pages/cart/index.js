import React from "react";
import { useEffect, useState } from "react";
import TitlePage from "/src/components/TitlePage";

const Index = () => {
  const [cart, setCart] = useState();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <div>
      <TitlePage title="Panier" />

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
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
                </tr>
              ))
            ) : (
              <tr>
                <td>Votre panier est vide</td>
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

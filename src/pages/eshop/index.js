import { useEffect, useState } from 'react';
import TitlePage from '../../components/TitlePage';


const Index = () => {

    const [products, setProducts] = useState([]);
    const [isLogged, setLoggedin] = useState(false);

     useEffect(() => {
         fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(data=>setProducts(data))
     });
  
    return (
        <div className='page-shop'>
            <TitlePage title="Eshop"/>
            <button onClick={() => setLoggedin(!isLogged)} >Login</button>
            {
                isLogged ? (<p>Vous êtes connecté</p>) : (<p>Vous n'êtes pas connécté </p>)
            }

            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}

        </div>
    );
}

export default Index;
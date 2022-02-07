import { useEffect, useState } from 'react';
import TitlePage from '../../components/TitlePage';


const Index = () => {

    const [products, setProducts] = useState([]);

     useEffect(() => {
         fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(data=>setProducts(data))
     }, []);
  
    return (
        <div className='page-shop'>
            <TitlePage title="Eshop"/>

            <div className='products-grid'>
                {products &&
                    products.map(product => (
                        <div className='product-card' key={product.id}>
                            <div className='card-image'>
                                <img src={product.image} height="100"></img>
                            </div>
                            <div className='card-title'>
                                <p>{product.title}</p>
                            </div>
                            <div className='card-body'>
                                <p>{product.description}</p>
                            </div>
                            <div className='card-footer'>
                                <p>{product.price}</p>
                                <button class="button button-primary">Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Index;
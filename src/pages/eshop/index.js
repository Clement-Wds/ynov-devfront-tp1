import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import ProductCard from "../../components/ProductCard";
import productService from "/src/services/product.services";

const Index = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        productService.getProducts()
            .then((data) => {
                setProducts(data.data),
                console.log(data.data);
          })
        .catch(err=>console.log(err))
      },[]);

    return (
        <div className="page-shop">
            <TitlePage title="Eshop" />
            <div className="products-grid">
                {products &&
                products.map((product) => (
                <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        </div>
    );
};

export default Index;

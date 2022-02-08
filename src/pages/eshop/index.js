import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import ProductCard from "../../components/ProductCard";
const Index = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        },[]);
    });

    return (
        <div className="page-shop">
        <TitlePage title="E-Shop" />
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

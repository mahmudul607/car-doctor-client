import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const Products = () => {
    const [products, setProducts ] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="my-6">
        <div className="text-center">
                    <h4 className="font-bold text-[#FF3811]">Products</h4>
                    <h2 className="text-2xl font-bold text-black">Our Products Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

                </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products.map(product => <ProductCard
                         key={product.id}
                         product={product}
                        ></ProductCard> )
                    }
                </div>
                </div>
    );
};

export default Products;
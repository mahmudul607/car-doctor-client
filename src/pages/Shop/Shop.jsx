import { useEffect, useState } from 'react';
import './Shop.css';
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import axios from 'axios';

const Shop = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/cars')
        .then(res=>{
            setCars(res.data);
        })

    },[])

    return (
      <div>
        <ShopCarousel></ShopCarousel>

        <div>
            {
                cars.length
            }
        </div>
      </div>
    );
};

export default Shop;
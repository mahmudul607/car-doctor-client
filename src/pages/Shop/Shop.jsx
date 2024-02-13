import { useEffect, useState } from 'react';
import './Shop.css';
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import axios from 'axios';
import Car from './Car/Car';


const Shop = () => {
    const [cars, setCars] = useState([]);
    const [categorieCars, setCategorieCars] = useState([]);
    const [activeTab, setActiveTab] = useState('All')



    useEffect(() => {
        axios.get('https://car-doctor-server-one-gamma-38.vercel.app/cars')
            .then(res => {

                setCars(res.data);
               

            })

            loadData();

    }, [])

    useEffect(() => {
        axios.get('https://car-doctor-server-one-gamma-38.vercel.app/cars')
            .then(res => {

                setCategorieCars(res.data);
                

            })

    }, [])
    

        const loadData = async (brand='') => {
            if(brand==='All' || brand ===''){
                await axios.get(`https://car-doctor-server-one-gamma-38.vercel.app/cars`)
                    .then(res => {
                        
                        setCars(res.data)
                    })

            }
                  else if(brand !== '' && brand !== 'All') { 
                    await axios.get(`https://car-doctor-server-one-gamma-38.vercel.app/cars/brand/${brand}`)
                    .then(res => {
                        console.log(res.data)
                        setCars(res.data)
                    })
                }

        }

        


         const shuffleArray =(array) => {
                for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]]; // Swap elements
                }
                return array;
              }
              const newCars = shuffleArray(cars);
             

        
       
    

    const handleActiveTab = (id) => {
        setActiveTab(id)
        loadData(id)
        
    }



    const uniqueCategories = new Set(categorieCars.map((car) => car.brand))
    const cat = ['All']
    const categories = [...cat, ...uniqueCategories]




    // const categories = newCategories.sort((a, b) => {
    //     const indexA = sortOrder.indexOf(a);
    //     const indexB = sortOrder.indexOf(b);
    //     return indexA - indexB;
    //   });



    





    return (
        <div className='shop-components'>
            <ShopCarousel></ShopCarousel>

            <div>
                <div className='relative  text-center my-12'>
                    <h1 className='popular-cars h-[40px] w-full pb-4 text-4xl'>Explore Most Popular Cars</h1>
                    <p className='pt-12'>Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</p>
                </div>
                <div className=''>
                    <ul className='flex gap-2 text-center w-full py-6'>
                        <div role="tablist" className="tabs  tabs-boxed text-center w-3/4 mx-auto">
                            {
                                categories.map((cat) => <a
                                    className={`tab ${(activeTab === cat) ? 'tab-active' : ''}`}
                                    onClick={() => handleActiveTab(cat)}

                                    role='tab' key={cat}>{cat}</a>)
                            }
                        </div>



                    </ul>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 ms:grid-cols-2 gap-4 my-6'>
                    {
                        newCars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;
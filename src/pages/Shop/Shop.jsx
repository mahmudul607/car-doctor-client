import { useEffect, useState } from 'react';
import './Shop.css';
import ShopCarousel from "./ShopCarousel/ShopCarousel";
import axios from 'axios';
import Car from './Car/Car';
import { useLoaderData } from 'react-router-dom';


const Shop = () => {
    const [cars, setCars] = useState([]);
    const [categorieCars, setCategorieCars] = useState([]);
    const [activeTab, setActiveTab] = useState('All');
    const [productsPerPage, setProductsPerPage] = useState(6)
    const {count} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(count);
    console.log(totalCount)
    
    // const productsPerPage = 6;
    const pagesCount = Math.ceil(totalCount / productsPerPage);
  

    const pages= [...Array(pagesCount).keys()];

const handleProductsPerPage = (e) =>{
    // console.log(e.target.value)
    const val = parseInt(e.target.value)
    setProductsPerPage(val)
    setCurrentPage(1)

}

    useEffect(() => {
        axios.get(`http://localhost:5000/cars?page=${currentPage -1}&size=${productsPerPage}`)
            .then(res => {

                setCars(res.data);
                
                
                
        
               
                
            })

            // loadData();

    }, [currentPage, productsPerPage, ])

    // for category
    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(res => {

                setCategorieCars(res.data);
                

            })

    }, [])
    

        const loadData = async (brand='') => {
            if(brand==='All' || brand ===''){
                await axios.get(`http://localhost:5000/cars?page=${currentPage -1}&size=${productsPerPage}`)
                    .then(res => {
                        
                        setCars(res.data)
                        // 
                       setTotalCount(count);
                        
                    })

            }
                  else if(brand !== '' && brand !== 'All') { 
                    await axios.get(`http://localhost:5000/cars/brand/${brand}`)
                    .then(res => {
                        
                        setCars(res.data)
                        const numberOfCars = parseInt(res.data.length)
                        setTotalCount(numberOfCars)
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
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 my-6'>
                    {
                        newCars.map(car => <Car key={car._id} car={car}></Car>)
                    }
                </div>
                <div className='text-center pagination mb-10'>
                    <button className='btn mr-4' onClick={()=>{
                        if(currentPage > 1){
                            setCurrentPage(currentPage -1)
                        }
                    }}>Prev</button>
                    {
                        pages.map(page =><button 
                            onClick={()=>setCurrentPage(page + 1)}
                            className={currentPage === page + 1? 'selected btn mr-4':'btn mr-4'} 
                            key={page+1}
                            >{page+1}</button>)
                    }
                      <button className='btn mr-4' onClick={()=>{
                        if(currentPage < pages.length){
                            setCurrentPage(currentPage +1)
                        }
                    }}>Next</button>
                    <select value={productsPerPage} onChange={handleProductsPerPage}>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Shop;
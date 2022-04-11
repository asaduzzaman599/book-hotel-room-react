import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Home = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('data/data.json')
        .then(res=>res.json())
        .then(data=>setCategories(data.category))
    },[])
    return (
       <div className='container mx-auto'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 min-h-100 items-center'>
            {
                categories.map(category=>            <Category 
                    key={category.id}
                    category={category}></Category>)
            }
        </div>
       </div>
    );
};

export default Home;
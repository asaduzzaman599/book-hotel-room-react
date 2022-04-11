import React from 'react';

const Category = ({category}) => {
    const {name,img} = category;
    return (
        <div onClick={()=>''} className='p-10 shadow hover:shadow-lg rounded text-center'>
            <img width={"100%"} src={img} alt="" />
            <h3 className='text-xl font-medium'>{name}</h3>
        </div>
    );
};

export default Category;
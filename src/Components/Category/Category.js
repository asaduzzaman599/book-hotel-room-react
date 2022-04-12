import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const navigate = useNavigate();
    const {name,img,category:categoryType} = category;
    return (
        <div onClick={()=>navigate(`/room/${categoryType}`)} className='p-10 shadow hover:shadow-lg rounded text-center'>
            <img width={"100%"} src={img} alt="" />
            <h3 className='text-xl font-medium'>{name}</h3>
        </div>
    );
};

export default Category;
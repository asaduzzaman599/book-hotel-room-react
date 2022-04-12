import React from 'react';
import Rating from 'react-rating';
import RatingComponent from '../RatingComponent/RatingComponent';

const RoomDetail = ({room}) => {
    console.log(room)
    const {type,rating,price,description} = room;
    return (
        <div className='w-2/4 mx-auto shadow p-6'>
            <img src="" alt="" />
            <h3>{type}</h3>
            <p>{description}</p>
            <RatingComponent rating={rating}></RatingComponent>
            <h3>Price: {price}</h3>
            <button className='px-10 py-2 bg-slate-500 text-white semi-bold'>Book Now</button>
        </div>
    );
};

export default RoomDetail;
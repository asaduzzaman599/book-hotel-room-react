import React from 'react';

const RoomDetail = ({room}) => {
    console.log(room)
    const {type,rating,price,description} = room;
    return (
        <div className='w-2/4 mx-auto'>
            <h3>{name}</h3>
        </div>
    );
};

export default RoomDetail;
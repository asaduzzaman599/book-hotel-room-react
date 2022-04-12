import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Room = ({room,setRoom}) => {
    const navigate = useNavigate();
    const {type} = room;
    const {roomType:rt} = useParams()
    const roomType = type.split(' ').join('');
    
    console.log(rt)
    return (
        <div onClick={()=>{
            setRoom(room)
            navigate(`/room/${rt}/${roomType}`)
        }} className='w-full py-10 bg-yellow-100 border hover:bg-orange-300'>
            <h3> {type}</h3>
        </div>
    );
};

export default Room;
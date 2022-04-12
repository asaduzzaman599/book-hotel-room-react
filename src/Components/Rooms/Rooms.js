import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Room from '../Room/Room';
import RoomDetail from '../RoomDetail/RoomDetail';

const Rooms = () => {
    const {roomType} = useParams();
    const [rooms,setRooms] = useState([]);
    const [room,setRoom]=useState({})
    console.log(roomType)

    useEffect(()=>{
        fetch(`/data/${roomType}room.json`)
        .then(res=> res.json())
        .then(data=>setRooms(data[roomType]))
    },[roomType]);

    console.log(room)
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-1'>
                {
                    rooms.map(room=><Room key={room.id}
                    room={room}
                    setRoom = {setRoom}
                    ></Room>)
                }
            </div>
            <div className='col-span-4'>
               {room.id && <RoomDetail room={room}></RoomDetail>}
            </div>
        </div>
    );
};

export default Rooms;
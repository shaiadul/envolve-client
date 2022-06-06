import React from 'react';
import { Link } from 'react-router-dom';

const AllCart = ({ service }) => {
    const {name,img} = service;
    return (
        
        <div className='col-lg-4 mx-auto text-center'>
            <img className='w-50 mx-auto' src={img} alt="" />
            <h5 className='fw-bolder py-3'>{name}</h5>
            <Link className='bookingBtn' to="/chackout">Booking</Link>
        </div>
    );
};

export default AllCart;
import React from 'react';
import './Chackout.css'

const Chackout = () => {
    return (
        <div className='p-5 row  g-3 row d-flex justify-content-center  align-items-center mx-auto text-center'>
            <div className='col-lg-7'>
            <img className='w-50 mx-auto' src="https://cdn4.vectorstock.com/i/thumb-large/85/88/abstract-coming-soon-halftone-style-background-vector-33368588.jpg" alt="" />
            </div>
            <div className='col-lg-5 from-line'>
            <h3 className='checkText mb-4'>FOR UPDATE</h3>
                    
                    <input className='FromSize fuInput' type="name" name="" id="" placeholder='Your Name' /> <br />
                    <input className='FromSize fuInput' type="email" name="" id="" placeholder='Your Email'/><br />
                    <button className=' FromSubmit'>SUBMIT EMAIL</button>
            </div> 
        </div>
    );
       
};

export default Chackout;
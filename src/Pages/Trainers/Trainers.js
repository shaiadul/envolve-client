import React from 'react';
import './Trainers.css'
import trainer1 from '../../image/team-1.png'
import trainer2 from '../../image/team-2.png'
import trainer3 from '../../image/team-3.png'

const Trainers = () => {
    // this component name is trainer but it build for students
    return (
        <div className='cartBg row text-center mt-5 mb-4 p-3 d-flex justify-content-center  align-items-center mx-auto'>
            <div className='col-lg-4 '>
                <img className='w-50' src={trainer1} alt="" />
                <h3 className='text-danger fw-bold'>Jonny Brestron</h3>
                <h4 className='text-white fw-bolder'>Premium Client</h4>
            </div>
            <div className='col-lg-4 '>
                <img className='w-50' src={trainer2} alt="" />
                <h3 className='text-danger fw-bold'>Tom Anderson</h3>
                <h4 className='text-white fw-bolder'>Premium Client</h4>
            </div>
            <div className='col-lg-4 '>
                <img className='w-50' src={trainer3} alt="" />
                <h3 className='text-danger fw-bold'>Aught Semsion</h3>
                <h4 className='text-white fw-bolder'>Premium Client</h4>
            </div>
        </div>
    );
};

export default Trainers;
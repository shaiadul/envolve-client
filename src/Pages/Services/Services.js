import React from 'react';
import useServices from '../../hooks/useServices';
import AllCart from '../AllCart/AllCart';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices()
    return (
        <div>
            <h1 className='text-center mt-3 fw-bolder text-dark'>Our Features Classes</h1>
            <h5 className='text-center chackouttext fw-bold'>CHECKOUT OUR FITNESS CLASSES</h5>
            <div className='bgServices m-5 p-4 g-5 row d-flex justify-content-center  align-items-center mx-auto'>
            {
                services.map(service => <AllCart key={service.id} service={service}></AllCart> )
            }
            </div>
        </div>
    );
};

export default Services;
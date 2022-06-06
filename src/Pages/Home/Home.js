
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import ServiceCart from '../ServiceCart/ServiceCart';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {
    // custom hook use for load data
    const [services, setServices] = useServices()
    // console.log(services);


    return (
        <div>
            {/* banner part */}
            <div className='home-container text-center '>
                <h4 className='text-mine fw-bolder'>GYM AND FITNESS</h4>
                <Link className='see-link ' to="/services">See More</Link>
            </div>
            {/* lode data component */}
            <div className='bgServices m-5 p-4 gy-4 row d-flex justify-content-center  align-items-center mx-auto'>
                {
                    services.slice(0, 3).map(service => <ServiceCart key={service.id} service={service}></ServiceCart>)
                }
            </div>
            <div className='text-center'>
                <h4 className='text-danger fw-bolder'>Our Success</h4>
                <h1 className='text-gray fw-bolder'>Meet Our Expert Success!</h1>
                <Trainers></Trainers>
            </div>
        </div>
    );
};

export default Home;
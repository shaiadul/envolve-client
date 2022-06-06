import React from 'react';
import './About.css'
import owner from '../../image/owner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoicemail ,faPhone, faHome, faMapLocationDot, faArrowRight} from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return (
        <div className='p-5 bgAbout row d-flex justify-content-center  align-items-start mx-auto'>
            <div className="col-lg-5 ">
                <img className='w-100 h-50 shadow-lg' src={owner} alt="" />
            </div>
            <div className="col-lg-7 text-center">
                <h1 className=' fs-bold text-p-info '>Personal Information</h1>
                <div className='text-start my-3'>
                    <h3>MD Shaiadul Bashar</h3>
                    <small className='pb-4'> ( Owner of EVOLVE )</small><br />
                    <span className='mt-4 fw-bold '> <FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon> shaiadul@gmail.com</span>
                    <p  className='fw-bold '><span className='pe-2'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01740673899</span> <span><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>+458 5475 41</span></p>
                    <span className='fw-bolder '><FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon> Gulshan 1220, Link-Rood, Dhaka ( Bangladesh )</span><br />

                    <article className=' justifying'>
                        <span className='titleOfGoal'>GOAL OF MINE</span>  The term is derived from a Greek word, which means ‘to exercise’. In the olden days, in Greece, the presence of a gymnasium signified the importance of physical fitness to the Greeks. There were strict fitness routines developed particularly for the Greeks. The soldiers were taught how to mount a horse and many other techniques that involved a lot of performance skills. This formed the base of gymnastics which evolved with time. This was also the time when gymnast methods were introduced even in the Greek educational system.
                    </article>
                    
                </div>
            </div>
            
        </div>
    );
};

export default About;
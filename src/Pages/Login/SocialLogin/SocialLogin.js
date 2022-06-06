import React from 'react';
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    
    if (user || user1) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mx-auto'>
                <div style={{ height: '2px' }} className=" bg-dark w-25"></div>
                <p className='mt-2 fw-bolder px-1'>or</p>
                <div style={{ height: '2px' }} className=" bg-dark w-25"></div>
            </div>
            
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark social-btn w-75 mb-2'>Google Sign In <img className='ps-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png" alt="" /></button><br />
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-dark social-btn w-75'>GitHub Sign In <img className='ps-2' src="https://cdn-icons-png.flaticon.com/512/2111/2111374.png" alt="" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;
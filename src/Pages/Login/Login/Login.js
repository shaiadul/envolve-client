import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {

    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


      
      if(user){
        navigate(from, { replace: true });
      }
      if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handelSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password =passRef.current.value;

        signInWithEmailAndPassword(email,password);    
    }

    const navigateRegister = e =>{
        navigate('/register')
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
          await sendPasswordResetEmail(email);
          toast('Sent Email');
        }
        else{
            toast('Please Enter Your Email')
        }
        
    }
    return (
        <div className='row d-flex g-3 row d-flex justify-content-center  align-items-center mx-auto'>

            {/* part one */}
            <div className="col-lg-7 text-center mx-auto">
                <img className='w-50  mx-auto' src="https://previews.123rf.com/images/funwayillustration/funwayillustration1408/funwayillustration140800422/31661244-body-builder.jpg" alt="" />
            </div>
            {/* form two */}
            <div className="col-lg-5">
                <div className='p-5 mx-auto w-100 bg-from my-5 text-center'>
                    <h1 style={{color: '#eb699e'}} className='text-center my-4 fs-bolder'>LOGIN</h1>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='fw-bold w-50 rounded mb-2' variant="dark" type="submit">
                            Login
                        </Button>
                    </Form>
                    {errorElement}
                    <p className='fw-bold text-center'>New to Evolve ! <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                    <p className='fw-bold text-center'>Forget Password ?<span className='ps-2 text-warning text-decoration-none' onClick={resetPassword}>Reset Password</span></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        	<ToastContainer />
        </div>
    );
};

export default Login;
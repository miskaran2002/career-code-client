import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import animationData from '../../assets/lotties/signUp.json'
import Lottie from 'lottie-react';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';


const signIn = () => {
    const { signInUser } = use(AuthContext);
     const location= useLocation();
     const navigate = useNavigate();
     const from = location.state ||'/';
     console.log('location in signin page', location);
    

    console.log('location in signin page', location);
    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Email:', email, 'Password:', password);
        // Sign in User,
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('User signed in:', user);
                // Handle successful sign-in (e.g., redirect or show a success message)
               navigate(from);
            })
            .catch(error => {
                console.error('Error signing in:', error);
                // Handle sign-in error (e.g., show an error message)
            });
       
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '400px' }} animationData={animationData} loop={true}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <form onSubmit={handleSignIn} className="form-control">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"
                                    name="email"
                                    className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                        <SocialLogin from={from} ></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signIn;
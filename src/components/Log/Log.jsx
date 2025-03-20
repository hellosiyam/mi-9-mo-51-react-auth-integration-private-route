import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authproviders';

const Log = () => {

    const {signInUser} = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false)

    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        

        signInUser(email, password)
        .then((result)=> {
            console.log(result.user)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base my-2">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-base my-2">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <button onClick={()=> setShowPass(!showPass)} type='button' className='text-lg absolute right-6 top-12.5'>
                                {
                                    showPass? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </button>
                            <label className="label">
                                <a href="#" className="text-base my-2 link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                        <p className='text-center'>New To this WebSite Please <span className='text-base underline text-blue-600 font-medium'><Link to='/register'>Register</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Log;
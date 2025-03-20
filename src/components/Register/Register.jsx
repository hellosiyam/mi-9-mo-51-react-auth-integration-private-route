import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authproviders';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const [showPass, setShowPass] = useState(false)

    const handelRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log('ERROR', error.message)
        })
    }

    return (
        <div className="">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-base my-2">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <button onClick={() => setShowPass(!showPass)} type='button' className='text-lg absolute right-6 top-12.5'>
                                {
                                    showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </button>
                            <div className="form-control my-4">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                        <p className='text-center'>Already have an account <span className='text-base underline text-blue-600 font-medium'><Link to='/login'>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
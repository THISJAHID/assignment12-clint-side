
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from 'react-router-dom';
import Animate from './Animate';
import axios from 'axios';

const Login = () => {
    const { singinUser, singInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlegoogle = () => {
        singInWithGoogle()
            .then(() =>
                toast.success("Thank you", {
                    position: "bottom-right",
                    autoClose: 1000
                }))
        navigate("/")
            axios.post("")
            .catch((error) => console.error(error))
    }

    const handlelogin = e => {
        navigate( location?.state? location?.state :"/")
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        singinUser(email, password)
        e.target.reset()
       
            .then(result => {
                result
                toast.success("Thank you", {
                    position: "bottom-right",


                })
                navigate("/")
               
            })
            .catch(error => {
                toast.warn(error.message, {
                    position: "bottom-right",

                })

            })

    }
    return (

        <div>
            <div className='grid md:grid-cols-2 gap-2'>
                <div>
                    <Animate></Animate>
                </div>

                <div>



                    <form onSubmit={handlelogin} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                      
                        <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button>
                    
                        
                        <div className=''>
                            <p>Dont Have a Account?  <Link to="/register" className='text-blue-500'>Register</Link> </p>
                        </div>
                        
                        <div className=" flex  justify-center p-5">

                            <button onClick={handlegoogle} className='text-3xl hover:bg-gray-300 p-3 rounded-full'>      <FcGoogle></FcGoogle> </button>
                            <button className='text-3xl hover:bg-gray-300 p-3 rounded-full text-blue-500'>      <BsFacebook></BsFacebook> </button>
                        </div>
                    </form>
<ToastContainer></ToastContainer>
                  

                </div>
            </div>


           
        </div>


    );
};

export default Login;

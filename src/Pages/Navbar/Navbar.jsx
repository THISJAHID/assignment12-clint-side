import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";




const Navbar = () => {
   
    const { user, logOut } = useContext(AuthContext)
    console.log()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success()
            })
            .catch(error => {
                toast.error(error, {
                    position: "bottom-right"
                })
            })
    }

    const navlink = <>
        <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
            <div className="flex items-center">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-4 border-[#341862] text-[#5d349e]" : ""
                }>Home</NavLink>
            </div>

        </li>
        {
            user && <>

                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <div className="flex items-center">
                        <NavLink to="/trainer" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-[#341862] text-[#5d349e] " : ""
                        }>Trainer</NavLink>
                    </div>

                </li>
                <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    <div className="flex items-center">
                        <NavLink to="/managejob" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-[#341862] text-[#5d349e] " : ""
                        }>Add Job</NavLink>
                    </div>

                </li>
            
          

            </>
        }
    </>
    return (


        <nav className="bg-transparent border-gray-200 dark:bg-gray-900 z-20 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://gym-portel.web.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GYM</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {
                        user ? <div className="dropdown dropdown-end ">
                          
                            <ul tabIndex={0} className=" flex content-center gap-2 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            
                               

                                {/* <li><button  className='bg-[#865be9] p-3 rounded-md mt-4  text-[#ffffff]   ' >Sing Out</button></li> */}
                                <li><img onClick={handleLogOut} src={user.photoURL} className="w-12 rounded-full"  /></li>
                            </ul>
                        </div> : <span><>{<NavLink to="login" >Login</NavLink>}</></span>
                    }
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navlink}
                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;
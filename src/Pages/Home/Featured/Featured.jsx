
import { FaHeartPulse, FaRegClock } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";

const Featured = () => {
    return (
        <div>
            <div className="bg-[url('https://i.postimg.cc/tRdktwZM/section-bg01-png.webp')] bg-fixed bg-cover  h-[800px]">
                <div className="">

                    <div className="grid  md:grid-cols-2 gap-5  content-center h-[300px]">
                        <div className="">
                            <span className="pl-36  text-red-500">OUR SERVICES FOR YOU</span>
                            <p className="text-5xl leading-tight mt-8 text-left pl-32 text-white font-[Teko]">PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</p>
                        </div>
                        <div className=""> 
                            <button className="btn bg-red-800 w-44 h-16">See More</button>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 content-center justify-center h-[400px] p-20 gap-4">


                        <div className=" p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="">
                                <FaHeartPulse className="text-5xl hover:text-red-500 " />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-red-500">Need a help in Claim?</h5>
                            </a>
                            <div>
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>


                            </div>



                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="">
                                <CgGym className="text-5xl hover:text-red-500 " />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-red-500">Need a help in Claim?</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                        </div>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="">
                                <FaRegClock className="text-5xl hover:text-red-500 " />
                            </div>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  hover:text-red-500">Need a help in Claim?</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

                        </div>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
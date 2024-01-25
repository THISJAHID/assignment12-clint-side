'use client';

import Middle from "../Middle/Middle";
import Carasul from "./Carasul";



const Banner = () => {
    return (
        <div className="  bg-[url('https://i.postimg.cc/XvVXd3QN/h1-hero-png.webp')] bg-fixed bg-cover">
            <div className='grid grid-cols-2 gap-2 h-[600px] justify-center content-center'>
                <div className="w-full">
                    <Carasul></Carasul>
                    </div>
                <div className="">
                    <Middle></Middle>
                    </div>
          </div>
        </div>
    );
};

export default Banner;
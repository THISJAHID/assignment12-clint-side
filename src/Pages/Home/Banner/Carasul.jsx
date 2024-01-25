
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css"
import Slider from "react-slick";
const Carasul = () => {
    var settings = {
        
        infinite: true,
       
        arrows:false,
     
     
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <>
            <div>
              
                <Slider {...settings}>
                    <div>
                        <h3 className="text-white text-6xl text-left p-4 uppercase font-[Teko] leading-tight  font-bold  ">Build Perfect body Shape for good and Healthy life.</h3>
                        <button className="btn w-48 h-14 text-white rounded-md bg-red-800 hover:bg-red-600 ">Become A member</button>
                    </div>
                    <div>
                        <h3 className="text-white text-6xl text-left p-4 uppercase font-[Teko] leading-tight  font-bold ">Build Perfect body Shape for good and Healthy life.</h3>
                        <button className="btn w-48 h-14 text-white rounded-md bg-red-800 hover:bg-red-600 ">Become A member</button>
                    </div>
                    <div>
                        <h3 className="text-white text-6xl text-left p-4 uppercase font-[Teko]  leading-tight font-bold ">Build Perfect body Shape for good and Healthy life.</h3>
                        <button className="btn w-48 h-14 text-white rounded-md bg-red-800 hover:bg-red-600 ">Become A member</button>
                    </div>
                    <div>
                        <h3 className="text-white text-6xl text-left p-4 uppercase font-[Teko]  leading-tight font-bold ">Build Perfect body Shape for good and Healthy life.</h3>
                        <button className="btn w-48 h-14 text-white rounded-md bg-red-800 hover:bg-red-600 ">Become A member</button>
                    </div>
                    <div>
                        <h3 className="text-white text-6xl text-left p-4 uppercase font-[Teko]  leading-tight font-bold ">Build Perfect body Shape for good and Healthy life.</h3>
                        <button className="btn w-48 h-14 text-white rounded-md bg-red-800 hover:bg-red-600 ">Become A member</button>
                    </div>
                   
                </Slider>
            </div>
        </>
    );
};

export default Carasul;
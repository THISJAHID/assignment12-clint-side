import ParticaleBackground from "../../Componant/ParticaleBackground";
import Footers from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import Gallary from "../Gallary/Gallary";

import NewsLetter from "../NewsLetter/NewsLetter";

import Trainer from "../Trainer/Trainer";


const MainLayout = () => {
    return (
        <div> <ParticaleBackground>       </ParticaleBackground>
            <Navbar></Navbar>
            <Banner></Banner>
            
          
            <About></About>
           <Trainer></Trainer>
            <Featured></Featured>
         
                <NewsLetter></NewsLetter>
        <Gallary></Gallary>
            <Footers></Footers>
 
        </div>
    );
};

export default MainLayout;
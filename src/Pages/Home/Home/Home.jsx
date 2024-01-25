import ParticaleBackground from "../../Componant/ParticaleBackground";

import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Featured from "../Featured/Featured";
import Gallary from "../Gallary/Gallary";
import NewsLetter from "../NewsLetter/NewsLetter";






const Home = () => {
    return (
        <div>
            <ParticaleBackground></ParticaleBackground>
        
            <Banner></Banner>
            <About></About>
            <Featured></Featured>
           
            <NewsLetter></NewsLetter>
  
            <Gallary></Gallary>
            <Blog></Blog>
        </div>
    );
};

export default Home;
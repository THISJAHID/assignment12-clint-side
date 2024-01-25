
const About = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 h-[700px] content-center justify-center">
          
            <div className="pl-8">
                <img src="https://i.postimg.cc/v87PW2Vr/about-png.webp" className="h-[600px]" alt="" />
            </div>
            <div className="h-[600px]  grid content-center p-5">
                <span className="text-red-600 mb-5 font-[Teko] text-2xl">About Our GYM</span>
                <h1 className="text-5xl font-[Teko] text-left">SAFE <span className="text-7xl text-red-600">BODY BUILDING </span> PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h1>
                <p className="leading-tight line-clamp-6 mt-14 text-left font-semibold">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                <br /><br />
                <p className="text-left font-extralight">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
            </div>
        </div>
    );
};

export default About;
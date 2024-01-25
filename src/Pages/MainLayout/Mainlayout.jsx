import { Outlet } from "react-router-dom";

import Footers from "../Footer/Footer";

import Header from "../Navbar/Header";





const Mainlayout = () => {

    return (

        <>
            <div className="container mx-auto ">
                {/* <Navbar></Navbar> */}
                <Header></Header>
                <Outlet></Outlet>
                <Footers></Footers>
               
            </div>
        </>
    );
};

export default Mainlayout;
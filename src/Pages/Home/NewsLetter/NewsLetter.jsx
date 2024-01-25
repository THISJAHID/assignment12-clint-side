import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";


const NewsLetter = () => {
    const { user } = useContext(AuthContext)
    // const sub_name = user?.user.displayName;
    console.log(user?.displayName)
        
    const sub_name = user?.displayName
    const sub_email = user?.email
    const sub_photo = user?.photoURL
    const sub_rol = ""
    const subscribe = {
        sub_email, sub_name, sub_photo, sub_rol
    }
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let name = month[d.getMonth()];
    const handlemember = () => {
      
        axios.post("https://backend-server-delta.vercel.app/subscribes", subscribe)
            .then(data => {data
            toast("Your Successfully Member" ) 
        })
 }
 
    return (
        <div>
            <div className="newsletter grid md:grid-cols-2 lg:gird-cols-2 p-5">
                <div className=" text-left">
                    <h2 className="font-[teko] text-5xl "> <span className="text-7xl text-orange-400">{name}</span> membership offer available Now</h2>
                </div>
                <div className="w-full content-center justify-center">
                    <button onClick={handlemember} className="btn w-48 h-14 text-white rounded-md bg-orange-600 hover:bg-orange-500   ">Become A member</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
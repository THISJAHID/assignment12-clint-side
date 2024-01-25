import axios from "axios";


const axiosPublick = axios.create({
    baseURL: "https://backend-server-delta.vercel.app/users?"
})
const useAxiosPublick = () => {
    return (
        axiosPublick
    );
};

export default useAxiosPublick;
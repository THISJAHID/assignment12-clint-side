import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "./AuthProvider";


const useAdmin = () => {
    const { user , loading} = useContext(AuthContext)
   
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
         queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
         
            const res = await axios.get(`https://backend-server-delta.vercel.app/users/${user?.email}`);
            // console.log(res.data);
            return res?.data?.admin;
        }
         
    })
    return [isAdmin, isAdminLoading];
  
};

export default useAdmin;
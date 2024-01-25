import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "./AuthProvider";


const useTrainer = () => {
    const { user, loading } = useContext(AuthContext)

    const { data: isTrainer, isPending: isTrainerLoading } = useQuery({
        queryKey: [user?.email, 'isTrainer'],
        enabled: !loading,
        queryFn: async () => {

            const res = await axios.get(`https://backend-server-delta.vercel.app/users/${user?.email}`);
            // console.log(res.data);
            return res?.data?.trainer;
        }

    })
    return [isTrainer, isTrainerLoading];

};

export default useTrainer;
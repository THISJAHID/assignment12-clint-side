
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const PrivetsRoutes = ({children}) => {
    const {user,  loading} = useContext(AuthContext);
  if(loading){
    return <span className="loading loading-ring loading-xs"></span>
  }
    if(user){
      <Navigate to={"/"}></Navigate>
        return children;
       
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivetsRoutes;
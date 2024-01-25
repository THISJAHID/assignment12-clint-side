import React, { useContext } from 'react';
import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';

const AdminPrivider = ({Children}) => {
    const { user, loading } = useContext()
    const location = useLocation();
const [isAdmin, isAdminLoading] = useAdmin()
    if (loading || isAdminLoading) {
        return <span className="loading loading-ring loading-xs"></span>
    }

    if (user || isAdmin) {
        return Children
    }
   <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminPrivider;
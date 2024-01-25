
import { Sidebar } from 'flowbite-react';
import { useEffect } from 'react';
import { useContext } from 'react';

import { useState } from 'react';
import {  HiChartPie, HiInbox,  HiTable,   HiViewBoards } from 'react-icons/hi';
import { NavLink, Outlet } from 'react-router-dom';
import AdminNav from './AdminNav/AdminNav';


const Dashboard = () => {



    return (
        <>
            
            
            <div className="grid md:grid-cols-12 gap-2 mt-8 p-5">
                <div className="col-span-3 min-h-screen">
                    {
                     <AdminNav></AdminNav>
               }
                </div>
                <div className="col-span-9">
                   <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
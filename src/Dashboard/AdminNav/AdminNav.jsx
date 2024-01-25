import { Sidebar } from "flowbite-react";
import { NavLink } from "react-router-dom";

import { HiChartPie, HiInbox, HiTable, HiViewBoards } from 'react-icons/hi';

import useAdmin from "../../Provider/useAdmin";
import useTrainer from "../../Provider/useTrainer";
const AdminNav = () => {

    const [isAdmin] = useAdmin()
  const [isTrainer] = useTrainer()
    return (
       
                <Sidebar aria-label="Default sidebar example ">
                    <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {
                        isTrainer ? <>
                            <Sidebar.Item icon={HiChartPie}>
                                <NavLink to="dashboard"> Dashboard</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiViewBoards} labelColor="dark">
                                <NavLink to="allsubscribers"> All Class</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiViewBoards} labelColor="dark">
                                <NavLink to="allusers"> All student</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiInbox} >
                                <NavLink to="alltrainer"> Al</NavLink>
                            </Sidebar.Item>

                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </> :
                        isAdmin ? <>
                            <Sidebar.Item icon={HiChartPie}>
                                <NavLink to="dashboard"> Dashboard</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiViewBoards} labelColor="dark">
                                <NavLink to="allsubscribers"> All Member</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiViewBoards} labelColor="dark">
                                <NavLink to="allusers"> All users</NavLink>
                            </Sidebar.Item>
                            <Sidebar.Item icon={HiInbox} >
                                <NavLink to="alltrainer"> All Trainer</NavLink>
                            </Sidebar.Item>

                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </>  :"He is not a admin"
                    }
                           
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
         
    );
};

export default AdminNav;
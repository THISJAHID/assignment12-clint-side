
import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import { Table } from "flowbite-react";

const AllUsers = () => {
    const [users, setUsers] = useState()
    
    useEffect(() => {
        fetch("https://backend-server-delta.vercel.app/user")
            .then(res => res.json())
            .then(data => setUsers(data))
           
    },[])
   
    return (
        <div>
            


            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Trainer  name</Table.HeadCell>
                        <Table.HeadCell>Trainer email </Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        {
                            users?.map((user) => <User key={user._id} user={user}></User>)

                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default AllUsers;
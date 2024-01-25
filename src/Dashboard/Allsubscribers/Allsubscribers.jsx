'use client';

import { Table } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../AllUsers/user';

const Allsubscribers = () => {
    const [subscribe, setSubscribe] = useState()

    useEffect(() => {
        fetch("https://backend-server-delta.vercel.app/users")
            .then(res => res.json())
            .then(data => setSubscribe(data))

    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Product name</Table.HeadCell>
                        <Table.HeadCell>Color</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            subscribe?.map((user) => <User key={user._id} user={user}></User>)

                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Allsubscribers;
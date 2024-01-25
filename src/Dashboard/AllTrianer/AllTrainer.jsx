'use client';

import { Table } from 'flowbite-react';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../AllUsers/user';
const AllTrainer = () => {
    const [trainers, setTrainers] = useState()

    useEffect(() => {
        fetch("https://backend-server-delta.vercel.app/trainers")
            .then(res => res.json())
            .then(data => setTrainers(data))

    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Trainer  name</Table.HeadCell>
                        <Table.HeadCell>Trainer </Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        {
                            trainers?.map((user) => <User key={user._id} user={user}></User>)

                        }
                    </Table.Body>
                </Table>
            </div>
            
        </div>
    );
};

export default AllTrainer;
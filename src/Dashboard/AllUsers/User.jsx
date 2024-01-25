
'use client';

import { Table } from 'flowbite-react';
const User = ({ user }) => {
    const { name, email , user_rol } = user
    return (
       
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {name}
                            </Table.Cell>
                            <Table.Cell>{ email}</Table.Cell>
                            <Table.Cell>{ user_rol?user_rol:"No User"}</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
      
    );
};

export default User;
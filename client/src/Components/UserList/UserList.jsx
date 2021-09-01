import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';

import { getAllUserApi } from '../../Functions/api/users'

export default function UserList() {
    const [userList, setUserList] = useState([])

    async function getAllUser() {
        const allUsersApi = await getAllUserApi()
        return allUsersApi
    }

    useEffect(() => {
        const allUser = getAllUser()
        setUserList(allUser)
    }
        , [])

    const columns = [
        { field: 'firstName', headerName: 'Name', with: 90 },
        { field: 'lastName', headerName: 'Email', with: 90 },
        { field: 'age', headerName: 'Telefono', with: 150 },
        { field: 'age', headerName: 'WhatsApp', with: 90 },
        { field: 'lastName', headerName: 'Contrato', with: 90 },
        { field: 'lastName', headerName: 'Admin', with: 90 },

    ]

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
            />
        </div>
    )
}

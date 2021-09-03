import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';

import { getAllUserApi } from '../../Functions/api/users'

export default function UserList() {
    const [userList, setUserList] = useState([])

    async function getAllUser() {
        const allUsersApi = await getAllUserApi()
        setUserList(allUsersApi)
       
    }

    useEffect(() => {
       getAllUser()       
    }
        , [])

    const columns = [
        { field: 'name', headerName: 'Name',width: 150},
        { field: 'email', headerName: 'Email',width: 250},
        { field: 'phone', headerName: 'Telefono' ,width: 150},
        { field: 'whatsapp', headerName: 'WhatsApp' ,width: 150},
        { field: 'isAdmin', headerName: 'Admin',width: 150},

    ]

      return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={userList}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}

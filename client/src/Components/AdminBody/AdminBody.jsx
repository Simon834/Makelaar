import React, { useState, useEffect } from 'react'
import { Route } from "react-router";
import TableList from '../TableList/TableList';
import UserRegistrationForm from '../UserRegistrationForm/UserRegistrationFrom';
import { getAllUserApi } from '../../Functions/api/users';
import property from '../../inmuebles.json'
import UserDetail from '../UserDetail/UserDetail';
import Logout from '../Logout/Logout';
import FormProperty from '../FormProperty/FormProperty';
import UploadFile from '../Upload/UploadFile';
import NewContractForm from '../FormContract/FormContract'

const columnsUserList = [
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Telefono', width: 150 },
    { field: 'whatsapp', headerName: 'WhatsApp', width: 150 },
    { field: 'isAdmin', headerName: 'Admin', width: 150 },
    { field: 'contract', headerName: 'Contratos', width: 150 },

]

const columnsPropertyList = [
    { field: 'title', headerName: 'Titulo', width: 350 },
    { field: 'concept', headerName: 'Relación', width: 150 },
    { field: 'address', headerName: 'Dirección', width: 150 },
    { field: 'type', headerName: 'Tipo', width: 150 },
    { field: 'price', headerName: 'Precio', width: 150 },

]

export default function AdminBody() {
    const [userList, setUserList] = useState([])

    async function getAllUser() {
        const allUsersApi = await getAllUserApi()
        setUserList(allUsersApi)

    }

    useEffect(() => {
        getAllUser()
    }// eslint-disable-next-line
        , [])

    return (
        <div>

            <Route path="/admin/:id/data">
                <UserDetail />
            </Route>
            <Route path="/admin/:id/users">
                <TableList columns={columnsUserList} rows={userList} />
            </Route>

            <Route path="/admin/:id/newadmin">
                <UserRegistrationForm isAdmin={true} />
            </Route>
            <Route path="/admin/:id/property">
                <TableList columns={columnsPropertyList} rows={property} />
            </Route>
            <Route path="/admin/:id/logout">
                <Logout/>
            </Route>
            <Route path="/admin/:id/newproperty">
                <FormProperty />
            </Route>
            <Route path="/admin/:id/newcontract">
                <NewContractForm />
            </Route>
            <Route path="/admin/:id/test">
                <UploadFile />
            </Route>
        </div>
    )
}


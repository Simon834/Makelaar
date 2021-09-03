import React from 'react'
import { Route } from "react-router";
import UserList from '../UserList/UserList'
import UserRegistrationForm from '../UserRegistrationForm/UserRegistrationFrom';
import FormContraseña from '../FormContraseña/FormContraseña';

export default function AdminBody() {
    return (
        <div>
            <Route path="/admin/users">
                <UserList/>
            </Route>

            <Route path="/admin/newadmin">
                <UserRegistrationForm isAdmin={true}/>
            </Route>
            <Route path="/admin/test">
                <FormContraseña/>
            </Route>
        </div>
    )
}

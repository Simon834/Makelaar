import React from 'react'
import { Route } from "react-router";
import UserList from '../UserList/UserList'

export default function AdminBody() {
    return (
        <div>
            <Route path="/admin/users">
                <UserList/>
            </Route>
        </div>
    )
}

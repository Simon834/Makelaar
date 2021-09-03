import React from 'react'
import ViewBase from '../ViewBase/view-base'
import MenuPanelList from '../../Components/MenuPanelList/MenuPanelList'
import AdminBody from '../../Components/AdminBody/AdminBody'

export default function AdminPanel() {
    const list =
        [
        {
            title: "Mis datos",
            rute: "/datos"
        },
        {
            title: "Mis usuarios",
            rute: "/users"
        },
        {
            title: "Crear admin",
            rute: "/newadmin"
        }        ,
        {
            title: "Test",
            rute: "/test"
        }
        ]

    return (
        <div>
            <ViewBase filters={<MenuPanelList list={list} routeAction="/admin" />} content={<AdminBody />} />
        </div>
    )
}

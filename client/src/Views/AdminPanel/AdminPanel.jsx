import React from 'react'
import ViewBase from '../ViewBase/view-base'
import MenuPanelList from '../../Components/MenuPanelList/MenuPanelList'
import AdminBody from '../../Components/AdminBody/AdminBody'


export default function AdminPanel() {
    const id=15
    const list =
        [
        {
            title: "Mis datos",
            rute: "/data"
        },
        {
            title: "Mis usuarios",
            rute: "/users"
        },
        {
            title: "Mis propiedades",
            rute: "/property"
        },
        {
            title: "Crear admin",
            rute: "/newadmin"
        }
        ]

    return (
        <div>
            <ViewBase filters={<MenuPanelList list={list} routeAction={`/admin/${id}`} />} content={<AdminBody />} />
        </div>
    )
}

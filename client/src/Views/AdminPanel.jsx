import React from 'react'
import ViewBase from './view-base'
import MenuPanelList from '../Components/MenuPanelList/MenuPanelList'
import AdminBody from '../Components/AdminBody/AdminBody'

export default function AdminPanel() {
    const list =
        [{
            title: "Mis contratos",
            rute: "/contrato"
        },
        {
            title: "Mis datos",
            rute: "/datos"
        },
        {
            title: "Mis usuarios",
            rute: "/users"
        }
        ]

    return (
        <div>
            <ViewBase filter={<MenuPanelList list={list} routeAction="/admin" />} content={<AdminBody />} />
        </div>
    )
}

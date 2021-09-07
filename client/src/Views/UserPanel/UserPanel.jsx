import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from "react-redux";
import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import UserBody from "../../Components/UserBody/UserBody";

export default function UserPanel() {
  const { userInfo } = useSelector(state => state)
  const history = useHistory()
  
  useEffect(() => {

    if(!userInfo.user || userInfo.user.isAdmin){
        history.push("/")
    }
}, [userInfo])


  const list = [
    {
      title: "Mis datos",
      rute: "/data",
    },
    {
      title: "Mis propiedades",
      rute: "/properties",
    },
    {
      title: "Salir",
      rute: "/logout",
    }
  ];

  return (
    <div>
      <ViewBase
        filters={<MenuPanelList list={list} routeAction={`/user/${userInfo.user?.id}`} />}
        content={<UserBody />}
      />
    </div>
  );
}

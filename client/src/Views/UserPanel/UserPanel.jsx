import React from "react";
import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import AdminBody from "../../Components/AdminBody/AdminBody";
import UserBody from "../../Components/UserBody/UserBody";

export default function UserPanel() {
  const id=15
  const list = [
    {
      title: "Mis datos",
<<<<<<< HEAD
      rute: "/datos",
    },
    {
      title: "Mis contratos",
      rute: "/contracts",
    },
    {
      title: "Mis pagos",
      rute: "/payments",
=======
      rute: "/data",
>>>>>>> dev
    },
    {
      title: "Mis propiedades",
      rute: "/properties",
    },
  ];

  return (
    <div>
      <ViewBase
<<<<<<< HEAD
        filters={<MenuPanelList list={list} routeAction="/user" />}
=======
        filters={<MenuPanelList list={list} routeAction={`/user/${id}`} />}
>>>>>>> dev
        content={<UserBody />}
      />
    </div>
  );
}

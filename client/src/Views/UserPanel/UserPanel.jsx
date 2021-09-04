import React from "react";
import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import AdminBody from "../../Components/AdminBody/AdminBody";
import UserBody from "../../Components/UserBody/UserBody";

export default function UserPanel() {
  const id = 15;
  const list = [
    {
      title: "Mis datos",
      rute: "/data",
    },
    {
      title: "Mis propiedades",
      rute: "/properties",
    },
  ];

  return (
    <div>
      <ViewBase
        filters={<MenuPanelList list={list} routeAction={`/user/${id}`} />}
        content={<UserBody />}
      />
    </div>
  );
}

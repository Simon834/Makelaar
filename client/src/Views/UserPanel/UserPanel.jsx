import React from "react";
import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import AdminBody from "../../Components/AdminBody/AdminBody";
import UserBody from "../../Components/UserBody/UserBody";

export default function UserPanel() {
  const list = [
    {
      title: "Mis datos",
      rute: "/datos",
    },
    {
      title: "Mis contratos",
      rute: "/:id/contracts",
    },
    {
      title: "Mis pagos",
      rute: "/:id/payments",
    },
    {
      title: "Mis propiedades",
      rute: "/:id/properties",
    },
  ];

  return (
    <div>
      <ViewBase
        filter={<MenuPanelList list={list} routeAction="/user" />}
        content={<UserBody />}
      />
    </div>
  );
}

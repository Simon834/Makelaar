import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import AdminBody from "../../Components/AdminBody/AdminBody";

export default function AdminPanel() {
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!userInfo.user?.isAdmin) {
      history.push("/");
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

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
                title: "Nueva propiedad",
                rute: "/newproperty"
            },
            {
                title: "Crear admin",
                rute: "/newadmin"
            },git add
            {
                title: "Salir",
                rute: "/logout",
            }
        ]

  return (
    <div>
      <ViewBase
        filters={
          <MenuPanelList
            list={list}
            routeAction={`/admin/${userInfo.user?.id}`}
          />
        }
        content={<AdminBody />}
      />
    </div>
  );
}

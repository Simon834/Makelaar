import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import AdminBody from "../../Components/AdminBody/AdminBody";
import LateralMenu from "../../Components/LateralMenu/LateralMenu";
import { menuList } from "./constant";
import TopBar from "../../Components/TopBar/TopBar";

export default function AdminPanel() {
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!userInfo.user?.isAdmin) {
      history.push("/");
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    // <div>
    //   <ViewBase
    //     filters={
    //       <MenuPanelList
    //         list={list}
    //         routeAction={`/admin/${userInfo.user?.id}`}
    //       />
    //     }
    //     content={<AdminBody />}
    //   />
    // </div>

      <div>
         <LateralMenu
          list={menuList}
          routeAction={`/admin/${userInfo.user?.id}`}
        />
      </div>

  );
}

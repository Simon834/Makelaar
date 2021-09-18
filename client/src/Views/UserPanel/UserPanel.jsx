import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import ViewBase from "../ViewBase/view-base";
import MenuPanelList from "../../Components/MenuPanelList/MenuPanelList";
import UserBody from "../../Components/UserBody/UserBody";
import LateralMenu from "../../Components/LateralMenu/LateralMenu";
import { menuList } from "./constant";

export default function UserPanel() {
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!userInfo.user || userInfo.user.isAdmin) {
      history.push("/");
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
          <LateralMenu
          list={menuList}
          routeAction={`/user/${userInfo.user?.id}`}
          body={<UserBody id={userInfo.user?.id}/>}
        />
    </div>
  );
}

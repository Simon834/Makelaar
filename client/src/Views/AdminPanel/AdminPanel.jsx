import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import AdminBody from "../../Components/AdminBody/AdminBody";
import LateralMenu from "../../Components/LateralMenu/LateralMenu";
import { menuList } from "./constant";

export default function AdminPanel() {
  const { userInfo } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!userInfo.user?.isAdmin) {
      history.push("/");
    }
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <LateralMenu
        list={menuList}
        routeAction={`/admin/${userInfo.user?.id}`}
        body={<AdminBody />}
      />
    </div>
  );
}

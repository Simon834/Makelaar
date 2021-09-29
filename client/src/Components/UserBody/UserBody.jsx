import React, { useEffect, useState } from "react";
import { Route } from "react-router";

import UserDetail from "../UserDetail/UserDetail";
import Logout from "../Logout/Logout";
import TableList from "../TableList/TableList";
import { getUserByIdApi } from "../../Functions/api/users";
import EditContractForm from "../FormContractEdit/FormContractEdit";
import { userConstant } from "./constant";

export default function UserBody({ id }) {
  const [userInfo, setuserInfo] = useState({});
  const [update, setUpdate] = useState(true);

  const { columnsContratList, contractReference } = userConstant();

  useEffect(() => {
    getUserInfo(id);

    return () => {
      setuserInfo({});
    }; // eslint-disable-next-line
  }, [update]);

  async function getUserInfo(id) {
    const data = await getUserByIdApi(id);
    setuserInfo(data);
  }

  function forceUpdate() {
    setUpdate(!update);
  }

  return (
    <div>
      <Route path="/user/:id/data">
        <UserDetail />
      </Route>
      <Route path="/user/:id/contrat">
        <TableList
          columns={columnsContratList}
          rows={userInfo.Contracts || []}
          user={true}
          reference={contractReference}
        />
      </Route>
      <Route path="/user/:id/logout">
        <Logout />
      </Route>
      <Route path="/user/:id/editcontract/:idcont">
        <EditContractForm
          user={true}
          forceUpdate={forceUpdate}
          update={update}
        />
      </Route>
    </div>
  );
}

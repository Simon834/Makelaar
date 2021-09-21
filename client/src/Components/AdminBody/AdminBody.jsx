import React, { useState, useEffect } from "react";
import { Route, useParams, useLocation } from "react-router";
import { useHistory } from "react-router";

import Dashboard from "../Dashboard/Dashboard";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import NewContractForm from "../FormContract/FormContract";
import EditContractForm from "../FormContractEdit/FormContractEdit";
import PropertyInfo from "../PropertyInfo/PropertyInfo";
import TableList from "../TableList/TableList";
import UserDetail from "../UserDetail/UserDetail";
import Logout from "../Logout/Logout";
import FormProperty from "../FormProperty/FormProperty";
import UserInfo from "../UserInfo/UserInfo";
import NewPayment from "../NewPayment/NewPayment";

import { getAllUserApi } from "../../Functions/api/users";
import { allProperties } from "../../Functions/api/property";
import { getAllContract } from "../../Functions/api/contract";
import { getAllPayment } from "../../Functions/api/payments";

import { adminConstant } from "./constant";

export default function AdminBody() {
  const [userList, setUserList] = useState([]);
  const [prpList, setPropList] = useState([]);
  const [payList, setPayList] = useState([]);
  const [prpDisp, setPrpDisp] = useState([]);
  const [contList, setContList] = useState([]);
  const [contActiveList, setContActiveList] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log("LOCATION", location)

  const {
    columnsUserList,
    columnsPropertyList,
    columnsContratList,
    userReference,
    propertyReference,
    contractReference,
    columnsPaymentList,
    paymentReference,
  } = adminConstant(id, history);
  const [load, setLoad] = useState(true);

  async function get() {
    const allUsersApi = await getAllUserApi();
    setUserList(allUsersApi);
    const allPropsApi = await allProperties();
    setPropList(allPropsApi);
    setPrpDisp(
      allPropsApi.filter(
        (p) =>
          p.status === "activo" &&
          !p.Contracts.some((e) => e.status === "activo")
      )
    );
    const allContrApi = await getAllContract();
    console.log("allContrApi",allContrApi)
    setContList(allContrApi);
    setContActiveList(allContrApi.filter((c) => c.status === "activo"));
    const payments = await getAllPayment();
    setPayList(payments);
  }

  useEffect(
    () => {
      get();
    }, // eslint-disable-next-line
    [load]
  );

  function updateList() {
    setLoad(!load);
  }

  return (
    <div>
      <Route path="/admin/:id/dashboard">
        <Dashboard
          inmNum={prpDisp.length}
          userNum={userList.length}
          contNum={contActiveList.length}
          inmTot={prpList.length}
          userList={userList}
          prpList={prpList}
          contList={contList}
          payList={payList}
        />
      </Route>
      <Route path="/admin/:id/data">
        <UserDetail />
      </Route>

      <Route path="/admin/:id/users">
        <h2>Usuarios</h2>
        <TableList
          columns={columnsUserList}
          rows={userList}
          reference={userReference}
        />
      </Route>
      <Route path="/admin/:id/property">
        <h2>Propiedades</h2>
        <TableList
          columns={columnsPropertyList}
          rows={prpList}
          reference={propertyReference}
        />
      </Route>
      <Route path="/admin/:id/contrat">
        <h2>Contratos</h2>
        <TableList
          columns={columnsContratList}
          rows={contList}
          reference={contractReference}
        />
      </Route>

      <Route path="/admin/:id/payment">
        <h2>Pagos</h2>
        <NewPayment contList={contList} update={updateList} />
        <TableList
          columns={columnsPaymentList}
          rows={payList}
          reference={paymentReference}
        />
      </Route>

      <Route path="/admin/:id/newadmin">
        <UserRegistrationForm isAdmin={true} update={updateList} />
      </Route>
      <Route path="/admin/:id/newproperty">
        <FormProperty update={updateList} />
      </Route>
      <Route path="/admin/:id/newcontract">
        <NewContractForm update={updateList} />
      </Route>

      <Route path="/admin/:id/editcontract/:idcont">
        <EditContractForm update={updateList} />
      </Route>

      <Route path="/admin/:id/editproperty/:idprop">
        <PropertyInfo update={updateList} />
      </Route>

      <Route path="/admin/:id/user/:iduser">
        <UserInfo userInfo={userList} update={updateList} />
      </Route>

      <Route path="/admin/:id/logout">
        <Logout />
      </Route>
    </div>
  );
}

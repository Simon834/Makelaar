import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import TableList from "../TableList/TableList";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import { getAllUserApi } from "../../Functions/api/users";
import property from "../../inmuebles.json";
import UserDetail from "../UserDetail/UserDetail";
import Logout from "../Logout/Logout";
import FormProperty from "../FormProperty/FormProperty";
import UploadFile from "../Upload/UploadFile";
import NewContractForm from "../FormContract/FormContract";
import EditContractForm from "../FormContractEdit/FormContractEdit";
import { allProperties } from "../../Functions/api/property";
import { getAllContract } from "../../Functions/api/contract";
import EditProperty from "../EditProperty/EditProperty";

const columnsUserList = [
  { field: "name", headerName: "Nombre", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Telefono", width: 150 },
  { field: "whatsapp", headerName: "WhatsApp", width: 150 },
  { field: "isAdmin", headerName: "Admin", width: 150 },
  { field: "contract", headerName: "Contratos", width: 150 },
];

const columnsPropertyList = [
  { field: "name", headerName: "Titulo", width: 350 },
  { field: "transaction", headerName: "Relación", width: 150 },
  { field: "address", headerName: "Dirección", width: 150 },
  { field: "type", headerName: "Tipo", width: 150 },
  { field: "price", headerName: "Precio", width: 150 },
  { field: "premium", headerName: "Destacado", width: 150 },
  { field: "contract", headerName: "Contratos", width: 150 },
  { field: "status", headerName: "Estado", width: 150 },
];

const columnsContratList = [
  { field: "name", headerName: "Titulo", width: 150 },
  { field: "UserId", headerName: "Usuario", width: 150 },
  { field: "PropId", headerName: "Propiedad", width: 150 },
  { field: "startDate", headerName: "Inicio", width: 150 },
  { field: "endDate", headerName: "Fin", width: 150 },
  { field: "amount", headerName: "Monto", width: 150 },
  { field: "paymentDate", headerName: "Pago", width: 150 },
];

export default function AdminBody() {
  const [userList, setUserList] = useState([]);
  const [prpList, setPropList] = useState([]);
  const [contList, setContList] = useState([]);
  const [load, setLoad]=useState(true)

  async function get() {
    const allUsersApi = await getAllUserApi();
    setUserList(allUsersApi);
    const allPropsApi = await allProperties();
    setPropList(allPropsApi);
    const allContrApi = await getAllContract();
    setContList(allContrApi);
  }

  useEffect(
    () => {
      get();
    }, // eslint-disable-next-line
    [load]
  );
  
function updateList(){
  setLoad(!load)
}

  return (
    <div>
      <Route path="/admin/:id/data">
        <UserDetail />
      </Route>

      <Route path="/admin/:id/users">
        <TableList columns={columnsUserList} rows={userList} />
      </Route>
      <Route path="/admin/:id/property">
        <TableList columns={columnsPropertyList} rows={prpList} />
      </Route>
      <Route path="/admin/:id/contrat">
        <TableList columns={columnsContratList} rows={contList} />
      </Route>

      <Route path="/admin/:id/newadmin">
        <UserRegistrationForm isAdmin={true} update={updateList}/>
      </Route>
      <Route path="/admin/:id/newproperty">
        <FormProperty update={updateList}/>
      </Route>
      <Route path="/admin/:id/newcontract">
        <NewContractForm update={updateList}/>
      </Route>

      <Route path="/admin/:id/editcontract/:idcont">
        <EditContractForm update={updateList}/>
      </Route>

      <Route path="/admin/:id/editproperty/:idprop">
        <EditProperty update={updateList}/>
      </Route>
      
      <Route path="/admin/:id/logout">
        <Logout />
      </Route>
    </div>
  );
}

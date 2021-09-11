import React,{useEffect, useState} from "react";
import { Route } from "react-router";


import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserDetail from "../UserDetail/UserDetail";
import Cards from "../Cards/Cards";
import Logout from "../Logout/Logout";
import TableList from "../TableList/TableList";
import { getUserByIdApi } from "../../Functions/api/users";

export default function UserBody({id}) {

  const [userInfo, setuserInfo]=useState({})


  console.log("id", id)

  useEffect(() => {
    getUserInfo(id)
    return () => {
      setuserInfo({})
    }
  }, [])

  async function getUserInfo(id){
    const data = await getUserByIdApi(id)
    console.log(data)
    setuserInfo(data)

  }

  const columnsContratList = [
    { field: 'name', headerName: 'Titulo', width: 350 },
    { field: 'PropId', headerName: 'Propiedad', width: 150 },
    { field: 'startDate', headerName: 'Inicio', width: 150 },
    { field: 'endDate', headerName: 'Fin', width: 150 },
    { field: 'amount', headerName: 'Monto', width: 150 },
    { field: 'paymentDate', headerName: 'Pago', width: 150 },
    { field: 'contract', headerName: 'Contrato', width: 150 },
  ]

  return (
    <div>
      <Route path="/user/:id/data">
        <UserDetail />
      </Route>
      <Route path="/user/:id/contrat">
          <TableList columns={columnsContratList} rows={userInfo.Contracts}/>
      </Route>
      <Route path="/user/:id/logout">
        <Logout/>
      </Route>
    </div>
  );
}

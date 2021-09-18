import React,{useEffect, useState} from "react";
import { Route } from "react-router";


import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserDetail from "../UserDetail/UserDetail";
import Cards from "../Cards/Cards";
import Logout from "../Logout/Logout";
import TableList from "../TableList/TableList";
import { getUserByIdApi } from "../../Functions/api/users";
import EditContractForm from "../FormContractEdit/FormContractEdit";
import { userConstant } from "./constant";

export default function UserBody({id}) {

  const [userInfo, setuserInfo]=useState({})

  const {
      columnsContratList,
    contractReference,
  } = userConstant();


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

  return (
    <div>
      <Route path="/user/:id/data">
        <UserDetail />
      </Route>
      <Route path="/user/:id/contrat">
          <TableList columns={columnsContratList} rows={userInfo.Contracts} user={true} reference={contractReference}/>
      </Route>
      <Route path="/user/:id/logout">
        <Logout/>
      </Route>
      <Route path="/user/:id/editcontract/:idcont">
        <EditContractForm user={true}/>
      </Route>
    </div>
  );
}

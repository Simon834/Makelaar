import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function getAllUserApi() {
  try {
    const allUsers = await axios.get(`${BACK_SERVER}/users/AllUsers`);
    return allUsers.data;
  } catch (err) {
    
    throw err;
  }
}

export async function registerUser(user) {
  console.log("register")
  try {
    const response = await axios.post(`${BACK_SERVER}/users/signup`, user)
     return response.data;
  } catch(err) {
    return err.response.status;
  }
}

export async function getUserByIdApi(id) {
    try {
        const userbyid = await axios.get(`${BACK_SERVER}/users/${id}`)
        return userbyid.data
    } catch (err) {
        throw err
    }
}

export async function loguinUserApi(email, password) {
  try {
    const data = await axios.post(`${BACK_SERVER}/users/logIn`, {email, password})
    return data

  } catch (err) {
    console.log("error",err)  
    throw err
  }
}


export async function updateUser(user) {
  try {
    const response = await axios.put(`${BACK_SERVER}/users/updateUser`, user);
    return response.data;
  } catch (err) {
    throw err;
  }
}

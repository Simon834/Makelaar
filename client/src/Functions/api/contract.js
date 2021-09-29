import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function addContract(contract) {
  try {
    const response = await axios.post(
      `${BACK_SERVER}/contract/addContract`,
      contract
    );
    return response.data;
  } catch (err) {
    return err.response.status;
  }
}

export async function getAllContract() {
  try {
    const response = await axios.get(`${BACK_SERVER}/contract/getContracts`);
    return response.data;
  } catch (err) {
    return err.response.status;
  }
}

export async function getContractById(id) {
  try {
    const response = await axios.get(`${BACK_SERVER}/contract/${id}`);
    return response.data;
  } catch (err) {
    return err.response.status;
  }
}

export async function editContract(editedContract, id) {
  try {
    const response = await axios.put(
      `${BACK_SERVER}/contract/edit/${id}`,
      editedContract
    );
    return response.data;
  } catch (err) {
    return err.response.status;
  }
}

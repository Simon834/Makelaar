import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function addContract(contract) {
  console.log("new contract");
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

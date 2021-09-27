import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function linkPayment(id, title, description, price) {
  try {
    const dataInfo = { contractId: id, title, description, price };

    let response = await axios.post(
      `${BACK_SERVER}/property/payment`,
      dataInfo
    );
    response = response.data;

    window.open(response, "_blank");
    return response;
  } catch (err) {
    return err;
  }
}

export async function getAllPayment() {
  try {
    let response = await axios.get(`${BACK_SERVER}/property/allPayments`);
    response = response.data;
    return response;
  } catch (err) {
    return err;
  }
}

export async function setPayment(data) {
  try {
    let response = await axios.post(`${BACK_SERVER}/property/addpayment`, data);
    response = response.data;
    return response;
  } catch (err) {
    return err;
  }
}

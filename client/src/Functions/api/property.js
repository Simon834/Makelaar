import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export async function addNewProperty(property){
    try{
        const newProperty = await axios.post(`${BACK_SERVER}/property/addProperty`, property);
        return newProperty.data;

    }catch(err){
        return err.newProperty.status;
    }
}
export async function allProperties() {
  try {
    const allProperties = await axios.get(
      `${BACK_SERVER}/property/allProperties`
    );
    return allProperties.data;
  } catch (err) {
    throw err;
  }
}

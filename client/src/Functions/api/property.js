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
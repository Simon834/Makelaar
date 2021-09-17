import axios from "axios";
require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";


  export async function linkPayment(id,title,description,price){
    try{
        const dataInfo= {contractId: id, title,description, price}

        let response = await axios.post( `${BACK_SERVER}/property/payment`, dataInfo)
        response = response.data
        console.log(response, "PETICIONNN")
        window.open(response, "_blank")
        return response


    }catch(err){
        console.log(err);
        return err;
    }
  }
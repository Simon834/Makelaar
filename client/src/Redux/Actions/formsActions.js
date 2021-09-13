import axios from "axios";
import { FORGOT_PASSWORD } from "../Constants/constants";
import Swal from "sweetalert2";

require("dotenv").config();
const BACK_SERVER =
  process.env.REACT_APP_BACK_SERVER || "http://localhost:3010";

export function forgot_password(email) {
    return async function (dispatch) {
    try {
        const peticion = await axios.put(
        `${BACK_SERVER}/users/resetPassword`,
        email
      );
      const data = await peticion.data;
      dispatch({
        type: FORGOT_PASSWORD,
        payload: data,
      });
    } catch (err) {
         Swal.fire({
           icon: "error",
           title: "Lo sentimos!",
           text: "Email no registrado",
           customClass: {
             container: "my-swal",
           },
         });
    }
  };
}

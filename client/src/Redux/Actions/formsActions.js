import axios from "axios";
import { FORGOT_PASSWORD } from "../Constants/constants";
import Swal from "sweetalert2";

export function forgot_password(email) {
    return async function (dispatch) {
    try {
        const peticion = await axios.put(
        "http://localhost:3010/users/resetPassword",
        email
      );
      const data = await peticion.data;
      dispatch({
        type: FORGOT_PASSWORD,
        payload: data,
      });
    } catch (err) {
      Swal.fire('Lo sentimos!', 'Email no registrado', 'error')
    }
  };
}

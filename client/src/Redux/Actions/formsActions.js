import axios from "axios";
import { FORGOT_PASSWORD } from "../Constants/constants";

export function forgot_password({ email }) {
  return async function (dispatch) {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const peticion = await axios.put(
        "http://localhost:3010/users/resetPassword",
        email,
        config
      );
      const data = await peticion.data;
      dispatch({
        type: FORGOT_PASSWORD,
        payload: data,
      });
    } catch (err) {
      alert("Email no registrado");
    }
  };
}

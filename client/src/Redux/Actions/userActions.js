import { LOGIN_SUCCES, LOGOUT } from "../Constants/constants";

import { loguinUserApi } from "../../Functions/api/users";

import Swal from "sweetalert2";

//recibimos email y token del form
export function userLogIn({ email, password }) {
  return async function (dispatch) {
    try {

      const data = await loguinUserApi(email, password);

      switch (data.request.status) {
        case 200:
          dispatch({
            type: LOGIN_SUCCES,
            payload: data.data,
          });

          //guardamos en localStorage
          localStorage.setItem("userInfo", JSON.stringify(data.data));
          break;

        case 401:
          Swal.fire({
            icon: "error",
            title: "Oh no!",
            text: "Usuario o contraseña incorrectos",
            confirmButtonColor: "#4c3c90",
            customClass: {
              container: "my-swal",
            },
          });

          break;

        case 500:
          Swal.fire({
            icon: "error",
            title: "Oh no!",
            text: "Error en el servidor",
            confirmButtonColor: "#4c3c90",
            customClass: {
              container: "my-swal",
            },
          });
          break;
        default:
          break;
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oh no!",
        text: "Usuario o contraseña incorrectos",
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });
    }
  };
}

export function logOutUser() {
  return async function (dispatch) {
    localStorage.removeItem("userInfo");
    // localStorage.removeItem("persist:root"); //libreria de redux que mantiene el estado en localstorage, se importa en el store
    return dispatch({ type: LOGOUT });
  };
}

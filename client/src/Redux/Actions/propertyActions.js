import { allProperties } from "../../Functions/api/property";
import { ALL_PROPERTIES } from "../Constants/constants";
import Swal from "sweetalert2";
export function getAllProperties() {
  return async function (dispatch) {
    try {
      const data = await allProperties();
      dispatch({
        type: ALL_PROPERTIES,
        payload: data,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos..!",
        text: `No se pudieron cargar las propiedades`,
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });      
    }
  };
}

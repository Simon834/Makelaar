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
      Swal.fire("Lo sentimos!", "No se pudieron cargar las propiedades", "error");
    }
  };
}

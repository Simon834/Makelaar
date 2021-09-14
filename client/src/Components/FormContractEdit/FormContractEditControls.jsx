import { useState } from "react";
import { editContract } from "../../Functions/api/contract";
import Swal from "sweetalert2";

const initialFormValues = {
  name: "",
  startDate: "",
  endDate: "",
  amount: "",
  paymentDate: "",
  file: [],
  comments: "",
  UserId: "",
  PropertyId: "",
};

export function UseFormControls(props) {
  const [contract, setContract] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [selectValues, setSelectValues] = useState({});

  const validate = (fieldValues = contract) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Este campo es requerido";
    if (fieldValues.name) {
      temp.name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
        fieldValues.name
      )
        ? ""
        : "El titulo no es valido";
    }

    if ("startDate" in fieldValues) {
      temp.startDate = fieldValues.startDate ? "" : "Este campo es requerido";
    }
    if ("endDate" in fieldValues) {
      temp.endDate = fieldValues.endDate ? "" : "Este campo es requerido";
    }

    if (fieldValues.amount) {
      temp.amount = fieldValues.amount ? "" : "Este campo es requerido";
    }
    if ("paymentDate" in fieldValues) {
      temp.paymentDate = fieldValues.paymentDate
        ? ""
        : "Este campo es requerido";
    }
    if ("UserId" in fieldValues) {
      temp.UserId = fieldValues.UserId ? "" : "Este campo es requerido";
    }
    if ("PropertyId" in fieldValues) {
      temp.PropertyId = fieldValues.PropertyId ? "" : "Este campo es requerido";
    }

    setErrors({
      ...temp,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract({
      ...contract,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const handleSelect = (e) => {
    setSelectValues({
      ...selectValues,
      [e.target.name]: e.target.value,
    });
  };

  const formIsValid = (fieldValues = contract) => {
    const isValid =
      fieldValues.name &&
      fieldValues.amount &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      try {
        await editContract(contract, contract.id);
            Swal.fire({
              icon: "success",
              title: "Perfecto..!",
              text: "Tu contrato ha sido modificado con exito",
                confirmButtonColor: "#4c3c90",
              customClass: {
                container: "my-swal",
              },
            });
      } catch (err) {
        console.log(err);
            Swal.fire({
              icon: "success",
              title: "Ups..!",
              text: "Tu contrato no ha podido ser modificado, intenta de nuevo",
              customClass: {
                container: "my-swal",
              },
        });
      }
    }
  };

  function setFile(files) {
    setContract({
      ...contract,
      file: files,
    });
  }

  return {
    contract,
    errors,
    handleChange,
    handleSubmit,
    formIsValid,
    handleSelect,
    selectValues,
    setContract,
    setFile,
  };
}

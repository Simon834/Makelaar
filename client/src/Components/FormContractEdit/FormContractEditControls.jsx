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
  status: "modificado",
  email: "",
};

export function UseFormControls(update) {
  const [contract, setContract] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [selectValues, setSelectValues] = useState({});
  const [email, setEmail] = useState("");

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
      email: email,
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
    setContract({
      ...contract,
      status: "modificado",
    });
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      try {
        await editContract(contract, contract.id);
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Los cambios han sido enviados al usuario y están a la espera de ser aprobados.",
          confirmButtonColor: "#4c3c90",
          customClass: {
            container: "my-swal",
          },
        });
        update();
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Ups..!",
          text: "Tu contrato no ha podido ser modificado, intenta de nuevo por favor",
          confirmButtonColor: "#4c3c90",
          customClass: {
            container: "my-swal",
          },
        });
      }
    }
  };

  const handleClickConfirm = async (e) => {
    e.preventDefault();
    setContract({
      ...contract,
      status: "activo",
    });
    try {
      await editContract(contract, contract.id);
      Swal.fire({
        icon: "success",
        title: "Perfecto!",
        text: "El contrato ha sido aprobado!",
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });
      update();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickCancel = async (e) => {
    e.preventDefault();
    setContract({
      ...contract,
      status: "rechazado",
    });
    try {
      await editContract(contract, contract.id);
      Swal.fire({
        icon: "error",
        title: "Entendido!",
        text: "El contrato ha sido rechazado. Nos comunicaremos con usted a la brevedad!",
        confirmButtonColor: "#4c3c90",
        customClass: {
          container: "my-swal",
        },
      });
      update();
    } catch (err) {
      console.log(err);
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
    setEmail,
    handleClickConfirm,
    handleClickCancel,
  };
}

import { useState } from "react";
import { addContract } from "../../Functions/api/contract";

const initialFormValues = {
  name: "",
  startDate: "",
  endDate: "",
  amount: "",
  paymentDate: "",
  file: "",
  comments: "",
  UserId: "",
  PropertyId: "",
};

export function UseFormControls() {
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
      fieldValues.date &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      try {
        const addedContract = await addContract(contract);
        console.log(addedContract);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return {
    contract,
    errors,
    handleChange,
    handleSubmit,
    formIsValid,
    handleSelect,
    selectValues,
    setContract,
  };
}

import { useState } from "react";
import { registerUser } from "../../Functions/api/users";

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  password: "",
  isAdmin: "",
};

export const useFormControls = (isAdmin) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    password: "",
    isAdmin,
  });
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = user) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Este campo es requerido";
    if (fieldValues.name) {
      temp.name = /^[a-z ,.'-]+$/.test(fieldValues.name)
        ? ""
        : "El nombre no es valido";
    }

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "Este campo es requerido";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "El email no es valido";
    }

    if (fieldValues.phone) {
      temp.phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
        fieldValues.phone
      )
        ? ""
        : "Debe ser un telefono valido";
    }
    if ("whatsapp" in fieldValues) {
      temp.whatsapp = fieldValues.whatsapp ? "" : "Este campo es requerido";
      if (fieldValues.whatsapp)
        temp.whastapp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(
          fieldValues.whatsapp
        )
          ? ""
          : "Debe ser un telefono valido";
    }
    if ("password" in fieldValues) {
      temp.password = fieldValues.password ? "" : "Este campo es requerido";
      if (fieldValues.password)
        temp.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
          fieldValues.password
        )
          ? ""
          : "La contraseña debe tener minimo 8 caracteres, 1 número, y 1 mayúscula";
    }

    setErrors({
      ...temp,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    validate({ [name]: value });
    //console.log(user);
  };

  const formIsValid = (fieldValues = user) => {
    const isValid =
      fieldValues.name &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      const registeredUser = await registerUser(user);
      //console.log(registeredUser);
      alert(
        `Hola ${registeredUser.user.name}, en tu email: ${registeredUser.user.email}, encontraras la confirmacion de creacion de tu cuenta`
      );
    }
  };

  return {
    user,
    errors,
    handleChange,
    handleSubmit,
    formIsValid,
  };
};

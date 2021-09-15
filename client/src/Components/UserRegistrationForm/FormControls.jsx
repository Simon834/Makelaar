import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../Functions/api/users";
import { userLogIn } from "../../Redux/Actions/userActions";
import Swal from "sweetalert2";

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  password: "",
  isAdmin: "",
};

export const useFormControls = (isAdmin, update) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    whatsapp: "",
    password: "",
    isAdmin:false,
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const validate = (fieldValues = user) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Este campo es requerido";
    if (fieldValues.name) {
      temp.name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
        fieldValues.name
      )
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
    if ("confirmEmail" in fieldValues) {
      temp.confirmEmail = fieldValues.confirmEmail ? "" : "Confirma tu email";
      if (fieldValues.confirmEmail) {
        temp.confirmEmail =
          fieldValues.confirmEmail === user.email
            ? ""
            : "Los email no coinciden";
      }
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
    if ("confirmPassword" in fieldValues) {
      temp.confirmPassword = fieldValues.confirmPassword
        ? ""
        : "Confirma tu contraseña";
      if (fieldValues.confirmPassword) {
        temp.confirmPassword =
          fieldValues.confirmPassword === user.password
            ? ""
            : "Las contraseñas no coinciden";
      }
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
      try {
        const registeredUser = await registerUser(user);

        if (registeredUser.user) {
          if (user.isAdmin) {
            Swal.fire({
              icon: "success",
              title: "Listo..!",
              text: `El usuario: ${registeredUser.user.email}, se creo correctamente con los permisos de Admin`,
              confirmButtonColor: "#4c3c90",
              customClass: {
                container: "my-swal",
              },
            });
            setUser(initialFormValues);
            update()
          } else {
            dispatch(
              userLogIn({
                email: registeredUser.user.email,
                password: user.password,
              })
            );

            Swal.fire({
              icon: "success",
              title: "Hola..!",
              text: `${registeredUser.user.name}, en tu email: ${registeredUser.user.email}, encontraras la confirmacion de creacion de tu cuenta`,
              confirmButtonColor: "#4c3c90",
              customClass: {
                container: "my-swal",
              },
            });
            setUser(initialFormValues);
          }
        } else {
          Swal.fire({
            icon: "warning",
            title: "Ups..!",
            text: `El email: ${user.email} ya se encuentra registrado, si no recuerda la contraseña intente recuperarla`,
            confirmButtonColor: "#4c3c90",
            customClass: {
              container: "my-swal",
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSwitch = (e) => {
    
    setUser({
      ...user,
      isAdmin: !user.isAdmin,
    });
   
  };



  return {
    user,
    errors,
    handleChange,
    handleSubmit,
    formIsValid,
    handleSwitch
  };
};

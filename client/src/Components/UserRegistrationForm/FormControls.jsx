import { useState } from "react";

const PostContactForm = async (values, successCallback, errorCallback) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  password: "",
  isAdmin: "",
};

export const useFormControls = () => {
  const [user, setUser] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = user) => {
    let temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
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
  };

  const handleSuccess = () => {
    setUser({
      ...initialFormValues,
      formSubmitted: true,
      success: true,
    });
  };

  const handleError = () => {
    setUser({
      ...initialFormValues,
      formSubmitted: true,
      success: false,
    });
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
      await PostContactForm(user, handleSuccess, handleError);
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { userLogIn } from "../../Redux/Actions/userActions";
import { Link } from "react-router-dom";


export function validate(input) {
    let errors = {};
    if (!input.email) {
      errors.email = "Se Requiere un Email";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = "Email inválido";
    }
    if (!input.password) {
      errors.password = "Se requiere una contraseña";
    }
  
    return errors;
  }
  

export default function FormLogin() {
  const dispatch = useDispatch();



  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  const [errors, setErrors] = useState({});


  function handleChange(e) {
    e.persist();
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.id]: e.target.value,
      })
    );
  };


  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(userLogIn(input));
    // setLoading(true);
  }

  return (
    <div>
      <form action="" onSubmit={e => handleSubmit(e)} >
        <div>
          <label htmlFor="email"></label>
          <input
            placeholder="email@makelaar.com"
            type="email"
            id="email"
            value={input.email}
            onChange={e => handleChange(e)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            value={input.password}
            onChange={e => handleChange(e)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          {input.password ? (
            <button type="submit" >
              Login
            </button>
          ) : (
            <button type="button" >
              Login
            </button>
          )}
        </div>

        <Link to="/resetpassword"> I forgot the password</Link>


      </form>

    </div>
  )

}
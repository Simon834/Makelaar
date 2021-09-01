import axios from "axios";

import { LOGIN,LOGIN_ERROR,LOGIN_SUCCES,LOGOUT, SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCES } from "../Constants/constants";

//recibimos email y token del form
export function userLogIn({email, password}){
 return async function(dispatch){
     try{
         dispatch({
             type: LOGIN
         })

         const data = await axios.post(`http://localhost:3010/api/logIn`, {email, password})

         switch(data.request.status){
             case 200:
                 dispatch({
                     type: LOGIN_SUCCESS,
                     payload: data.data
                 })
            
                 //guardamos en localStorage
                 localStorage.setItem('userInfo', JSON.stringify(data))
                 break;
            
                case 401:
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: data.error
                    });
                    alert("Usuario o contraseña incorrectos")
                    break;

                case 500:
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: data.error
                    });
                    alert("Error en el servidor");
                    break;
                    default: break;
         }

     }catch(err){
         alert("Usuario o Contraseña incorrectos")
         dispatch({
             type: LOGIN_ERROR,
             payload: err
         })
     }
 }
}

//recibe por body nombre, email, pass
export function signUpUser(body){
    return async function(dispatch){
        try{dispatch({
            type: SIGN_UP,
        });
        const config = {
            headers: { "Content-Type": "application/json" }
        };

        //data es el user y token
        const {data} = await axios.post(`http://localhost:3010/api/signUp`, {body, config}
        );
        dispatch({
            type: SIGN_UP_SUCCES,
            payload:data
        });
        dispatch({
            type:LOGIN_SUCCES,
            payload:data
        });
        alert("Te registraste con Exito")
            
        }catch(err){
            alert("No se ha podido realizar el registro")
            dispatch({
                type: SIGN_UP_ERROR,
                payload:err
            })

        }

    }

}

export function logOutUser(){
    localStorage.removeItem('userInfo')
    // localStorage.removeItem("persist:root"); //libreria de redux que mantiene el estado en localstorage, se importa en el store
    return {
        dispatch({type:LOGOUT})
    }
}
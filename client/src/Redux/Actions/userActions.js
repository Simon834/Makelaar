import axios from "axios";

import { LOGIN,LOGIN_ERROR,LOGIN_SUCCES,LOGOUT, SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCES } from "../Constants/constants";

import { loguinUserApi } from "../../Functions/api/users";

import Swal from "sweetalert2";

//recibimos email y token del form
export function userLogIn({email, password}){
 return async function(dispatch){
     try{
        //  dispatch({
        //      type: LOGIN
        //  })

         const data = await loguinUserApi(email, password)

         switch(data.request.status){
             case 200:
                 dispatch({
                     type: LOGIN_SUCCES,
                     payload: data.data
                 })
            
                 //guardamos en localStorage
                 localStorage.setItem('userInfo', JSON.stringify(data.data))
                 break;
            
                case 401:
                    // dispatch({
                    //     type: LOGIN_ERROR,
                    //     payload: data.error
                    // });
                     Swal.fire({
                       icon: "error",
                       title: "Oh no!",
                       text: "Usuario o contraseña incorrectos",
                    //    width: 1800 !important,
                    //    customClass: {
                    //      container: "my-swal",
                    //    },
                     });
                    break;

                case 500:
                    // dispatch({
                    //     type: LOGIN_ERROR,
                    //     payload: data.error
                    // });
                    Swal.fire("Oh no!", "Error en el servidor", "error");
                    break;
                    default: break;
         }

     }catch(err){
                    Swal.fire({
                      icon: "error",
                      title: "Oh no!",
                      text: "Usuario o contraseña incorrectos",
                      customClass: {
                        container: "my-swal",
                      },
                    });
        //  dispatch({
        //      type: LOGIN_ERROR,
        //      payload: err
        //  })
     }
 }
}

// //recibe por body nombre, email, pass
// export function signUpUser(body){
//     return async function(dispatch){
//         try{dispatch({
//             type: SIGN_UP,
//         });
//         const config = {
//             headers: { "Content-Type": "application/json" }
//         };

//         //data es el user y token
//         const {data} = await axios.post(`http://localhost:3010/api/signUp`, {body, config}
//         );
//         dispatch({
//             type: SIGN_UP_SUCCES,
//             payload:data
//         });
//         dispatch({
//             type:LOGIN_SUCCES,
//             payload:data
//         });
//         alert("Te registraste con Exito")
            
//         }catch(err){
//             alert("No se ha podido realizar el registro")
//             dispatch({
//                 type: SIGN_UP_ERROR,
//                 payload:err
//             })

//         }

//     }

// }

export function logOutUser(){
   return async function(dispatch){
    localStorage.removeItem('userInfo')
    // localStorage.removeItem("persist:root"); //libreria de redux que mantiene el estado en localstorage, se importa en el store
    return (
        dispatch({type:LOGOUT})
    )
}}
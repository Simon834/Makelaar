import io from 'socket.io-client';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ChatComponent from './ChatComponent';
require("dotenv").config();

//usuario logeado

const BACK_SERVER =
   "http://localhost:3010";

export let socket = io(BACK_SERVER);

export default function ChatSocket(){
    const [name, setName] = useState("");
    const [register, setRegister]= useState(false);

    // const { userInfo } = useSelector((state) => state);
    // console.log(userInfo)
    // console.log("NAME", userInfo.user.name)
    const registrar = (e) => {
        e.preventDefault();
        if (name !== "") {
          setRegister(true);
        }
      };
    
      return (
        <div className="App">
          {!register && (
            <form onSubmit={registrar}>
              <label htmlFor="">Introduzca su nombre</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <button>Ir al chat</button>
            </form>
          )}
    
          {register && <ChatComponent name={name} />}
          
        </div>
      )
          }
    
    // function userLogIn(){
    //     if(userInfo.token){
    //         setRegister(true)
    //     }else{
    //         alert("ingrese su nombre")
    //     }
    // }

    // function userName(e){
    //     if(!userInfo){
    //        return setName(e.target.value)
    //     }
        
    //     else{
    //         setName(userInfo.user.name )
    //     }
    // }
    

//     return(
//         <div>
//             {
//                 !register && 
//             <form onSubmit={userLogIn}>
//             <label htmlFor="">Nombre</label>
//             <input value={name}  />
//             <button>Ir al Chat</button>
//              </form>
//             }

//             {
//                 register &&
//                 <ChatComponent name={name}/>
//             }
//              </div>
//     )
// }


// export default socket;
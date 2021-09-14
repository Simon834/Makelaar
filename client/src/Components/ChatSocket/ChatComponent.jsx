import React,{useState, useEffect, useRef}  from 'react';
import ChatSocket from './ChatSocket';
import {socket} from './ChatSocket';

export default function ChatComponent({name}){

    // const [msg, setMsg] = useState("");
    // const [allMsg, setAllMsg] = useState([]);
    const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

    // useEffect(()=>{
    //     socket.emit('conectado', name)
    // },[name]);

    useEffect(() => {
        socket.emit("conectado", name);
      }, [name]);

//     useEffect(()=>{
// socket.on('allMsg', msg=>{
//     setAllMsg([...allMsg, msg])
//     console.log("TODOS LOS MSG", allMsg)
// })
// return ()=>{socket.off()}
//     }, [allMsg])

//     function submit(e){
//         e.preventDefault();
//         socket.emit('msg', name, msg)
//     }
useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    //   console.log("MENSAJES", mensajes)
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", name, mensaje);
    console.log("MENSAJE ENVIADO", mensaje)
    setMensaje("");
     console.log("SE EJECUTO SUBMIT")
  };


    return(
        <div>
            <div>
                {/* {console.log(mensajes)} */}
                {mensajes?.map((e,i)=>{
                   return <div key={i}>
                    <div>{e.name}: {e.mensaje}</div>
                    
                  </div>
                })}
            </div>
            <form onSubmit={submit}>
        <label htmlFor="">Escriba su mensaje</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button>Enviar</button>
      </form>
        </div>
    )
}
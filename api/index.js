require("dotenv").config();
const cron = require('node-cron');
const { db } = require("./db");
const {updateContractCron} = require('./cron/contractCron')

const app = require("./app");
// const server = require("./app");
const PORT = process.env.PORT || 3010;

//socketIo conexion
const http = require("http");
const server = http.createServer(app);
// const socketio = require('socket.io');
let {createPreference} = require('../api/controllers/paymentsControllers')
 
const socketio = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
  // transports: ["websocket"],
});

// const io = socketio(server);

socketio.on("connection", (socket) => {
  //se ejecuta esta funcion cada vez q un usuario se conecta
  let name;

  socket.on("conectado", (nam) => {
    name = nam;

    socketio.emit("mensajes", {
      name: "Makelaar",
      mensaje: `Bienvenido/a ${name} responda:
      <br/>
      Con el numero 1 si esta interesado/a en Alquilar o Vender una propiedad
     <br/>
      Con el numero 2 si esta interesado/a en Comprar o Alquilar una propiedad
      <br/>
      Con el numero 3 si esta interesado/a en Realizar un pago mediante este medio
      <br/>
      Con el numero 4 si tiene otra consulta
      
      `,
    });

    socket.broadcast.emit("mensajes", {
      name: name,
      mensaje: `${name} ha entrado en la sala del chat`,
    });
  });

  socket.on("mensaje", (name, mensaje) => {
    socketio.emit("mensajes", { name, mensaje });
    mensaje = mensaje.toLowerCase();
    // console.log("MENSAJE RECIBIDO", mensaje)

    //Pasar a switch en caso que no sea valido  esta opcion no es valida, por favor selecciona una opcion valida
    //opcion 3 llamar a la funcion que tare el link de pago. 
   
    // switch(mensaje){
    //   case 1:{
    //    return  socketio.emit("mensajes",{
    //       name: "Makelaar",
    //       mensaje:` Podes encontrarnos en nuestras oficina en Donaciano del Campillo Nº 2195 o via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs, a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. Gracias`
    //     })
    //   };
    //   case 2:{
    //    return socketio.emit("mensajes",{
    //       name: "Makelaar",
    //       mensaje:`Podes encontrar todas las propiedades en Alquiler en venta en el siguiente link:<a http://localhost:3000/property/>`,
    //     })
    //   };
    //   case 3:{
    //     return socketio.emit("mensajes",{
    //       name: "Makelaar",
    //       mensaje:`Para realizar el pago podes dirigirte al siguiente link: LINKPAGO `,
    //       })
    //   };
    //   case 4:{
    //   return  socketio.emit("mensajes",{
    //       name: "Makelaar",
    //       mensaje:` Podes encontrarnos en:
    //       <br/>
    //        nuestras oficina en Donaciano del Campillo Nº 2195 o 
    //        <br/> 
    //        via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs, 
    //        <br/>
    //        a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o
    //        <br/>
    //         enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. 
    //         <br/>
    //         Gracias `,
    //       })
    //   };
    //   default:{
    //     return socketio.emit("mensajes",{
    //       name: "Makelaar",
    //       mensaje:`La opcion ingresada no es correcta, por favor responda:
    //       <br/>
    //       Con el numero 1 si esta interesado/a en Alquilar o Vender una propiedad
    //      <br/>
    //       Con el numero 2 si esta interesado/a en Comprar o Alquilar una propiedad
    //       <br/>
    //       Con el numero 3 si esta interesado/a en Realizar un pago mediante este medio
    //       <br/>
    //       Con el numero 4 si tiene otra consulta
    //          `,
    //       })
    //   }

//}

  if(mensaje.includes(1)){
     socketio.emit("mensajes",{
            name: "Makelaar",
            mensaje:`La opcion ingresada no es correcta, por favor responda:
            <br/>
            Con el numero 1 si esta interesado/a en Alquilar o Vender una propiedad
           <br/>
            Con el numero 2 si esta interesado/a en Comprar o Alquilar una propiedad
            <br/>
            Con el numero 3 si esta interesado/a en Realizar un pago mediante este medio
            <br/>
            Con el numero 4 si tiene otra consulta
               `
              })
            }
  else if(mensaje.includes(2)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:`Podes encontrar todas las propiedades en Alquiler en venta en el siguiente: <a href="http://localhost:3000/property"> link </a>  `,
    })
    
  }
  else if(mensaje.includes(3)){
    console.log("LINKKKKKKKKK", createPreference())
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:`Para realizar el pago podes dirigirte al siguiente: <a href=${createPreference()}> link </a> `,
      })
    
  }

  else if(mensaje.includes(4)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:` Podes encontrarnos en nuestras oficina en Donaciano del Campillo Nº 2195 o via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs, a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. Gracias `,
      })
    
  }else{
    socketio.emit("mensajes",{
                name: "Makelaar",
                mensaje:`La opcion ingresada no es correcta, por favor responda:
                <br/>
                Con el numero 1 si esta interesado/a en Alquilar o Vender una propiedad
               <br/>
                Con el numero 2 si esta interesado/a en Comprar o Alquilar una propiedad
                <br/>
                Con el numero 3 si esta interesado/a en Realizar un pago mediante este medio
                <br/>
                Con el numero 4 si tiene otra consulta
                   `,
                })
  }
  

  });
  socket.on("disconnect", () => {
    socketio.emit("mensajes", {
      server: "server",
      mensaje: `${name} ha abandonado la sala`,
    });
  });
});

db.sync({ force:false }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
    cron.schedule('44 * * * *', () => {
      updateContractCron()
      console.log('update contract state');
    });
  });
});

require("dotenv").config();
const cron = require('node-cron');
const { db } = require("./db");
const {updateContractCron} = require('./cron/contractCron')

const app = require("./app");
// const server = require("./app");
const PORT = process.env.PORT || 3010;

//socketIo conexion
const http = require('http');
const server = http.createServer(app);
// const socketio = require('socket.io');


const socketio = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"]
  },
  // transports: ["websocket"],
});

// const io = socketio(server);

socketio.on('connection', socket =>{
  //se ejecuta esta funcion cada vez q un usuario se conecta
  let name;

  socket.on('conectado', (nam)=>{
    name= nam
    
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:` Bienvenido/a ${name} responda:
      Con el numero 1 si esta interesado/a en Alquilar o Vender una propiedad
      Con el numero 2 si esta interesado/a en Comprar o Alquilar una propiedad
      Con el numero 3 si esta interesado/a en Realizar un pago mediante este medio
      Con el numero 4 si tiene otra consulta
      
      `
    })

    socket.broadcast.emit("mensajes", {
      name: name,
      mensaje: `${name} ha entrado en la sala del chat`, 
    });
  });

  socket.on('mensaje', (name, mensaje)=>{
   
    socketio.emit('mensajes', {name, mensaje})
    mensaje = mensaje.toLowerCase();
    console.log("MENSAJE RECIBIDO", mensaje)

    // if(mensaje.includes("hola"||"buenas tardes" || "buenos dias" ||"buenas noches")){
    //   socketio.emit("mensajes",{
    //     name: "Makelaar",
    //     mensaje:` Bienvenida ${name} en que podemos ayudarte?`
    //   })
    // }


  if(mensaje.includes(1)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:` Podes encontrarnos en nuestras oficina en Donaciano del Campillo Nº 2195 o via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs, a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. Gracias`
    })
  }
  if(mensaje.includes(2)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:`Podes encontrar todas las propiedades en Alquiler en venta en el siguiente link: http://localhost:3000/property `,
    })
    
  }
  if(mensaje.includes(3)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:`Para realizar el pago podes dirigirte al siguiente link: LINKPAGO `,
      })
    
  }

  if(mensaje.includes(4)){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:` Podes encontrarnos en nuestras oficina en Donaciano del Campillo Nº 2195 o via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs, a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. Gracias `,
      })
    
  }
  


// if(count ===2){
// if(mensaje.includes("si")){
//   socketio.emit("mensajes",{
//     name: "Makelaar",
//     mensaje:`Podes encontrar el precio de nuestras propiedades en este link http://localhost:3000/property`
//   })
// }else{
//   socketio.emit("mensajes",{
//     name: "Makelaar",
//     mensaje:`Estas interesado en vender o alquilar una propiedad?`
//   })
// }
// }

  });

  socket.on('disconnect', ()=>{
    socketio.emit('mensajes', {server: "server", mensaje: `${name} ha abandonado la sala`})
  })
})

const https = require("https");

const data = JSON.stringify({
    name: "John"
})

const options = {
    hostname: "hookb.in",
    port: 443,
    path: "/E7lxQbZXknuVjY66jqRZ",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length
    }
}

const req = https.request(options, (res) => {
    console.log(`status: ${res.statusCode}`);
});

req.write(data);
req.end();









db.sync({ force:false }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
    cron.schedule('44 * * * *', () => {
      updateContractCron()
      console.log('update contract state');
    });
  });
});

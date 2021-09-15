require("dotenv").config();
const { db } = require("./db");

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
      mensaje:` Bienvenida ${name} estas interesada en conocer nuestros horarios de atencion?`
    })

    socket.broadcast.emit("mensajes", {
      name: name,
      mensaje: `${name} ha entrado en la sala del chat`, 
    });
  });

  socket.on('mensaje', (name, mensaje, count)=>{
    console.log("COUNT", count)
    socketio.emit('mensajes', {name, mensaje})
    mensaje = mensaje.toLowerCase();
    console.log("MENSAJE RECIBIDO", mensaje)

    // if(mensaje.includes("hola"||"buenas tardes" || "buenos dias" ||"buenas noches")){
    //   socketio.emit("mensajes",{
    //     name: "Makelaar",
    //     mensaje:` Bienvenida ${name} en que podemos ayudarte?`
    //   })
    // }
if(count === 1){

  if(mensaje.includes("no")){
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:` Estas interesado/a en el precio de alguno de nuestros inmuebles?`
    })
  }else{
    socketio.emit("mensajes",{
      name: "Makelaar",
      mensaje:`Podes encontrarnos en nuestras oficina en Donaciano del Campillo Nº 2195 o via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs. Tambien podes contactarnos a traves de nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o enviarnos un correo electronico a info_makelaar@yahoo.com con tu consulta. Gracias`
    })
    
  }
}

if(count ===2){
if(mensaje.includes("si")){
  socketio.emit("mensajes",{
    name: "Makelaar",
    mensaje:`Podes encontrar el precio de nuestras propiedades en este link http://localhost:3000/property`
  })
}else{
  socketio.emit("mensajes",{
    name: "Makelaar",
    mensaje:`Estas interesado en vender o alquilar una propiedad?`
  })
}
}

  });

  socket.on('disconnect', ()=>{
    socketio.emit('mensajes', {server: "server", mensaje: `${name} ha abandonado la sala`})
  })
})



db.sync({ force:true }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});

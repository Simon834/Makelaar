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
    
    

    socket.broadcast.emit("mensajes", {
      name: name,
      mensaje: `${name} ha entrado en la sala del chat`, 
    });
  });

  socket.on('mensaje', (name, mensaje)=>{
    socketio.emit('mensajes', {name, mensaje})
    mensaje = mensaje.toLowerCase();
    console.log("MENSAJE RECIBIDO", mensaje)

    if(mensaje.includes("hola"||"buenas tardes" || "buenos dias" ||"buenas noches" || "buenas tardes")){
      socketio.emit("mensajes",{
        name: "Makelaar",
        mensaje:` Bienvenida ${name} en que podemos ayudarte?`
      })
    }

  });

  socket.on('disconnect', ()=>{
    socketio.emit('mensajes', {server: "server", mensaje: `${name} ha abandonado la sala`})
  })
})



db.sync({ force:false }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});

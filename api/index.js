require("dotenv").config();
const cron = require('node-cron');
const { db } = require("./db");
const { updateContractCron } = require('./cron/contractCron')

const app = require("./app");

const PORT = process.env.PORT || 3010;

//socketIo conexion
const http = require("http");
const server = http.createServer(app);


const socketio = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  },

});


socketio.on("connection", (socket) => {
  //se ejecuta esta funcion cada vez q un usuario se conecta
  let name;

  socket.on("conectado", (nam) => {
    name = nam;

    socketio.emit("mensajes", {
      name: "Makelaar",
      mensaje: `Bienvenido/a ${name} responda con el numero:
      <br/>
     ◉ 1 si esta interesado/a en Alquilar o Vender una propiedad
     <br/>
     ◉ 2 si esta interesado/a en Comprar o Alquilar una propiedad
      <br/>
     ◉ 3 si esta interesado/a en Realizar un pago mediante este medio
      <br/>
     ◉ 4 si tiene otra consulta
      `,
    });

    // socket.broadcast.emit("mensajes", {
    //   name: name,
    //   mensaje: `${name} ha entrado en la sala del chat`,
    // });
  });

  socket.on("mensaje", (name, mensaje, id=24) => {
    socketio.emit("mensajes", { name, mensaje });
    mensaje = mensaje.toLowerCase();
    console.log("ID RECIBIDO", mensaje)


    if (mensaje.includes(1)) {
      socketio.emit("mensajes", {
        name: "Makelaar",
        mensaje:`Completa el Formulario que se encuentra en este <a href="http://localhost:3000/contact"> link</a> y a la brevedad nos estaremos comunicando con usted.
        <br/>
        Gracias
               `
      })
    }
    else if (mensaje.includes(2)) {
      socketio.emit("mensajes", {
        name: "Makelaar",
        mensaje: `Podes encontrar todas las propiedades en Alquiler en venta en el siguiente: <a href="http://localhost:3000/property"> link </a>  `,
      })

    }
    else if (mensaje.includes(3)) {
      if(name != "Usuario nuevo"){

        socketio.emit("mensajes", {
          name: "Makelaar",
          mensaje: `Para realizar el pago podes dirigirte al siguiente: <a href="http://localhost:3000/user/${id}/contrat">link</a> `,
          
        })
        
      }else{
        socketio.emit("mensajes", {
          name: "Makelaar",
          mensaje: `Para realizar un pago debes iniciar sesion y dirigirte a la seccion de 'Mis Contratos' `,
        })
      }

    }

    else if (mensaje.includes(4)) {
      socketio.emit("mensajes", {
        name: "Makelaar",
        mensaje: ` Podes encontrarnos: 
      <br/>
      ◉ En nuestras oficina en Donaciano del Campillo Nº 2195  
      <br/> 
      ◉ Via telefonica (549) 11456982365 de Lunes a Viernes de 08hs a 20hs
      <br/>
      ◉ En nuestras redes sociales: Facebook e Instagram como: makelaar.inmobiliaria o 
      <br/> 
      ◉ Enviarnos un correo electronico a info_makelaar@yahoo.com para comunicarte con un responsable del area. 
      <br/> 
      Gracias `,
      })

    } else {
      socketio.emit("mensajes", {
        name: "Makelaar",
        mensaje: `La opcion ingresada no es correcta, por favor responda:
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

  });
  socket.on("disconnect", () => {
    socketio.emit("mensajes", {
      server: "server",
      mensaje: `${name} ha abandonado la sala`,
    });
  });
});

db.sync({ force: false }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
    cron.schedule('44 * * * *', () => {
      updateContractCron()
      console.log('update contract state');
    });
  });
});

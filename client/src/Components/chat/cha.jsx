// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import React,{useState, useEffect, useRef}  from 'react';
import {useSelector } from "react-redux";

import io from 'socket.io-client';
//usuario logeado
//ELIMINAR COMPONENTES DE CHATSOCKE CUANDO ESTE FUNCIONANDI BIEN 
//FALTA FUNCIIONALIDAD CUANDO ESTA LOGEADO  Y CUANDO NO. ESTAN POR SEPARADO

const BACK_SERVER =
   "http://localhost:3010";

export let socket = io(BACK_SERVER);


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: '#e0e0e0'
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }, 
  root:{
      border: '1px solid #e0e0e0',
      width:"80%"
  },
  tit:{
      textAlign:"center"
  }
});
let date= new Date()
let hour = date.getHours() + ':' + date.getMinutes()

const Chat = () => {
  const classes = useStyles();

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

//    let name = if(userInfo){userInfo.user.name || "usuario nuevo"
let name = "Usuario nuevo";

// if(userInfo.user.name){
//      name = userInfo.user.name
// }else{
//      name= "Usuario"
// }
  
  const { userInfo } = useSelector((state) => state);

//   console.log("NOMBRE USUARIO", userInfo.user.name)

    // useEffect(() => {
    //     if(userInfo.user.name){
    //       socket.emit("conectado", userInfo.user.name);
    //   }
      
    //     }
    //    , [ userInfo.user.name]);

    // useEffect(() => {
       
  
    //       socket.emit("conectado", userInfo.user.name);
      
    //     }
    //    , [userInfo.user.name]);




  useEffect(() => {
      if(userInfo.user?.name){
        socket.emit("conectado", userInfo.user.name);
    }else{

        socket.emit("conectado", name);
    }
      }
     , [ userInfo.user?.name]);


useEffect(() => {
   socket.on("mensajes", (mensaje) => {
     setMensajes([...mensajes, mensaje]);
   //   console.log("MENSAJES", mensajes)
   });

   return () => {
     socket.off();
   };
 }, [mensajes]);

 let count = 0;

 const submit = (e) => {
   e.preventDefault();
   count = count + 1
//    if(userInfo.user.name){
//     socket.emit("mensaje", userInfo.user.name, mensaje);
// }else{

//     socket.emit("mensaje", name, mensaje);
// }
   socket.emit("mensaje", userInfo.user?.name || name , mensaje);
   console.log("MENSAJE ENVIADO", mensaje)
   setMensaje("");
    console.log("SE EJECUTO SUBMIT")
 };


  return (
      <div>
        <Grid className={classes.root}>
            <Typography variant="h6" className={classes.tit}>Chat</Typography>
           
            <Grid item xs={10}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
{console.log("MENSAJES", mensajes)}
                            {mensajes?.map((e,i)=>{
                   return <div>

                       <ListItem button key={i}>
                   <ListItemIcon>
                   <Avatar alt={e.name} src="https://material-ui.com/static/images/avatar/2.jpg" /><span>

                   <ListItemText primary={e.name}align="right" >{e.name}-</ListItemText>
                       </span>
                           <ListItemText align="left" >: {hour}hs</ListItemText>
                   </ListItemIcon>
                   
               </ListItem>    
                           <ListItemText align="center" >{e.mensaje}</ListItemText>
                   </div>
                })}
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </ListItem>
                    {/* <ListItem key="2">
                    <Grid item xs={12}>
                            <ListItem button key="Marcos">
                        <ListItemIcon>
                            <Avatar alt="Marcos"align="right" src="https://material-ui.com/static/images/avatar/1.jpg" /><span>

                        <ListItemText primary="Marcos" align="right" >Marcos</ListItemText>
                            </span>
                        </ListItemIcon>
                        
                    </ListItem>    
                                <ListItemText align="left" primary="Hola"></ListItemText>
                                <ListItemText align="left" secondary="09:30"></ListItemText>
                            </Grid>
                    </ListItem>
                     */}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something"  value={mensaje}
          onChange={(e) => setMensaje(e.target.value)} fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon onClick={submit}/></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;
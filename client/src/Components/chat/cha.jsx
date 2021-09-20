import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
import {Modal, Button, Dialog} from '@material-ui/core';
import icoChat from "../../images/icon-chat.png"; 
import style from './Chat.module.css';
import imageChat from '../../images/image.jpg'

import { useSelector } from "react-redux";



import io from 'socket.io-client';
//usuario logeado
//ELIMINAR COMPONENTES DE CHATSOCKE CUANDO ESTE FUNCIONANDI BIEN 

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
    // borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    fontSize:'10px',
    overflowY: 'auto',
    "& .MuiList-root":{
      overflowY: 'hidden' 
    }
  },
  root: {
    // border: '1px solid #e0e0e0',
    width: "100%",
    maginLeft: '100px'
  },
//   tit: {
//     textAlign: "center"
//   },
  modal:{
      position: 'absolute',
      width: '50%',
      // padding: '16px 32px 34px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#FFF',
      maginLeft: '20px',
      overflow: 'hidden'

  },
  paper:{
      width:"40%",
      height:'20%',
    //   position:'absolute',
       marginTop: '10px',
       marginLeft: '300px',
       marginRight: '20px',
       marginBottom: '50px',
       overflow: 'hidden',
       display: 'flex'

  },
  listItem:{
      marginLeft: '30px',
      overflow: 'hidden',
      overflowX: 'hidden',
      justifyContent: 'center',
      marginTop:'10px',
      width:'90%',
      overflowY: 'hidden' 
  },
  listItemText:{
    fontSize: '3px'
  }
});

let date = new Date()
let hour = date.getHours() + ':' + date.getMinutes()

const Chat = () => {
  const classes = useStyles();

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const [modal, setModal] = useState(false);

  const openModal = () =>{
      setModal(!modal)
  }


  let name = "Usuario nuevo";

  const { userInfo } = useSelector((state) => state);

  //   console.log("NOMBRE USUARIO", userInfo.user.name)


  useEffect(() => {
    if (userInfo.user?.name) {
      socket.emit("conectado", userInfo.user.name);
    } else {

      socket.emit("conectado", name);
    }
  }
    , [userInfo.user?.name]);


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

    socket.emit("mensaje", userInfo.user?.name || name, mensaje);
    console.log("MENSAJE ENVIADO", mensaje)
    setMensaje("");
    // console.log("SE EJECUTO SUBMIT")
  };

   function summary(mensaje) {
    return { __html: mensaje };
}

const body=(

        <div className={classes.modal}>
            {/* <Paper elevation={24} className={classes.paper}> */}
          <Grid container className={classes.root}>
            <Typography variant="h6" className={classes.tit}><Button onClick={openModal}>X</Button></Typography>
    
            <Grid item>
            
              <List className={classes.messageArea}>
                <ListItem className={classes.listItem} key="1">
                  <Grid item>
                    <Grid item xs={12}>
                      {console.log("MENSAJES", mensajes)}
                      {mensajes?.map((e, i) => {
                        return <div>
    
                          <ListItem button key={i}>
                            <ListItemIcon>
                              <Avatar alt={e.name} src={e.name === "Makelaar" ? "https://image.shutterstock.com/image-vector/beautiful-pensive-brunette-office-secretary-260nw-243022681.jpg" : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg" } />
                              <span>
                                <ListItemText primary={e.name} align="right" >{e.name}-</ListItemText>
                              </span>
                              <ListItemText align="left" >: {hour}hs</ListItemText>
                            </ListItemIcon>
    
                          </ListItem>
                          
                          <ListItemText className={classes.listItemText} align="justify" ><div dangerouslySetInnerHTML={summary(e.mensaje)} /></ListItemText>
                        </div>
                      })}
                    </Grid>
                  
                  </Grid>
                </ListItem>
              
              </List>
              <Divider />
              <Grid item style={{ padding: '20px' }}>
                <Grid item >
                
                  <TextField id="outlined-basic-email" label="Type Something" value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)} fullWidth />
                </Grid>
                <Grid  align="right">
                  <Fab color="primary" aria-label="add"><SendIcon onClick={submit} /></Fab>
                 
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Paper> */}
        </div>
    
    
)
return(
    <div>
      <div classes={style.btn}>

        <img classes={style.btn} onClick={openModal} src={icoChat} />
      </div>
        {/* <Button > Abrir</Button> */}
        <Modal open={modal} onClose={openModal}>
            {body}
            </Modal>
    </div>

)
}

export default Chat;
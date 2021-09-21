import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {Modal, Button} from '@material-ui/core';
import icoChat from "../../images/icon-chat.png"; 
import style from './Chat.module.css';
import Tooltip from "@material-ui/core/Tooltip";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import { useSelector } from "react-redux";

import io from 'socket.io-client';

const BACK_SERVER =
  "http://localhost:3010";

export let socket = io(BACK_SERVER);


const useStyles = makeStyles({
 
  messageArea: {
    height: '70vh',
    fontSize:'10px',
    overflowY: "auto",
     margin: 0,
     padding: 0,
    listStyle: "none",
    
    '&::-webkit-scrollbar': {
      width: '1em',
      borderBottom:"10px"
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#4C3C90 ',
      outline: '1px solid slategrey'
    }
  },
  root: {
    width: "100%",
    maginLeft: '100px',
    position:"relative",
    padding:"3rem"
  },

  modal:{
      position: 'relative',
      width: '40%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#FFF',
      maginLeft: '20px',
      overflow: 'hidden',
  },

  listItem:{
      marginLeft: '30px',
      overflow: 'hidden',
      overflowX: 'hidden',
      justifyContent: 'center',
      marginTop:'10px',
      width:'90%',
      display:"block",
  },
  
  listItemText:{
    fontSize: '3px',
    scrollbarWidth:"10%"
  },
  
  btnx:{
    color: "#4C3C90",
    display: "flex",
    float:"right",
    position:"absolute",
    marginRight:"2%",
    
    "&:hover": {
      backgroundColor: "transparent",
    },
  }, 
  input:{
    display:"flex",
    flexDirection: "row",
    alignItems: "right"
  },
  msjContainer:{
    maxWidth:"100%",
    display:"flex",
    flexDirection:"row"
  },
  close:{
    marginBottom:"1rem",
    display:"unblock",
    "&:hover": {
      cursor: "pointer",
    },
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

    console.log("INFO USUARIO", userInfo)


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

    socket.emit("mensaje", userInfo.user?.name || name, mensaje, userInfo.user?.id || "");
    console.log("INFO USER", userInfo)
    console.log("MENSAJE ENVIADO", mensaje)
    setMensaje("");
    // console.log("SE EJECUTO SUBMIT")
  };

   function summary(mensaje) {
    return { __html: mensaje };
}

const body=(

        <div className={classes.modal}>
          
          <Grid container className={classes.root}>
          <Grid item xs={12} sm={12} md={12} className={classes.close}>
            <Button className={classes.btnx} onClick={openModal}> <CancelPresentationIcon/></Button>
            </Grid>
            
  
            <Grid item xs={12} sm={12} md={12} className={classes.msjContainer}>          
              <List className={classes.messageArea}>
                <ListItem className={classes.listItem} key="1">
                
                      {/* {console.log("MENSAJES", mensajes)} */}
                      {mensajes?.map((e, i) => {
                        return <div >
                          
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
                    
                </ListItem>
              
              </List>
              </Grid>
              <Divider />
              
              <Grid className={classes.input} item xs={12} sm={12} md={12}> 
                  <TextField id="outlined-basic-email" label="Escribe tu opcion aqui" value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)} fullWidth />
                  <Fab color="primary" aria-label="add"><SendIcon onClick={submit} /></Fab>             
            </Grid>
          </Grid>
        
        </div>
    
    
)
return(
    <div>
       <Tooltip title="Chatea con nosotros">
        <img className={style.img} onClick={openModal} src={icoChat} />
        </Tooltip>
        <Modal open={modal} onClose={openModal}>
            {body}
            </Modal>
    </div>

)
}

export default Chat;
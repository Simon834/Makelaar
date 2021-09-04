import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getUserDetail } from "../../Redux/Actions/actions";
import {useParams} from "react-router-dom";
import style from './userDetail.module.css'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  
  root: {
    width: "80%",
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    allingItems: "center",
    justifyContent: "center",
    
  },
  paperLeft: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width:150,
    alignContent:"center",
    textAlign: 'center',
    backgroundColor: "#E1535E", 
    color:"#fff",
    
  },
  "& .MuiGrid-root":{
    width: 150,
  },
  

  paperRight: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(1), 
    width:500,  
    textAlign: 'center',
    color: theme.palette.text.primary,
    paddingTop:10,
  },
  gridRight:{
    display:'flex',
    alignItems: 'flex-end'
  },
  icon:{
    alingSelf:'flex-end',
    color: "#E1535E"
  }
  
}));

export default function UserDetail() {
  const classes = useStyles();
  const {id}= useParams();
    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        coments: ""
    });    
    
    let {userInfo}= useSelector((state)=> state);

    // useEffect(()=>{
    //     dispatch(getUserDetail(id))
        
    // },[])

    useEffect(()=>{
     
      setInfo({
        ...info, 
        name: userInfo.user.name,
          email: userInfo.user.email,
          phone: userInfo.user.phone,
          whatsapp: userInfo.user.whatsapp,
          coments: userInfo.user.coments
  
      })
  },[userInfo])
    
        console.log("info", info)



  return (
    <div >
      <Paper className={classes.root}>

      <Grid className ={classes.gridContainer} container spacing={1}>   
        <Grid item xs={3} className={classes.botonWidth}>
          <Paper className={classes.paperLeft}>Nombre</Paper>
        </Grid>
        <Grid className={classes.gridRight} item xs={9}>
         

          <Paper className={classes.paperRight} >
          {info.name}
          <div className={style.paper}>
          <Tooltip  title="Editar">
          <EditIcon className={classes.icon}/>
          </Tooltip>
          </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperLeft}>Email</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paperRight}>
          {info.email}
          <div className={style.paper}>

          <Tooltip title="Editar">
          <EditIcon  className={classes.icon}/>
          </Tooltip>
          </div>
          </Paper>
          </Grid>

          <Grid item xs={3}>
          <Paper className={classes.paperLeft}>Telefono</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paperRight}>
          {info.phone}
          <div className={style.paper}>

          <Tooltip title="Editar">
          <EditIcon className={classes.icon}/>
          </Tooltip>
          </div>
          </Paper>
        </Grid>

        

        <Grid item xs={3}>
          <Paper className={classes.paperLeft}>WhatsApp</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paperRight}>
          {info.whatsapp}
          <div className={style.paper}>

          <Tooltip title="Editar">
          <EditIcon className={classes.icon}/>
          </Tooltip>
          </div>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paperLeft}>Comentarios</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paperRight}>
          {info.coments}
          <div className={style.paper}>

          <Tooltip title="Editar">
          <EditIcon className={classes.icon}/>
          </Tooltip>
          </div>
          </Paper>
        </Grid>
        
      </Grid>
      </Paper>
    </div>
  );
}


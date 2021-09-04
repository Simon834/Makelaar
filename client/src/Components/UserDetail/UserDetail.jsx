import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getUserDetail } from "../../Redux/Actions/actions";
import {useParams} from "react-router-dom";
import TextField from "@material-ui/core/TextField";


// export default function UserDetail(){

//     const classes=useStyle();

//     const {id}= useParams();
//     const dispatch = useDispatch();

//         useEffect(()=>{
//             dispatch(getUserDetail(id))
//         },[])

//         let userInfo= useSelector((state)=> state.userInfo);
//         console.log(userInfo)

//         const [info, setInfo] = useState({
//             name: userInfo.name,
//             email: userInfo.email,
//             phone: userInfo.phone,
//             whatsapp: userInfo.whatsapp,
//             coments: userInfo.comments
//         });    
      
//         return (
//           <>
//           <Paper className={classes.root}>
//           <div>
//             <form >
//               <Grid container>
//                 <Grid item xs={6}>

//             <div>
//                 {/* <span>Nombre: </span> */}
//                 <TextField
//                 variant="outlined"
//                 label="Nombre"
//                 name="name"
//                 value={info.name}
               
//               />
//                 {/* <label htmlFor="name"></label>
//                 <input
//                   placeholder="name"
//                   type="text"
//                   id="name"
//                   value={info.name} 
//                 /> */}
               
//               </div>
//               <div>
//               <TextField
//                 variant="outlined"
//                 input="Email"
//                 name="email"
//                 value={info.email}
               
//               />
//               {/* <Box component="div" display="inline" p={1} m={1}>Email </Box>
//                 <label htmlFor="email"></label>
//                 <input
//                   placeholder="email@makelaar.com"
//                   type="email"
//                   id="email"
//                   value={info.email} 
//                 /> */}
               
//               </div>
//               <div>
//               <Box component="div" display="inline" p={1} m={1}>Telefono </Box>
//                 <label htmlFor="phone"></label>
//                 <input
//                   placeholder="phone"
//                   type="number"
//                   id="phone"
//                   value={info.phone}
                  
//                 />
                
//               </div>
                
//               <div>
//               <Box component="div" display="inline" p={1} m={1}>WhatsApp </Box>
//                 <label htmlFor="whatsapp"></label>
//                 <input
//                   placeholder="whatsapp"
//                   type="number"
//                   id="whatsapp"
//                   value={info.whatsapp}
                  
//                 />
                
//               </div>
//               <div>
//               <Box component="div" display="inline" p={1} m={1}>Comentarios </Box>
//                 <label htmlFor="coments"></label>
//                 <input
//                   placeholder="coments"
//                   type="text"
//                   id="coments"
//                   value={info.coments}  
//                 />               
//               </div>
//                 </Grid>

//               </Grid>
               
      
      
//             </form>
      
//           </div>
//           </Paper>
//           </>
//         )
      
//       }
    


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    margin: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  paperLeft: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: "#E1535E", 
    color:"#fff",
    
    
  },

  paperRight: {
    padding: theme.spacing(2),
    margin: theme.spacing(1), 
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderColor:"#E1535E !important" 
    
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
    
    let userInfo= useSelector((state)=> state.userInfo);

    useEffect(()=>{
        dispatch(getUserDetail(id))
        
    },[])

    useEffect(()=>{
     
      setInfo({
        ...info, 
        name: userInfo.name,
          email: userInfo.email,
          phone: userInfo.phone,
          whatsapp: userInfo.whatsapp,
          coments: userInfo.coments
  
      })
  },[userInfo])
    
        console.log("info", info)



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>   
        <Grid item xs={6}>
          <Paper className={classes.paperLeft}>Nombre</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
          {info.name}
          <Tooltip title="Editar">
          <EditIcon/>
          </Tooltip>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperLeft}>Email</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
          {info.email}
          <Tooltip title="Editar">
          <EditIcon/>
          </Tooltip>
          </Paper>
          </Grid>

          <Grid item xs={6}>
          <Paper className={classes.paperLeft}>Telefono</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
          {info.phone}
          <Tooltip title="Editar">
          <EditIcon/>
          </Tooltip>
          </Paper>
        </Grid>

        

        <Grid item xs={6}>
          <Paper className={classes.paperLeft}>WhatsApp</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
          {info.whatsapp}
          <Tooltip title="Editar">
          <EditIcon/>
          </Tooltip>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paperLeft}>Comentarios</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
          {info.coments}
          <Tooltip title="Editar">
          <EditIcon/>
          </Tooltip>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}


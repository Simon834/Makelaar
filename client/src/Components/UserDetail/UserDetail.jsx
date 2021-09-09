import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Redux/Actions/actions";
import { useParams } from "react-router-dom";
import style from './userDetail.module.css'
import TextField from "@material-ui/core/TextField";
import { UserDetailControl } from "./UserDetailControl";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import BlockIcon from '@material-ui/icons/Block';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "400px",
      margin: theme.spacing(2),
    },
  },
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
    width: 150,
    alignContent: "center",
    textAlign: 'center',
    backgroundColor: "#E1535E",
    color: "#fff",

  },
  "& .MuiGrid-root": {
    width: 150,
  },


  paperRight: {
    padding: theme.spacing(0.1),
    margin: theme.spacing(1),
    width: 500,
    textAlign: 'center',
    color: theme.palette.text.primary,
    paddingTop: 10,
  },
  gridRight: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  icon: {
    alingSelf: 'flex-end',
    color: "#E1535E",
    marginTop: "10%"
  },
  btn:{
    "&:hover":{
      backgroundColor: 'transparent'
              },
  }

}));

export default function UserDetail() {
  const classes = useStyles();
  
  const { handleChange, handleSubmit, errors, user } =
    UserDetailControl();
  // useEffect(()=>{
  //     dispatch(getUserDetail(id))

  // },[])

  return (
    <div >

      <Paper className={classes.root}>

        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Grid className={classes.gridContainer} container spacing={1}>
            <Grid item xs={3} className={classes.botonWidth}>
              <Paper className={classes.paperLeft}>Nombre</Paper>
            </Grid>
            <Grid className={classes.gridRight} item xs={9}>
              <Paper className={classes.paperRight} >
                <div className={style.paper}>
                  <TextField
                    name="name"
                    onBlur={handleChange}
                    value={user.name}
                    onChange={handleChange}
                    {...(errors.name && {
                      error: true,
                      helperText: errors.name,
                    })}
                    required
                  />
                  {/* <Tooltip title="Enviar" onClick={handleSubmit}>
                    <ThumbUpAltIcon className={classes.icon}  />
                  </Tooltip> */}
                  <Button classname={classes.btn} color="secondary">Enviar</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paperLeft}>Email</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperRight}>
                <div className={style.paper}>
                  <TextField
                    name="email"
                    type="email"
                    value={user.email}
                    disabled 
                  />
                  <Tooltip title="Editar">
                    <BlockIcon className={classes.icon} />
                  </Tooltip>

                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paperLeft}>Telefono</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperRight}>
                <div className={style.paper}>
                  <TextField
                    name="phone"
                    type="number"
                    value={user.phone}
                    onChange={handleChange}
                    {...(errors.phone && {
                      error: true,
                      helperText: errors.phone,
                    })}
                  />
                  {/* <Tooltip title="Enviar" onClick={handleSubmit}>
                    <ThumbUpAltIcon className={classes.icon} />
                  </Tooltip> */}
                  <Button classname={classes.btn} color="secondary">Enviar</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paperLeft}>WhatsApp</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperRight}>
                <div className={style.paper}>
                  <TextField
                    name="whatsapp"
                    type="number"
                    value={user.whatsapp}
                    onChange={handleChange}
                    required
                    {...(errors.whastapp && {
                      error: true,
                      helperText: errors.whastapp,
                    })}
                  />

                  {/* <Tooltip title="Enviar" onClick={handleSubmit}>
                    <ThumbUpAltIcon className={classes.icon} />
                  </Tooltip> */}
                  <Button classname={classes.btn} color="secondary">Enviar</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paperLeft}>Password</Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paperRight}>
                <div className={style.paper}>
                  <TextField
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                    {...(errors.password && {
                      error: true,
                      helperText: errors.password,
                    })}
                  />
                  {/* <Tooltip title="Enviar" onClick={handleSubmit}>
                    <ThumbUpAltIcon className={classes.icon} />
                  </Tooltip> */}
                  <Button className={classes.btn} color="secondary">Enviar</Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}


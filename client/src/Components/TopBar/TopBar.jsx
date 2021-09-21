import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Tooltip from "@material-ui/core/Tooltip";
import { Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import FormLogin from "../FormLogin/FormLogin";
import FavoriteCards from "../Favorites/FavoritesCards/FavoriteCards";
import FormContraseña from "../FormContraseña/FormContraseña";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationFrom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import style from "./TopBar.module.css";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paperList: {
    width: 500,
  },

  menuList: {
    width: "min-content",
    flexDirection: "row",
    display: "flex",
    margin: theme.spacing(5),
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  imgList: {
    width: "100%",
    height: 400,
  },

  daialogFav: {
    width: "600px",
  },

  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: "10px",
    marginBottom: "20px",
    marginTop: "12px",
    padding: "6px",
    float: "right",
  },
  icon: {
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconInfo: {
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginRight: "5px",
    marginLeft: "10px",
  },
}));

export default function TopBar() {
  const { userInfo } = useSelector((state) => state);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (userInfo.token) {
      setAuth(true);
    }
  }, [userInfo]);

  const LoginModal = (props) => {
    return (
      <Dialog
        open={showDialog}
        onClose={closeDialog}
        className={style.zIndexDialogRegister}
      >
        <DialogContent>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
            onClick={closeDialog}
          >
            X
          </Button>
          <FormLogin action={closeDialog} />
        </DialogContent>
        <DialogActions>
          <Button onClick={openDialogReset} autoFocus color="primary">
            ¿Olvidaste tu contraseña?
          </Button>
          <Button onClick={openDialogRegister} autoFocus color="primary">
            Regístrate
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const ResetModal = (props) => {
    return (
      <Dialog open={showDialogReset} onClose={closeDialogReset}>
        <DialogContent>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
            onClick={closeDialogReset}
          >
            X
          </Button>
          <FormContraseña action={closeDialogReset} />
        </DialogContent>
      </Dialog>
    );
  };
  const RegisterModal = (props) => {
    return (
      <Dialog open={showDialogRegister} onClose={closeDialogRegister}>
        <DialogContent>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
            onClick={closeDialogRegister}
          >
            X
          </Button>
          <UserRegistrationForm isAdmin={false} action={closeDialogRegister} />
        </DialogContent>
      </Dialog>
    );
  };

  const LogoutModal = (props) => {
    return (
      <Dialog open={openDialogLogout} onClose={closeLogout}>
        <DialogContent>
          <Logout action={closeLogout} auth={setAuth} />
        </DialogContent>
      </Dialog>
    );
  };

  ///// -- Login dialog
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  ///// --Reset password dialog.
  const [showDialogReset, setShowDialogReset] = useState(false);

  const openDialogReset = () => setShowDialogReset(true);

  const closeDialogReset = () => setShowDialogReset(false);

  ///// -- Register dialog

  const [showDialogRegister, setShowDialogRegister] = useState(false);

  const openDialogRegister = () => setShowDialogRegister(true);

  const closeDialogRegister = () => setShowDialogRegister(false);
  ////
  const [showFav, setShowFav] = useState(false);

  const openFav = () => setShowFav(true);
  const closeFav = () => setShowFav(false);
  // logout dialog

  const [openDialogLogout, setOpenDialogLogout] = useState(false);

  const openLogout = () => setOpenDialogLogout(true);
  const closeLogout = () => setOpenDialogLogout(false);

  // const handleToggle = () => {
  //     setOpen((prevOpen) => !prevOpen);
  // };

  const classes = useStyles();

  return (
    <div className={style.containerTopBar}>
      <div className={style.containerContact}>
        <IconButton className={classes.iconInfo}>
          <WhatsAppIcon className={classes.iconInfo} />
          <Typography>
            <p className={style.mail}>+549 11456982365</p>
          </Typography>
        </IconButton>

        <IconButton className={classes.iconInfo}>
          <MailOutlineIcon className={classes.iconInfo} />
          <Typography>
            <a href="mailto:info_makelaar@yahoo.com" className={style.mail}>
              info_makelaar@yahoo.com
            </a>
          </Typography>
        </IconButton>
      </div>

      <div className={style.containerIcons}>
        <Tooltip title="favoritos">
          <IconButton className={classes.icon} arial-label="app">
            <FavoriteBorderIcon onClick={openFav} className={classes.icon} />
            <Dialog open={showFav} onClose={closeFav}>
              <DialogContent className={classes.daialogFav}>
                <Button
                  className={classes.button}
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={closeFav}
                >
                  X
                </Button>
                <FavoriteCards />
              </DialogContent>
            </Dialog>
          </IconButton>
        </Tooltip>

        <Tooltip title="Ingresar">
          <IconButton arial-label="app" className={classes.icon}>
            <PermIdentityIcon onClick={openDialog} className={classes.icon} />
            <LoginModal
              open={openDialog}
              handleClose={() => setShowDialog(false)}
            />
            <ResetModal
              open={openDialogReset}
              handleClose={() => setShowDialogReset(false)}
            />
            <RegisterModal
              open={openDialogRegister}
              handleClose={() => setShowDialogRegister(false)}
            />
          </IconButton>
        </Tooltip>
        {auth && (
          <Tooltip title="Salir">
            <IconButton arial-label="app" className={classes.icon}>
              <ExitToAppIcon onClick={openLogout} className={classes.icon} />
              <LogoutModal
                open={openDialogLogout}
                handleClose={() => setOpenDialogLogout(false)}
              />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

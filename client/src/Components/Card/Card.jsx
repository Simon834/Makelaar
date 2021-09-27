import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import {
  addFavorite,
  deleteFavorite,
} from "../../Redux/Actions/favoriteActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import icoRoom from "../../images/ico-amountrooms.png";
import icoBeth from "../../images/ico-bathrooms.png";
import icoBed from "../../images/ico-bedrooms.png";
import icoType from "../../images/ico-type.png";
import icoArea from "../../images/ico-areasize.png";
import EditIcon from "@material-ui/icons/Edit";
import style from "./Card.module.css";
import EditProperty from "../../Components/EditProperty/EditProperty";
import { Dialog, DialogContent } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "0px",
    width: "100%",
    boxShadow: "1px 3px 10px rgba(0,0,0,0.3)",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  media: {
    height: 350,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#4C3C90",
  },
  address: {
    fontWeight: "450",
    fontSize: 14,
    color: "#E1535E",
    marginBottom: 15,
  },
  info: {
    fontWeight: "500",
    fontSize: 14,
  },
  cardArea: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dialogEdit: {
    height: "800px",
    width: "37.5rem",
  },

  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: "10px",
    marginBottom: "15px",
    marginTop: "2px",
    padding: "8px",
    float: "right",
  },
});

export default function CardComponent(props) {
  const [fav, setFav] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const history = useHistory();
  const { userInfo } = useSelector((state) => state);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  //modal

  let idProp = props.id;

  const OpenModalEdit = () => {
    return (
      <Dialog open={showDialogEdit} onClose={closeDialogEdit}>
        <DialogContent className={classes.dialogEdit}>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
            onClick={closeDialogEdit}
          >
            X
          </Button>
          <EditProperty
            id={idProp}
            update={props.update}
            close={closeDialogEdit}
          />
        </DialogContent>
      </Dialog>
    );
  };

  const [showDialogEdit, setShowDialogEdit] = useState(false);

  const openDialogEdit = () => setShowDialogEdit(true);

  const closeDialogEdit = () => setShowDialogEdit(false);


  useEffect(() => {
    if (userInfo.token) {
      setUserIsAdmin(userInfo.user.isAdmin);
    }
  }, [userInfo]);

  useEffect(() => {
    if (favorites.length > 0) {
      const searFav = favorites.filter((e) => e.id * 1 === props.id * 1);

      if (searFav.length) {
        setFav(true);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    if (favorites.length === 0) {
      localStorage.setItem("favorites", JSON.stringify([]));
    } 
  }, [favorites]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleAddFavorite = (obj) => {
    dispatch(addFavorite(obj));
  };
  const handleDeleteFavorite = (id) => {
    dispatch(deleteFavorite(id));
    setFav(false);
  };

  return (
    <Card className={classes.root}>
      {props.contrat?.status === "activo" ? (
        <Alert severity="info" elevation={6} variant="filled">
          {`Ocupada hasta ${props.contrat.endDate}`}{" "}
        </Alert>
      ) : (
        <Alert severity="success" elevation={6} variant="filled">
          {`Disponible para ${props.transaction} ${props.condition}`}{" "}
        </Alert>
      )}

      {!props.hideImage ? (
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
          onClick={() => history.push(`/property/${props.id}`)}
        />
      ) : (
        <></>
      )}
      <CardContent>
        <Typography className={classes.title}>{props.title}</Typography>
        <Typography className={classes.address}>{props.address}</Typography>
        <Typography className={style.ContainerInfo}>
          <img className={style.imageTitle} src={icoRoom} alt="rooms" />
          <span className={style.infoTitle}>
            Ambientes
            <span className={style.infoText}>{props.rooms}</span>
          </span>
          <Divider flexItem={true} />
          <img className={style.imageTitle} src={icoBeth} alt="rooms" />
          <span className={style.infoTitle}>
            Baños
            <span className={style.infoText}>{props.bathroom}</span>
          </span>
          <Divider flexItem={true} />
          <img className={style.imageTitle} src={icoBed} alt="rooms" />
          <span className={style.infoTitle}>
            Dormitorios
            <span className={style.infoText}>{props.bedroom}</span>
          </span>
          {props.type ? (
            <>
              <Divider flexItem={true} />
              <img className={style.imageTitle} src={icoType} alt="type" />
              <span className={style.infoTitle}>
                Tipo
                <span className={style.infoText}>{props.type}</span>
              </span>
            </>
          ) : (
            <></>
          )}

          {props.area ? (
            <>
              <Divider flexItem={true} />
              <img className={style.imageTitle} src={icoArea} alt="area" />
              <span className={style.infoTitle}>
                Superficie
                <span className={style.infoText}>{`${props.area} m2`}</span>
              </span>
            </>
          ) : (
            <></>
          )}
        </Typography>
        <Divider flexItem={true} />
        <em>{props.description}</em>

        <Divider light />
        <div className={style.footerCard}>
          <div className={style.iconsContainer}>
            <div className={style.heart}>
              <input
                type="checkbox"
                className={style.heart__checkbox}
                aria-label="add to favorites"
                onClick={() =>
                  fav
                    ? handleDeleteFavorite(props.id * 1)
                    : handleAddFavorite(props)
                }
                checked={fav}
              />
              <div className={style.heart__icon} />
            </div>
            {userIsAdmin && (
              <div className={style.edit__icon}>
                <EditIcon onClick={openDialogEdit} />
                <OpenModalEdit
                  open={openDialogEdit}
                  handleClose={() => setShowDialogEdit(false)}
                />
              </div>
            )}
          </div>

          <span className={style.priceTxt}>
            Precio ${new Intl.NumberFormat().format(props.price)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

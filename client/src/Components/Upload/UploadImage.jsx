import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import { uploadConection } from "../../Functions/api/upload";
import { translationEs, stylesColor } from "./uploadConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: theme.spacing(2),
    minWidth: "100%",
    maxWidth: "100%",
  },
  paper: {
    width: "100%",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    objectFit: "scale-down",
    width: "100%",
  },

  img: {
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  button: {
    width: "100%",
  },
}));

export default function UploadImage({ images, setImages, deleteImg }) {
  const classes = useStyles();

  const [myWidget, setmyWidget] = useState({});

  
  let urlArr = [];
  
  useEffect(() => {
    urlArr=images || []

    var myWidgetConect = window.cloudinary.createUploadWidget(
      {
        cloudName: "makelaar",
        uploadPreset: "amojar0m",
        language: "es",
        buttonClass: "bg-action",
        text: translationEs,
        styles: stylesColor,
        showCompletedButton: true,
      },
      (error, result) => {
        if (!error && result && result.event === "queues-end") {
          urlArr = [
            ...urlArr,
            ...result.info.files.map((e) => e.uploadInfo.url),
          ];
        }
        if (result.event === "close" && urlArr.length > 0) {
          setImages(urlArr);
        }
      }
    );
    myWidgetConect.open();
    myWidgetConect.close();
    setmyWidget(myWidgetConect);
  }, []);

  async function uploadImage() {
    await myWidget.open();
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => uploadImage()}
        >
          Subir imagenes
        </Button>
        <ImageList className={classes.imageList} cols={2.5}>
          {images.map((item, pos) => (
            <ImageListItem
              className={classes.imageListItem}
              key={item.img}
              style={{ width: "200px", height: "200px", padding: " 2px" }}
            >
              <img className={classes.img} src={item} alt={item} />
              <ImageListItemBar
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton onClick={(e) => deleteImg(pos)}>
                    <DeleteIcon className={classes.title} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Paper>
    </div>
  );
}

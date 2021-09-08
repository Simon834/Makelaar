import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    imageList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        objectFit:"scale-down",
        width: "100%"
    },

    img:{
        height: "100%",
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    button:{
        width:"100%"
    }
}));

export default function UploadImage({images, setImages}) {
    const [image, setImage] = useState([])
    const classes = useStyles();

    let imgArr = image || []
    var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'makelaar',
        uploadPreset: 'amojar0m'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            imgArr.push(result.info.url)
            setImage([...imgArr])
        }
    }
    )

    async function uploadImage() {
        await myWidget.open()
    }

    function deleteImg(pos){
        let imgDel=[...image]
        imgDel.splice(pos,1)
        setImage(imgDel)
    }

    return (
        <div className={classes.root}>
            <Paper>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => uploadImage()}>Subir imagenes</Button>
            <ImageList className={classes.imageList} cols={2.5}>
                {image.map((item,pos) => (
                    <ImageListItem className={classes.imageListItem} key={item.img} style={{width: "200px",height: "200px",padding:" 2px"}}>
                        <img className={classes.img} src={item} alt={item} />
                        <ImageListItemBar
                                classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton onClick={(e)=>deleteImg(pos)} >
                                    <DeleteIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            </Paper>
        </div>
    )
}

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Paper, Button, List ,ListItem, ListItemAvatar, Avatar,ListItemText,ListItemSecondaryAction } from '@material-ui/core';
import {Delete as DeleteIcon, Folder as FolderIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    button:{
        width:"100%"
    }
}));

export default function UploadFile({files, setFiles}) {
    // const [files, setFiles] = useState([])
    const classes = useStyles();

    let fileArr = files || []
    var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'makelaar',
        uploadPreset: 'amojar0m'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            fileArr.push({name: result.info.original_filename, url:result.info.url})
            setFiles([...fileArr])
        }
    }
    )

    async function uploadImage() {
        await myWidget.open()
    }

    function deleteFile(pos){
        let fileDel=[...files]
        fileDel.splice(pos,1)
        setFiles(fileDel)
    }

    return (
        <div className={classes.root}>
            <Paper>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => uploadImage()}>Subir documento</Button>
            <div className={classes.demo}>
            <List >
              {files.map((e,pos)=>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={e.name}
                    />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>deleteFile(pos)} >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
            </Paper>
        </div>
    )
}
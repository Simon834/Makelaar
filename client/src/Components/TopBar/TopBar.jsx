import React, { useState, useEffect, useRef } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import style from './TopBar.module.css';

import InfoIcon from '@material-ui/icons/Info';

//LISTA IMG PRUEBA
const itemData = [
    {
        url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-10-525x328.jpg",
    },
    {
        url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-14-525x328.jpg",
    },
    {
        url: "http://www.inmobiliariaberrini.com.ar/wp-content/uploads/2021/08/1.0-13-525x328.jpg",
    },
];


const useStyles = makeStyles((theme) => ({

    menuList: {
        width: "min-content",
        
        display: 'flex',
        margin: theme.spacing(5),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    imgList: {
        // flexDirection:'row',
        // justifyContent: 'center',
        width: 500,
        height: 450,
    },
    imgItem: {
        // width:20,
        // height:20,
    }

}));

export default function TopBar() {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


   

    return (

        <div className={style.containerTopBar}>
            <div className={style.containerContact}>
                <IconButton>
                    <WhatsAppIcon />
                    <Typography >+549 11456982365</Typography>
                </IconButton>

                <IconButton>
                    <MailOutlineIcon />
                    <Typography >
                    <a href="mailto:niromilagros@gmail.com" className={style.mail}>makelaar@gmail.com</a></Typography>
                </IconButton>
            </div>

            <div className={style.containerIcons}>
                <Tooltip title="favoritos">
                    <IconButton ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        arial-label="app" >
                        <FavoriteBorderIcon />
                    </IconButton>
                </Tooltip>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>

                                <ClickAwayListener onClickAway={handleClose}>

                                    <MenuList className={classes.menuList}>
                                        <ImageList rowHeight={180} className={classes.imgList} autoFocusItem={open} onKeyDown={handleListKeyDown}>
                                            {itemData && itemData.map((item) => (
                                                <ImageListItem className={classes.imgItem} cols={1} style={{ height: 'auto' }} key={item.url}>
                                                    <img src={item.url} alt="img" />
                                                    <ImageListItemBar
                                                        title="title"
                                                        subtitle="by: Makelaar"
                                                        actionIcon={
                                                            <IconButton aria-label="title" >
                                                                <InfoIcon />
                                                            </IconButton>
                                                        }
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

                <Tooltip title="ingresar">
                    <IconButton arial-label="app" >
                        <PermIdentityIcon />
                    </IconButton>
                </Tooltip>
            </div>

        </div>

    )
}


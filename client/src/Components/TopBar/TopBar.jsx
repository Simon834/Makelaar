import React, { useState, useEffect, useRef } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Tooltip from '@material-ui/core/Tooltip';

import style from './TopBar.module.css';






const useStyles = makeStyles((theme) => ({

    paperList:{
        width: 500
    },

    menuList: {
        width: 'min-content',
        flexDirection:'row',
        display: 'flex',
        margin: theme.spacing(5),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

    },
    imgList: {
        
        width: '100%',
        height: 400,
    },
   
    imgItem: {
        
    }

}));

export default function TopBar({favoritos}) {

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
                    <a href="mailto:info_makelaar@yahoo.com" className={style.mail}>info_makelaar@yahoo.com</a></Typography>
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

                <Tooltip title="ingresar">
                    <IconButton arial-label="app" >
                        <PermIdentityIcon />
                    </IconButton>
                </Tooltip>
            </div>

        </div>

    )
}


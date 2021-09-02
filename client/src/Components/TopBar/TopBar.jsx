import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import { MenuItem } from '@material-ui/core';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import './TopBar.css'

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
    root: {
    //    flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      flexGrow: 1
    },
    paper:{
        display:"flex",
    },
    left: {
      flexGrow: 1,
    },
    paper: {
        marginRight: theme.spacing(2),
      },
  }));

  //MATERIAL UI
export default function TopBar(){

    const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

export default function TopBar(){
    return(
        <div className={classes.root} style={{textAlign:"left"} } id="contenedor">
           <AppBar>
            <Toolbar>

                <div className={classes.left}>
                <IconButton className="whatspBtn" color="inherit">
                <WhatsAppIcon/>
                <Typography>+549 11456982365</Typography>
                </IconButton>  

               
                <IconButton  color="inherit">
                <MailOutlineIcon/>
                <Typography>makelaar@gmail.com</Typography>
                </IconButton>   
                </div>

                <Tooltip title="favoritos">
                <IconButton ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                arial-label="app" color="inherit">
                <FavoriteBorderIcon/>
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
                    
                    <MenuList>
                  <ImageList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  { itemData && itemData.map((item) => (
          <ImageListItem key={item.url}>
            <img src={item.url} alt="img" />
            <ImageListItemBar
              title="title"
              subtitle="by: Makelaar"
              actionIcon={
                <IconButton aria-label="title" className={classes.icon}>
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
                <IconButton arial-label="app" color="inherit">
                <PermIdentityIcon/>
                </IconButton>  
                </Tooltip>
            </Toolbar>
           </AppBar>
        </div>
        
    )
}

}
import React, { useState, useEffect, useRef } from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Tooltip from '@material-ui/core/Tooltip';
import { Dialog, DialogContent, DialogActions } from "@material-ui/core";
import { Button } from "@material-ui/core";
import FormLogin from '../FormLogin/FormLogin';
import FavoriteCards from '../Favorites/FavoritesCards/FavoriteCards';

import style from './TopBar.module.css';





const useStyles = makeStyles((theme) => ({

    paperList: {
        width: 500
    },

    menuList: {
        width: 'min-content',
        flexDirection: 'row',
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

    button: {
        color: "white",
        fontWeight: "bold",
        fontSize: "12px",
        marginBottom: "20px",
        marginTop: "12px",
        padding: "6px",
        marginLeft: theme.spacing(49),
    },

}));

export default function TopBar() {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const [showDialog, setShowDialog] = useState(false);

    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);

    //
    const [showFav, setShowFav] = useState(false);

    const openFav = () => setShowFav(true);
    const closeFav = () => setShowFav(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const classes = useStyles();

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
                    <IconButton

                        arial-label="app" >
                        <FavoriteBorderIcon onClick={openFav}/>
                        <Dialog open={showFav} onClose={closeFav}>
                            <DialogContent>
                                <Button className={classes.button}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}
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
                    <IconButton arial-label="app">
                        <PermIdentityIcon onClick={openDialog} />
                        <Dialog open={showDialog} onClose={closeDialog}>
                            <DialogContent>
                                <Button className={classes.button}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.button}
                                    onClick={closeDialog}
                                >
                                    X
                                </Button>
                                <FormLogin action={closeDialog} />
                            </DialogContent>
                        </Dialog>
                    </IconButton>
                </Tooltip>
            </div>

        </div>

    )
}


//   //ESTO ES DEL DIALOG DEL LOGIN


//   ////////////////////////////////

//   return (
//     <div className="containerTopBar">
//       <div className="containerContact">
//         <IconButton>
//           <WhatsAppIcon />
//           <Typography>+549 11456982365</Typography>
//         </IconButton>

//         <IconButton>
//           <MailOutlineIcon />
//           <Typography>makelaar@gmail.com</Typography>
//         </IconButton>
//       </div>

//       <div className="containerIcons">
//         <Tooltip title="Favoritos">
//           <IconButton
//             ref={anchorRef}
//             aria-controls={open ? "menu-list-grow" : undefined}
//             aria-haspopup="true"
//             onClick={handleToggle}
//             arial-label="app"
//           >
//             <FavoriteBorderIcon />
//           </IconButton>
//         </Tooltip>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === "bottom" ? "center top" : "center bottom",
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList className={classes.menuList}>
//                     <ImageList
//                       rowHeight={180}
//                       className={classes.imgList}
//                       autoFocusItem={open}
//                       onKeyDown={handleListKeyDown}
//                     >
//                       {itemData &&
//                         itemData.map((item) => (
//                           <ImageListItem
//                             className={classes.imgItem}
//                             cols={1}
//                             style={{ height: "auto" }}
//                             key={item.url}
//                           >
//                             <img src={item.url} alt="img" />
//                             <ImageListItemBar
//                               title="title"
//                               subtitle="by: Makelaar"
//                               actionIcon={
//                                 <IconButton aria-label="title">
//                                   <InfoIcon />
//                                 </IconButton>
//                               }
//                             />
//                           </ImageListItem>
//                         ))}
//                     </ImageList>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>

//         <Tooltip title="Ingresar">
//           <IconButton arial-label="app">
//             <PermIdentityIcon onClick={openDialog} />
//             <Dialog open={showDialog} onClose={closeDialog}>
//               <DialogContent>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   className={classes.button}
//                   onClick={closeDialog}
//                 >
//                   X
//                 </Button>
//                 <FormLogin action={closeDialog}/>
//               </DialogContent>
//             </Dialog>
//           </IconButton>
//         </Tooltip>
//       </div>
//     </div>
//   );
// }


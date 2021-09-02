import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-color.png'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
     flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
}));





export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{margin:"0px 0px 0px 0px"}}>
      <AppBar position="static">
        <Toolbar>
          <NavLink className={classes.title} to="/"><img src={logo} alt="logo" /></NavLink>        
          <MenuIcon>
            <IconButton className={classes.menuButton} ></IconButton>
          </MenuIcon>
          <Button href="/home" className={classes.title} color="inherit">Inicio</Button>      
          <Button href="/property" className={classes.title} color="inherit">Propiedades</Button>
          <Button href="/about" className={classes.title} color="inherit">Nosotros</Button>
          <Button  href="/contact" className={classes.title} color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}




// // import logo from '../../images/logo-purple.png'


// //DAR ESTILOS, ACOMODAR PARA QUE SE VEA BIEN EN LA WEB

// export default function NavBar() {
//   return (
//     <nav>
//       <div>
//         {/* <NavLink to="/"><img src={logo} alt="logo" /></NavLink> */}
//       </div>
//       <div >
//         <div >
//           <NavLink to="/home">Inicio</NavLink>
//           <NavLink to="/property" >Propiedades</NavLink>
//           <NavLink to="/about" >Nosotros</NavLink>
//           <NavLink to="/contact" >Contacto</NavLink>

//         </div>
//       </div>

//     </nav>
//   )
// }

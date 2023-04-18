import { Button, CssBaseline, Grid, IconButton, Input, InputAdornment, TextField, Typography, Link, Divider } from '@mui/material'
import { LoginPage } from '../../auth/pages/LoginPage';
import Logo from '../components/ASL_img.png';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import { Box } from '@mui/system';
import { useAuthStore } from '../../hooks';
import React, { useState } from 'react';

export const Navbar = () => {

  const { startLogout, user, status } = useAuthStore();

  /*if( status === 'not-authenticated' ){
    setBotonActivo(true);
  }*/
  
  const [loggedIn, setLoggedIn] = useState(true);

  function handleLogin() {
    if(status==='not-authenticated'){
      setLoggedIn(true);
    }
  }

  function handleLogout() {
    if(status==='not-authenticated'){
      setLoggedIn(true);
    }
  }

  return (

    <Box className="marco" sx={{ display: 'flex' }}>
      <CssBaseline />

      <Grid
        className='animate__animated animate__fadeIn animate__faster'
        container
        spacing={0}
        direction="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
        sx={{ minHeight: '0vh', backgroundColor: 'white', marginTop: 3 }}
      >

        <Grid>
          <Link component={Link} variant="h6" noWrap className='center' href="/">

            <img
              src={Logo}
              alt="ASL"
              style={{ width: '80px', height: '70px', padding: '0px', margin: '0px' }}
            ></img>
          </Link>
        </Grid>

        <Grid>
          <form action="" id="navegador">
            <ul>
              <li className="button-diagonal"><Link
                className="text" component={Link}
                style={{ textDecoration: 'none', color: 'black' }} href="/">Inicio</Link></li>
              <li className="button-diagonal"><Link
                className="text" component={Link}
                style={{ textDecoration: 'none', color: 'black' }} href="/Catalogo">Catalogo</Link></li>
              <li className="button-diagonal"><Link
                className="text" component={Link}
                style={{ textDecoration: 'none', color: 'black' }} href="/Contacto">Contacto</Link></li>
              <li className="button-diagonal"><Link
                className="text" component={Link}
                style={{ textDecoration: 'none', color: 'black' }} href="/Informacion">Informacion</Link></li>
                <li className="button-diagonal"><Link
                className="text" component={Link}
                style={{ textDecoration: 'none', color: 'black' }} href="/Admin">Admin</Link></li>
            </ul>
          </form>
        </Grid>

        <Grid>
          <span >
            {user.name}
          </span>
          <IconButton sx={{ color: 'black', fontSize: '30px' }} href="/Carrito" className="fa-solid fa-cart-shopping">
          </IconButton>

          <IconButton
            hidden={!loggedIn}
            sx={{ color: 'black', fontSize: '10px' }}
            href="/Auth"
            className="fas fa-sign-out-alt">
            &nbsp;
            Login/Register
          </IconButton>



          <IconButton
            hidden={!loggedIn}
            onClick={startLogout}
            sx={{ color: 'red', fontSize: '10px' }}
            href="/Auth"
            className="fas fa-sign-out-alt">
            &nbsp;
            Salir
          </IconButton>
        </Grid>

      </Grid>
      <Divider />
    </Box>

  )
}
import { Button, CssBaseline, Grid, IconButton, Input, InputAdornment, TextField, Typography, Link, Divider } from '@mui/material'
import { LoginPage } from '../../auth/pages/LoginPage';
import Logo from '../components/ASL_img.png';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import { Box } from '@mui/system';
import { useAuthStore } from '../../hooks';
import React, { useState } from 'react';
import { useEffect } from "react";

export const Navbar = () => {

  const { startLogout, user, status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])
  
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
              {
                (user.type === 'admin')
                  ? (
                    <>
                      
                    </>)
                  : (
                    <>
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
                    </>)
              } 
            </ul>
          </form>
        </Grid>

        <Grid>
          <span >
            {user.name}
          </span>
          <IconButton sx={{ color: 'black', fontSize: '30px' }} href="/Carrito" className="fa-solid fa-cart-shopping">
          </IconButton>
          {
            (status === 'authenticated')
              ? (
                <>
                  <IconButton
                    onClick={startLogout}
                    sx={{ color: 'red', fontSize: '10px' }}
                    href="/Auth"
                    className="fas fa-sign-out-alt">
                    &nbsp;
                    Salir
                  </IconButton>
                </>)
              : (
                <>
                  <IconButton
                    sx={{ color: 'black', fontSize: '10px' }}
                    href="/Auth"
                    className="fas fa-sign-out-alt">
                    &nbsp;
                    Login/Register
                  </IconButton>
                </>)
          }
        </Grid>

      </Grid>
      <Divider />
    </Box>
  )
}
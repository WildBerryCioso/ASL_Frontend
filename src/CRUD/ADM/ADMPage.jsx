import { Button, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";
import { Navbar } from "../components/Navbar";
import { useState } from 'react';
import "./ADMPage.css";
import { CrearProdModal } from './CrearProdModal';

export const ADMPage = () => {

  return (
      <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-evenly"
            sx={{ minHeight: '100vh', backgroundColor: 'white', marginTop: 5 }}
        >

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                item
                xs={12}
                sx={{ height: '100%', width: '100%', backgroundColor: 'white', marginRight: 0, marginLeft: 0, marginTop: 5 }}>
                {/*<Typography variant='h4' color='primary.blanco' sx={{ marginInline: 8 }}> Logo </Typography>*/}


                <h1>Hola ADMIN</h1>
                
            </Grid>
            <CrearProdModal/>
        </Grid >

  )
}



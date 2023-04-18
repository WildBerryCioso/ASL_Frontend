import { Button, Link, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import { Navbar } from "../components/Navbar"
import "./PrincipalPage.css";
import React, { useState } from 'react';

export const Contacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviarFormulario = (event) => {
        event.preventDefault();
        // Aquí es donde se enviarían los datos del formulario al servidor
        // para que el servidor maneje el envío de correo electrónico.
    }


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



                <div className="login-container2">
                    <div className="row">
                        <div className="col-md-6 login-form-1">
                            <h3>Contactanos</h3>
                            <form className='animate__animated animate__fadeIn animate__faster'>
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Correo"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Duda/Inquietud"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="submit"
                                        className="btnSubmit"
                                        value="Enviar"
                                    />
                                </div>
                                <span >
                                    Disclaimer: Uso exclusivo para garantias, cambios o para grandes pedidos.
                                </span>
                            </form>
                        </div>
                        <br />

                    </div>
                    <br />
                    <br />
                </div>
            </Grid>
        </Grid >
    )
}



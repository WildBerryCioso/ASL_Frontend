import { Button, Link, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import { Navbar } from "../components/Navbar"
import "./PrincipalPage.css";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c3m43xj', 'template_uexvf9q', form.current, 'qe-773r59i-vH5hk5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                    <div >
                        <div className="col-md-6 login-form-1">
                            <h3>Contactanos</h3>
                            <hr />
                            <form ref={form} onSubmit={sendEmail} className='animate__animated animate__fadeIn animate__faster'>
                                <div className="form-group mb-2">
                                    <input type="text" name="user_name" className="form-control" placeholder="Nombre completo"/>
                                </div>

                                <div className="form-group mb-3">
                                    <input type="email" name="user_email" className="form-control" placeholder="Correo"/>
                                </div>

                                <div className="form-group mb-3">
                                    <textarea name="message" placeholder="Duda/Inquietud" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="submit" value="Enviar" className="btnSubmit" />
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
    );
};
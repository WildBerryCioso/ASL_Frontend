import { Button, Link, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import "./PrincipalPage.css";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: 'Correo enviado',
            text: "Correo enviado con exito",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
        })
    };

    return (
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



            <Grid className="col-md-6 login-container2">
                <Grid className="row">
                    <Grid className="col-md-6 login-form-1">
                        <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' sx={{ marginInline: 8 }}> Contactanos </Typography>
                        <hr />
                        <form ref={form} onSubmit={sendEmail} className='animate__animated animate__fadeIn animate__faster'>
                            <Grid className="form-group mb-2">
                                <input type="text" name="user_name" className="form-control" placeholder="Nombre completo" />
                            </Grid>

                            <Grid className="form-group mb-3">
                                <input type="email" name="user_email" className="form-control" placeholder="Correo" />
                            </Grid>

                            <Grid className="form-group mb-3">
                                <textarea name="message" placeholder="Duda/Inquietud" className="form-control" />
                            </Grid>
                            <Grid className="form-group mb-3">
                                <input type="submit" value="Enviar" className="btnSubmit" />
                            </Grid>
                            <span >
                                Disclaimer: Uso exclusivo para garantias, cambios o para grandes pedidos.
                            </span>
                        </form>
                    </Grid>
                    <Grid className="col-md-6 login-form-2" >
                        <Grid className="form-group mb-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img className='imga' src="/src/img/Recurso 13@3x.png" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
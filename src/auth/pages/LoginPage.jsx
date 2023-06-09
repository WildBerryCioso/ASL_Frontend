import React from 'react';
import './LoginPage.css';
import { Grid, Link, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Button, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
    registerDirection: '',
    registerNumber: '',
    type: 'user'
}

export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { registerName, registerEmail, registerPassword, registerPassword2, registerDirection,registerNumber, type, onInputChange: onRegisterInputChange } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error')
            return;
        }
        startRegister({ name: registerName, email: registerEmail, password: registerPassword, typeU: type, direction: registerDirection , number: registerNumber});
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en autenticacion', errorMessage, 'error');
        }
    }, [errorMessage])

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

            <Grid className="col-md-6 login-container">
                <Grid className="row">
                    <Grid className="col-md-6 login-form-1">
                        <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h3' color='black' > Ingreso </Typography>
                        <hr />
                        <form onSubmit={loginSubmit} className='animate__animated animate__fadeIn animate__faster'>
                            <Grid className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name='loginEmail'
                                    value={loginEmail}
                                    onChange={onLoginInputChange}
                                />
                            </Grid>
                            <Grid className="form-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name='loginPassword'
                                    value={loginPassword}
                                    onChange={onLoginInputChange}
                                />
                            </Grid>
                            <Grid className="form-group mb-2">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login"
                                />
                            </Grid>
                        </form>
                    </Grid>
                    <br />
                    <Grid className="col-md-6 login-form-2" >
                        <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h3' > Registro </Typography>
                        <hr />
                        <form onSubmit={registerSubmit} className='animate__animated animate__fadeIn animate__faster'>
                            <Grid className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name='registerName'
                                    value={registerName}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>
                            <Grid className="form-group mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name='registerEmail'
                                    value={registerEmail}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>
                            <Grid className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name='registerPassword'
                                    value={registerPassword}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>

                            <Grid className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    name='registerPassword2'
                                    value={registerPassword2}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>

                            <Grid className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Registre direccion residencial"
                                    name='registerDirection'
                                    value={registerDirection}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>

                            <Grid className="form-group mb-2">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Numero de telefono"
                                    name='registerNumber'
                                    value={registerNumber}
                                    onChange={onRegisterInputChange}
                                />
                            </Grid>

                            <Grid className="form-group mb-2">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Crear cuenta" />
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

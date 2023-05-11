import { Button, CssBaseline, Grid, IconButton, Input, InputAdornment, TextField, Typography, Link, Divider } from '@mui/material'
import { LoginPage } from '../../auth/pages/LoginPage';
import Logo from '../components/ASL_img.png';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import { Box } from '@mui/system';


export const PieDePagina = () => {
    return (
        <Box
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-evenly"
            sx={{ minHeight: '0vh', backgroundColor: 'white', marginTop: 3 }}>
                
            <footer className="pie-de-pagina">
                <Grid className="contenedor">
                    <Grid className="informacion">
                        <h3>Información de contacto</h3>
                        <p>Dirección: Carrera 74 # 48 - 37. Centro Comercial Obelisco. Chino deportes y Evolution Sports</p>
                        <p> </p>
                        <p>Teléfono: (+57) 3007644518 - (+57) 300 7644518</p>
                        <p>Correo electrónico: athleticsportline.col@gmail.com</p>
                    </Grid>
                    <Grid className="redes-sociales">
                        <h3>Síguenos en las redes sociales</h3>
                        <ul>
                            <li>
                                <a className="fa-brands fa-facebook" href="https://www.facebook.com/Athleticsportline?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">

                                </a>
                            </li>
                            <li>
                                <a className="fa-brands fa-twitter" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">

                                </a>
                            </li>
                            <li>
                                <a className="fa-brands fa-instagram" href="https://instagram.com/athletic_sportline" target="_blank" rel="noopener noreferrer">

                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </footer>
        </Box>
    );
}
import { FormControl, Grid, Box, IconButton, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import { useServices } from '../../hooks/UseServices';
import { useUiStore } from '../../hooks/useUiStore';
import { useEffect } from 'react'
import "./StylesProductos.css";
import "../pages/PrincipalPage.css"
import { VerProdModal } from '../ADM/VerProdModal';
import { useAuthStore } from '../../hooks';
import Swal from 'sweetalert2';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import download from 'downloadjs';
import emailjs from '@emailjs/browser';


export const ProductosList = ({ Productos }) => {

    const { getProductos } = useServices();
    const { openDateModal } = useUiStore();
    const [cartData, setCartData] = useState([]);
    const [summary, setSummary] = useState(0);
    const [openCart, setOpenCart] = useState(false);
    const { startLogout, user, status, checkAuthToken } = useAuthStore();

    const sendEmail = (base64) => {
        console.log(base64)
        emailjs.send('service_c3m43xj', 'template_odm3lrg', {
            to_name: user.name,
            to_email: user.email,
            to_number: user.number,
            to_direction: user.direction,
            message: 'hola',
            content: base64,
        }, 'qe-773r59i-vH5hk5');
    };

    const createPdf = async (user, cartData, summary) => {
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 30

        const date = new Date();
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        const fecha = day + '/' + month + '/' + year + ' - ' + hours + ':' + minutes + ':' + seconds;

        const imageUrl = '/src/img/Recurso 10@3x.png';
        const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());
        const image = await pdfDoc.embedPng(imageBytes);

        page.drawImage(image, {
            x: 250,
            y: height - 1.5 * 80,
            width: 80,
            height: 100,
        });
        page.drawText(fecha, {
            x: 230,
            y: 10,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        });
        page.drawText('Bienvenido a ASL!', {
            x: 30,
            y: height - 1.5 * 110,
            size: 40,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        page.drawText('El usuario ' + user.name + ' el dia ' + fecha + ' con la siguiente informacion:', {
            x: 30,
            y: height - 1.5 * 130,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        page.drawText('Correo: ' + user.email, {
            x: 30,
            y: height - 1.5 * 140,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        page.drawText('Direccion: ' + user.direction, {
            x: 30,
            y: height - 1.5 * 150,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        page.drawText('Numero de telefono: ' + user.number, {
            x: 30,
            y: height - 1.5 * 160,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        page.drawText('Realizo el siguiente pedido con un valor de ' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COL' }).format(summary) + ":", {
            x: 30,
            y: height - 1.5 * 170,
            size: 12,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
        })
        cartData.map((prod, i) => {
            page.drawText('-' + prod.titulo + ' de referencia ' + prod.referencia + ' y talla ' + prod.talla + '  -   Precio: ' + new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COL' }).format(prod.precio), {
                x: 30,
                y: height - 280 - (i) * fontSize,
                size: 12,
                font: timesRomanFont,
                color: rgb(0, 0, 0),
            })
        })

        const pdfBytes = await pdfDoc.save();
        const pdfDc = await PDFDocument.load(pdfBytes);
        const base64 = await pdfDc.saveAsBase64({ dataUri: true });
        sendEmail(base64);
        download(pdfBytes, "pedido.pdf");
        CleanCart()
        Swal.fire({
            title: 'Pedido solicitado',
            text: "Pedido solicitado y enviado al correo de ASL",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
        })


    }

    const AddToCart = async (item) => {
        const { value: talla } = await Swal.fire({
            title: 'Selecciona la talla',
            input: 'select',
            inputOptions: {
                S: 'S',
                M: 'M',
                L: 'L',
                XL: 'XL'
            },
            inputPlaceholder: 'Talla',
            showCancelButton: true,
            confirmButtonColor: '#a4ce3e',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value) {
                        resolve()
                        const tempInfoCart = [...cartData];
                        if (tempInfoCart.find((temp) => item._id === temp._id)) {
                            const filteredData = tempInfoCart.filter(
                                (finder) => item._id === finder._id
                            );

                            if (filteredData[0].cantidad < item.cantidad - 1) {
                                tempInfoCart.filter((filterData) => {
                                    if (filterData._id === item._id) filterData.cantidad += 1;
                                });
                            }
                        } else {
                            const body = {
                                _id: item._id,
                                titulo: item.titulo,
                                precio: item.precio,
                                cantidad: item.cantidad,
                                descripcion: item.descripcion,
                                img: item.img,
                                referencia: item.referencia,
                                talla: value,
                            };
                            tempInfoCart.push(body);
                        }
                        setCartData(tempInfoCart);
                        Swal.fire({
                            title: 'Producto Agregado',
                            text: item.titulo + " de referencia " + item.referencia + " y de talla " + value,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK',
                        })
                    }
                })
            }
        })
    };

    const RemoveToCart = (index) => {
        console.log(index)
        Swal.fire({
            title: 'Estas seguro?',
            text: "Lo que vas a hacer no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const tempInfoCart = [...cartData];
                tempInfoCart.splice(index, 1);
                setCartData(tempInfoCart);
            }
        })
    };

    const CleanCart = () => {
        const tempInfoCart = [...cartData];
        tempInfoCart.splice(0, tempInfoCart.length);
        setCartData(tempInfoCart);
    };

    useEffect(() => {
        if (cartData.length === 0) {
            return (setSummary(0))
        }

        let totalValues = cartData.reduce(
            (acom, actual) => acom + actual.precio,
            0
        );

        setSummary(totalValues);
    }, [cartData]);

    useEffect(() => {
        checkAuthToken();
    }, [])

    const AbrirVer = (prod) => {
        openDateModal(prod);

        console.log(prod)
    }

    const Logue = () => {
        Swal.fire('¡Debes iniciar sesion!');
    }

    useEffect(() => {
        getProductos()
    }, [])

    return (
        <Grid container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-evenly">
            {Productos.map((prod, i) => (
                <Grid className="page-inner" key={i}>
                    <Grid className="row">
                        <Grid className="el-wrapper">
                            <Grid className="box-up">
                                <img className="img" src={prod.img} alt=""></img>
                                <Grid className="img-info">
                                    <Grid className="info-inner">
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                                            <Typography className="p-name" textAlign="center" fontSize='20px' fontWeight='bold' variant='h4' color='black' sx={{ marginInline: 8 }}> {prod.titulo} </Typography>
                                            <hr />
                                            <span className="p-cantidad">{prod.cantidad}</span>
                                        </Box>
                                    </Grid>
                                    <Grid className="a-size"><span className="size">{prod.descripcion}</span></Grid>
                                </Grid>
                            </Grid>
                            <Grid className="box-down">
                                <Grid className="h-bg">
                                    <Grid className="h-bg-inner"></Grid>
                                </Grid>

                                <Grid className="cart" >
                                    <span className="price">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COL' }).format(prod.precio)}</span>
                                    <span className="add-to-cart">
                                        {
                                            (status === 'authenticated')
                                                ? (<>
                                                    <IconButton
                                                        onClick={() => AddToCart(prod)}
                                                        className="fa-solid fa-cart-shopping"
                                                        sx={{
                                                            left: '60%',
                                                            color: '#a4ce3e',
                                                            backgroundColor: 'white',
                                                            margin: '20px 20px 20px 0px',
                                                            ':hover': { backgroundColor: 'white', opacity: 0.8 },
                                                        }}
                                                    >
                                                    </IconButton>
                                                </>)
                                                : (<>
                                                    <IconButton
                                                        className="fa-solid fa-cart-shopping"
                                                        sx={{
                                                            left: '60%',
                                                            color: '#a4ce3e',
                                                            backgroundColor: 'white',
                                                            margin: '20px 20px 20px 0px',
                                                            ':hover': { backgroundColor: 'white', opacity: 0.8 },
                                                        }}
                                                        onClick={() => Logue()}
                                                    >
                                                    </IconButton>
                                                </>)
                                        }
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <VerProdModal info={(prod)} /> */}
                    < Grid >
                        <>
                            {openCart && (
                                <Grid
                                    className="minicart"
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="space-between">
                                    <Grid
                                        style={{ width: '100%', color: 'red' }}
                                        className="minicart_close fa-solid fa-square-xmark"
                                        onClick={() => setOpenCart(!openCart)}
                                    >
                                    </Grid>
                                    <Grid >
                                        <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > Carrito </Typography>
                                        <hr />
                                        <Grid>
                                            {cartData.length === 0 ? (
                                                <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > No hay productos en el carrito! </Typography>

                                            ) : (
                                                <ul className="product_ul">
                                                    {cartData.map((item, index) => {
                                                        return (
                                                            <li key={index} style={{ width: '100%', padding: '15px' }} className="producto" >
                                                                <img src={item.img} alt="car product" />
                                                                <Grid className="product_info">
                                                                    <Typography style={{ width: '100%', padding: '5px' }} variant='h1' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > {item.titulo} </Typography>
                                                                    <Typography style={{ width: '100%', padding: '5px' }} variant='h1' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > $ {item.precio} </Typography>
                                                                    <Typography style={{ width: '100%', padding: '5px' }} variant='h1' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > {item.referencia} </Typography>
                                                                    <Typography style={{ width: '100%', padding: '5px' }} variant='h1' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > {item.talla} </Typography>
                                                                    <IconButton style={{ width: '100%', color: 'red' }} onClick={() => RemoveToCart(index)}>
                                                                        Eliminar
                                                                    </IconButton>
                                                                </Grid>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                            <hr />
                                            <Grid>
                                                <Typography variant='h1' noWrap component='div' textAlign="center" fontSize='28px' fontWeight='bold' > Sumatoria </Typography>
                                                <Typography variant='h5' noWrap component='div' textAlign="center" fontSize='28px' > TOTAL ${summary} </Typography>
                                                {
                                                    (cartData.length === 0) ?
                                                        (<>

                                                            {/* <form enctype="multipart/form-data" method="post" onSubmit={sendEmail}>
                                                                <label>Attach file:</label>
                                                                <input type="file" name="my_file" />
                                                                <input type="submit" value="Submit"></input>
                                                            </form> */}
                                                        </>) :
                                                        (<>
                                                            <IconButton
                                                                onClick={() => createPdf(user, cartData, summary)}
                                                                className="fa-solid fa-paper-plane"
                                                                sx={{
                                                                    width: '100%',
                                                                    color: '#a4ce3e',
                                                                    backgroundColor: 'white',
                                                                    ':hover': { backgroundColor: 'white', opacity: 0.8 },
                                                                }}
                                                            > Hacer Pedido
                                                            </IconButton>
                                                        </>)
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                            <Grid className="button_cart">
                                <IconButton className="fa-solid fa-cart-shopping" onClick={() => setOpenCart(!openCart)
                                }><p className='cantidad'>{cartData.length}</p>
                                </IconButton>

                            </Grid>
                        </>
                    </Grid>
                </Grid >
            ))
            }
        </Grid >
    )
}

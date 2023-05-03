import { Delete, Edit } from '@mui/icons-material'
import { Button, Grid, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react'
import { useServices } from '../../hooks/UseServices';
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/useUiStore';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./StylesProductos.css";
import "../pages/PrincipalPage.css"
import { VerProdModal } from '../ADM/VerProdModal';


export const ProductosList = ({ Productos }) => {

    const { getProductos, VerProducto } = useServices();
    const { openDateModal } = useUiStore();

    const AbrirVer = (prod) => {
        openDateModal();
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
                <Grid className="page-inner">
                    <Grid className="row">
                        <Grid className="el-wrapper">
                            <Grid className="box-up">
                                <img className="img" src={prod.img} alt=""></img>
                                <Grid className="img-info">
                                    <Grid className="info-inner">
                                        <span className="p-name">{prod.titulo}</span>
                                        <span className="p-cantidad">{prod.cantidad}</span>
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
                                        {/* <IconButton
                                            className="fa-solid fa-cart-shopping"
                                            sx={{
                                                left: '60%',
                                                color: '#a4ce3e',
                                                backgroundColor: 'white',
                                                margin: '20px 20px 20px 0px',
                                                ':hover': { backgroundColor: 'white', opacity: 0.8 },
                                            }}
                                        >
                                         </IconButton> */}
                                        <IconButton
                                            className="fa-solid fa-eye"
                                            sx={{
                                                left: '60%',
                                                color: '#a4ce3e',
                                                backgroundColor: 'white',
                                                margin: '20px 20px 20px 20px',
                                                ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                            }} onClick={() => AbrirVer(prod._id)}>        
                                        </IconButton>
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <VerProdModal info={(prod)}/>
                </Grid>
            ))
            }
        </Grid>
    )
}

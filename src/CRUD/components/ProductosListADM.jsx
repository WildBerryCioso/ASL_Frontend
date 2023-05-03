import { Delete, Edit } from '@mui/icons-material'
import { Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import { useServices } from '../../hooks/UseServices';
import { EditarProdModal } from '../ADM/EditarProdModal';
import Swal from 'sweetalert2';
import { useUiStore } from '../../hooks/useUiStore';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./StylesProductos.css";
import "../pages/PrincipalPage.css"


export const ProductosListADM = ({ Productos }) => {


    const { DeletingProductos, getProductos } = useServices();
    const { OpenSuccess, updateNow } = useUiStore();
    const { openDateModal } = useUiStore();

    const onSubmit = (prod) => {
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
                DeletingProductos(prod);
            }
        })
    }

    const AbrirEditar = (prod) => {
        openDateModal();
        //UpdateProducto(prod);
        //updateNow(actual)
        //OpenSuccess()
    }

    const onOpenModal = () => {
        openDateModal();
    }

    useEffect(() => {
        getProductos();
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
                                        <span className="p-name">{"id: "+ prod._id}</span>
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
                                        <IconButton
                                            className="fa-solid fa-trash-can"
                                            sx={{
                                                left: '40%',
                                                color: 'red',
                                                backgroundColor: 'white',
                                                margin: '5px 20px 5px 5px',
                                                ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                            }} onClick={() => onSubmit(prod)} >
                                        </IconButton>
                                        <IconButton
                                            className="fa-solid fa-pen-to-square"
                                            sx={{
                                                left: '60%',
                                                color: '#a4ce3e',
                                                backgroundColor: 'white',
                                                margin: '5px 20px 5px 5px',
                                                ':hover': { backgroundColor: 'fourth.main', opacity: 0.8 },
                                            }} onClick={onOpenModal}>
                                            <EditarProdModal />
                                        </IconButton>

                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))
            }
        </Grid>
    )
}

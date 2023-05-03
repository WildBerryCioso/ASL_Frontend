import { Button, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import { Navbar } from "../components/Navbar"
import "./PrincipalPage.css"
import React from 'react';
import { useServices } from '../../hooks/UseServices';
import { Producto } from './Producto';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductosList } from '../components/ProductosList';
import { Search } from '@mui/icons-material';
import { CheckingAuth } from '../../ui';
import { VerProdModal } from '../ADM/VerProdModal';

export const Catalogo = () => {

    const [search, setSearch] = useState('');
    const { getProductos } = useServices();
    const { productos } = useSelector(state => state.producto);

    const filteredProducts = () => {

        if (search.length === 0)
            return productos
        //const productosfiltrados = productos;
        const productosfiltrados = productos.filter(prod => prod.nombre.includes(search) || prod.referencia.includes(search))
        return productosfiltrados
    }

    const onSearchChange = ({ target }) => {
        setSearch(target.value);
    }

    useEffect(() => {
        getProductos()
    }, [])

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

            <form autoComplete='off'>
                <TextField
                    id="outlined-start-adornment"
                    placeholder='Buscar'
                    value={search.toLowerCase()}
                    type="text"
                    sx={{ marginInline: 5, width: '260px', backgroundColor: 'white', borderRadius: '10px', marginTop: 2 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                        endAdornment: <InputAdornment position="end"><Button alt="Buscar"><Search /></Button></InputAdornment>
                    }}
                    onChange={onSearchChange}
                />

            </form>

            {Object.keys(productos).length === 0 ? <CheckingAuth />
                : <ProductosList Productos={filteredProducts()} />}


            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                item
                xs={12}
                sx={{ height: '100%', width: '100%', backgroundColor: 'white', marginRight: 0, marginLeft: 0, marginTop: 5 }}>
            </Grid>

            
        </Grid >
    )
}
import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material/'
import "./PrincipalPage.css"
import React from 'react';
import { useServices } from '../../hooks/UseServices';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductosList } from '../components/ProductosList';
import { Search } from '@mui/icons-material';
import { CheckingAuth } from '../../ui';
import Cart from "../components/Cart/cart";

export const Catalogo = () => {

    const [search, setSearch] = useState('');
    const { getProductos } = useServices();
    const { productos } = useSelector(state => state.producto);

    const filteredProducts = () => {

        if (search.length === 0)
            return productos
        //const productosfiltrados = productos;

        const productosfiltrados = productos.filter(prod => prod.titulo.includes(search))
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

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                item
                xs={12}
                sx={{ height: '100%', width: '100%', backgroundColor: 'white', marginRight: 0, marginLeft: 0, marginTop: 5 }}>
                <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' sx={{ marginInline: 8 }}> Catalogo </Typography>
                <form autoComplete='on'>
                    <TextField
                        id="outlined-start-adornment"
                        placeholder='Buscar'
                        value={search}
                        type="text"
                        sx={{ marginInline: 5, width: '260px', backgroundColor: 'white', borderRadius: '10px', marginTop: 2 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                            endAdornment: <InputAdornment position="end"><Button alt="Buscar"><Search /></Button></InputAdornment>
                        }}
                        onChange={onSearchChange} />
                </form>
            </Grid>
            <Grid>
                {Object.keys(productos).length === 0 ? <CheckingAuth />
                    : <ProductosList Productos={filteredProducts()} />}
            </Grid>
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
            {/* <Cart/> */}
        </Grid >
    )
}
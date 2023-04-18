import { Button, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import { Navbar } from "../components/Navbar"
import "./PrincipalPage.css"
import React from 'react';
import { Producto } from './Producto';

const productsList = [
    {
        id: 1,
        name: 'Camiseta A',
        description: 'Camiseta del Wolverhampton Football Club',
        price: 100,
        image: '/src/img/1.jpg',
        stock: 100,
    },
    {
        id: 2,
        name: 'Camiseta B',
        description: 'Camiseta del Stourbridge F.C.',
        price: 200,
        image: '/src/img/2.jpg',
        stock: 100,
    },
    {
        id: 3,
        name: 'Camiseta C',
        description: 'Camiseta del Fútbol Club Barcelona',
        price: 300,
        image: '/src/img/3.jpg',
        stock: 100,
    },
    {
        id: 4,
        name: 'Camiseta D',
        description: 'Camiseta del Wolverhampton Football Club',
        price: 100,
        image: '/src/img/1.jpg',
        stock: 100,
    },
    {
        id: 5,
        name: 'Camiseta E',
        description: 'Camiseta del Stourbridge F.C.',
        price: 200,
        image: '/src/img/2.jpg',
        stock: 100,
    },
    {
        id: 6,
        name: 'Camiseta F',
        description: 'Camiseta del Fútbol Club Barcelona',
        price: 300,
        image: '/src/img/3.jpg',
        stock: 100,
    },

];

const items = ['Inicio', 'Acerca de', 'Contacto', 'Hola', 'Pai'];

export const Catalogo = ({ name, description, price, image }) => {

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
            <Grid>
                <div className="sidebar">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Grid>

            <Grid>
                <div className="products-catalog">
                    {productsList.map(product => (
                        <Producto
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            stock={product.stock}
                        />
                    ))}
                </div>
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
        </Grid >
    )
}


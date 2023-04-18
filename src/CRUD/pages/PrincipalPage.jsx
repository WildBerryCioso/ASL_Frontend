import { Button, Grid, IconButton, Input, InputAdornment, TextField, Typography } from '@mui/material/'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../../router/AppRouter"
import "./PrincipalPage.css"

export const PrincipalPage = () => {

    const images = [
        {
            url: "/src/img/1.jpg",
            title: 'Imagen 1',
            description: 'Descripción de la imagen 1'
        },
        {
            url: "/src/img/2.jpg",
            title: 'Imagen 2',
            description: 'Descripción de la imagen 2'
        },
        {
            url: "/src/img/3.jpg",
            title: 'Imagen 3',
            description: 'Descripción de la imagen 3'
        },
        {
            url: "/src/img/4.jpg",
            title: 'Imagen 4',
            description: 'Descripción de la imagen 3'
        },
    ];

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

                <form action="">
                    <section>
                        <img src="src\img\1.jpg" alt="" />
                        <img src="src\img\2.jpg" alt="" />
                        <img src="src\img\3.jpg" alt="" />
                        <img src="src\img\4.jpg" alt="" />
                        <img src="src\img\5.jpg" alt="" />
                    </section>
                </form>

                <br />
                <br />

                <div className='gallery'>
                    {images.map((image) => (
                        <div key={image.url}>
                            <h3>{image.title}</h3>
                            <img  src={image.url} alt={image.title} />
                            <p>{image.description}</p>
                        </div>
                    ))}
                </div>

            </Grid>

        </Grid >
    )
}



import { Grid, Typography } from '@mui/material/'
import "./PrincipalPage.css"

export const PrincipalPage = () => {

    const images = [
        {
            url: "/src/img/Pacifico.png",
            title: 'Colección PACIFICO',
        },
        {
            url: "/src/img/Animales.png",
            title: 'Colección ANIMALES',
        },
        {
            url: "/src/img/Etnias.png",
            title: 'Colección ETNIAS',
        },
        {
            url: "/src/img/Clasic.png",
            title: 'Colección CLASIC',
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

                <hr />
                <Grid className='gallery'>
                    {images.map((image) => (
                        <Grid className='img' key={image.url}>
                            <Typography className="p-name" textAlign="center" fontSize='20px' fontWeight='bold' variant='h4' color='black' sx={{ marginInline: 8 }}>{image.title}</Typography>
                            <img className='img' src={image.url} alt={image.title} />
                        </Grid>
                    ))}
                </Grid>
                <br />
            </Grid>
        </Grid >
    )
}



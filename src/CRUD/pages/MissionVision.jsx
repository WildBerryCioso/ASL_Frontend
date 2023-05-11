import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import "./PrincipalPage.css"

export const MissionVision = ({ mision, vision, presentacion, encuentranos, encuentranos2, encuentranos3 }) => {

    const panels = [
        {
            title: 'Presentación',
            content:
                <Box m={5} className='divborder'>
                    <Typography m={5} variant="h4">Presentación</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\1.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{presentacion}</Typography>
                    </Box>
                </Box>
        },
        {
            title: 'Mision',
            content:
                <Box m={5} className='divborder' >
                    <Typography m={5} variant="h4">Misión</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\2.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{mision}</Typography>
                    </Box>
                </Box>
        },
        {
            title: 'Visión',
            content:
                <Box m={5} className='divborder'>
                    <Typography m={5} variant="h4">Visión</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\3.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{vision}</Typography>
                    </Box>
                </Box>
        },
        {
            title: 'Encuentranos',
            content:
                <Box m={5} className='divborder'>
                    <Typography m={5} variant="h4">Encuentranos</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\3.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{encuentranos}</Typography>
                    </Box>
                </Box>
        },
        {
            title: 'Encuentranos2',
            content:
                <Box m={5} className='divborder'>
                    <Typography m={5} variant="h4">Encuentranos</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\3.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{encuentranos2}</Typography>
                    </Box>
                </Box>
        },
        {
            title: 'Encuentranos3',
            content:
                <Box m={5} className='divborder'>
                    <Typography m={5} variant="h4">Encuentranos</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Typography m={5}><section className='imagen'><img src="src\img\3.jpg" alt="" /></section></Typography>
                        <Typography m={5} className='texto' variant="body3">{encuentranos3}</Typography>
                    </Box>
                </Box>
        }
    ];

    return (
        <Grid>
            <Box  className='divborder'>
                <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' m={3}>Presentación</Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography m={3}><section className='imagen'><img src="src\img\2.jpg" alt="" /></section></Typography>
                    <Typography m={3} className='texto' variant="body3">{presentacion}</Typography>
                </Box>
            </Box>
            <Box m={3} className='divborder' >
                <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' m={3}>Misión</Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography m={3}><section className='imagen'><img src="src\img\3.jpg" alt="" /></section></Typography>
                    <Typography m={3} className='texto' variant="body3">{mision}</Typography>
                </Box>
            </Box>
            <Box m={3} className='divborder'>
                <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' m={3}>Visión</Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography m={3}><section className='imagen'><img src="src\img\4.jpg" alt="" /></section></Typography>
                    <Typography m={3} className='texto' variant="body3">{vision}</Typography>
                </Box>
            </Box>
            <Box m={3} className='divborder'>
                <Typography textAlign="center" fontSize='40px' fontWeight='bold' variant='h4' color='black' m={3}>Puntos Aliados</Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography m={3}><section className='imagen'><img src="src\img\5.jpg" alt="" /></section></Typography>
                    <Typography m={3} className='texto' variant="body3">{encuentranos2}</Typography>
                    <Typography m={3} className='texto' variant="body3">{encuentranos3}</Typography>
                </Box>
            </Box>
        </Grid>
    );
}

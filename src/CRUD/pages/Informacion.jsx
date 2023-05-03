import { Grid, TextField, Typography, Box } from '@mui/material/'
import { AppRouter } from "../../router/AppRouter"
import { Navbar } from "../components/Navbar"
import "./PrincipalPage.css"
import { MissionVision } from './MissionVision'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'


// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523
// };

export const Informacion = () => {

    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "YOUR_API_KEY"
    // })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);

    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return /*isLoaded ?*/ (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="row"
            alignItems="flex-start"
            justifyContent="space-evenly"
            item
            xs={12}
            sx={{ minHeight: '100vh', backgroundColor: 'white', marginTop: 5, marginRight: 0, marginLeft: 0 }}>

            <MissionVision
                presentacion="Somos una marca colombiana de licras deportivas multifuncionales; fundada en el año 2010. 
                        Nacimos por la necesidad de llevar protección corporal en diferentes ámbitos, tanto deportivos 
                        como cotidianos. Nuestra historia, acompañada de nuestra inspiración y esencia, nos ha hecho la 
                        marca que somos hoy, y la que pretendemos ser de cara al futuro de la mano con nuestra misión y 
                        visión, que nos permiten determinar con ambición y seguridad, todo aquello para lo que Athletic 
                        Sport Line está llamado a ser. 

                        Nuestros diferentes productos nos han caracterizado a lo largo del tiempo por brindar a nuestros 
                        clientes: comodidad, calidad, libertad, innovación, durabilidad, sentido de pertenencia, y lo que 
                        se convierte en el complemento y valor diferencial de nuestra marca: una razón social; y son nuestros 
                        consumidores a quienes buscamos siempre ofrecerles confort, satisfacción y seguridad, proveyendo 
                        (entregando, brindando) prendas óptimas para sus desarrollos y prácticas cotidianas."

                mision="Nuestra misión como marca es ser tu segunda piel. Buscamos que más allá de llevar y vestir 
                        una prenda, esta sea una más de ti, una sola piel. Es por eso que, se convierte más que en 
                        un trabajo, nuestra pasión y desafío llevarles a ustedes, como clientes, usuarios, 
                        representantes y exponentes de nuestra marca, las condiciones del más alto nivel y rendimiento, 
                        para que sus objetivos vayan más allá de la propia preocupación."

                vision="Para el año 2033 seremos una marca deportiva consolidada en el mercado deportivo y casual a 
                        nivel nacional; suministrando licras deportivas multifuncionales, reconocidas por todas las 
                        características que nos brindan un valor único y diferencial, sin dejar a un lado nuestro 
                        compromiso con la responsabilidad social y el cuidado del medio ambiente."
                encuentranos="Que estarían ubicados en:"
                encuentranos2=" 1️⃣ Calle 50 # 77B - 23. Bicy Hoyos."
                encuentranos3=" 2️⃣ Politécnico Colombiano Jaime Isaza Cadavid (ustedes me ayudan con la ubicación que no recuerdo el bloque)"
            />

            {/* <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <></>
            </GoogleMap> */}
        </Grid >
    ) //: <></>
}



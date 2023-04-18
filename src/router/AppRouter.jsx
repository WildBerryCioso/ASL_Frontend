import { Navigate, Route, Routes } from "react-router-dom"
import { PrincipalPage } from "../CRUD/pages/PrincipalPage";
import { LoginPage } from '../auth/pages/LoginPage';
import { Catalogo } from "../CRUD/pages/Catalogo";
import { Contacto } from "../CRUD/pages/Contacto";
import { ADMPage } from "../CRUD/ADM/ADMPage";
import { Informacion } from "../CRUD/pages/Informacion";
import { Carrito } from "../CRUD/pages/Carrito";
import { useAuthStore } from '../hooks'
import { getEnvVariables } from "../helpers";
import { useEffect } from "react";

export const AppRouter = () => {

  const {user , status, checkAuthToken} = useAuthStore(); //'not-authenticated'

  useEffect(() => {
    checkAuthToken();
  }, [])

  if( status === 'checking'){
    return(
      <h3>Cargando...</h3>
    )
  }

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route exact path="/*" element={<PrincipalPage />} />
              <Route path="/" element={<PrincipalPage />} />
              <Route path="/Auth" element={<LoginPage />} />
              <Route path="/Catalogo" element={<Catalogo />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Informacion" element={<Informacion />} />
              <Route path="/Carrito" element={<LoginPage />} />
              
            </>)
          : (
            <>
              <Route path="/*" element={<Navigate to="/" /> }/>
              <Route path="/" element={<PrincipalPage />} />
              <Route path="/Catalogo" element={<Catalogo />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Informacion" element={<Informacion />} />
              <Route path="/Carrito" element={<Carrito />} />    
              <Route path="/Admin" element={<ADMPage />} />         
            </>)

      }
    </Routes>
  )
}

/* 
<Route path="/Checkout" element={<Checkout />} />
*/
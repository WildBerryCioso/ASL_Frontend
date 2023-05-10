import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./CRUD/components/Navbar"
import { PieDePagina } from "./CRUD/components/PieDePagina"
import { AppRouter } from "./router/AppRouter"
import { Provider } from "react-redux"
import { store } from './store';
import { AppTheme } from './theme/AppTheme';
import './Principal.css'


export const Principal = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <Navbar />
          <AppRouter />
          <PieDePagina />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}


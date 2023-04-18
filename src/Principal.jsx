import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./CRUD/components/Navbar"
import { PieDePagina } from "./CRUD/components/PieDePagina"
import { AppRouter } from "./router/AppRouter"
import { Provider } from "react-redux"
import { store } from './store';

export const Principal = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <PieDePagina />
      </BrowserRouter>
    </Provider>
  )
}


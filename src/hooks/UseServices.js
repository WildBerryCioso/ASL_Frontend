import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { ASL } from "../api";
import { onProductos, onProducto, onAddNewProductos, onChecking } from "../store";
import { fileUpload } from "../helpers/FileUpload";

export const useServices = () => {

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.auth);

    //Ya
    const getProductos = async () => {
        try {
            const { data } = await ASL.get('/productos');
            console.log(data)
            dispatch(onProductos(data.producto));
            console.log(data.producto);

            return{data}
        } catch (error) {
            console.log(error)
        }
    }

    //Ya
    const savingProductos = async (values, file = []) => {

        //dispatch(onChecking());
        try {
            const imagen = await fileUpload(file[0], 'ASL-img');
            const { date } = await ASL.get('/productos');

            console.log(values._id)

            if (values._id) {
                // Actualizando
                values.img = imagen;
                const { data } = await ASL.put(`/productos/${values._id}`, values);
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                console.log(data)
                dispatch(onProductos(data.producto));
                if (data.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El producto fue actualizado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            } else {
                //Creando

                const { data } = await ASL.post('/productos', { titulo: values.titulo, img: imagen, cantidad: values.cantidad, precio: values.precio, descripcion: values.descripcion });

                dispatch(onAddNewProductos({ ...data.producto, user }));
                console.log(data)
                if (data.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El producto fue creado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }


        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    //Ya - Ultimar detalles
    const DeletingProductos = async (prod) => {

        console.log(prod._id)
        try {
            const { data } = await ASL.delete(`/productos/${prod._id}`);
            console.log(data)
            dispatch(onProductos(data.producto));
            if (data.ok) {
                Swal.fire(
                    'Elimniado!',
                    'El producto fue eliminado con exito.',
                    'success'
                )
            }
            getProductos();
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

    const UpdateProducto = async (prod) => {

        try {
            const imagen = await fileUpload(file[0], 'ASL-img');
            if (values.id) {
                // Actualizando
                const { data } = await ASL.put(`/productos/${values.id}`, values);
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                console.log(data)
                dispatch(onProductos(data.producto));
                if (data.ok) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'El producto fue actualizado con exito!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return;
            }
            //Creando

            const { data } = await ASL.post('/productos', { titulo: values.titulo, img: imagen, cantidad: values.cantidad, precio: values.precio, descripcion: values.descripcion });

            dispatch(onAddNewProductos({ ...data.producto, user }));
            console.log(data)
            if (data.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'El producto fue creado con exito!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }


    }

    const VerProducto = async (prod, Producto) => {

        try {
            let element
            for (let i = 0; i < Producto.length; i++) {
                if (prod === Producto[i]._id) {
                    element = Producto[i];
                }
            }

            return {
                element
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        //metodos
        getProductos,
        savingProductos,
        DeletingProductos,
        UpdateProducto,
        VerProducto
    }
}
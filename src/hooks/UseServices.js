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
            //console.log(data)
            dispatch(onProductos(data.producto));
            //console.log(data.producto);

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

            if (values._id) {
                // Actualizando
                values.img = imagen;
                const { data } = await ASL.put(`/productos/${values._id}`, values);
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

                const { data } = await ASL.post('/productos', { referencia: values.referencia , titulo: values.titulo, img: imagen, cantidad: values.cantidad, precio: values.precio, descripcion: values.descripcion });

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

    //Ya
    const DeletingProductos = async (prod) => {
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
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
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
        VerProducto
    }
}
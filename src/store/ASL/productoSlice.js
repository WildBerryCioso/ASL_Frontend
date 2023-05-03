import { createSlice } from '@reduxjs/toolkit';

export const productoslice = createSlice({
    name: 'producto',
    initialState: {
        productos: {},
    },
    reducers: {
        onProductos: (state, { payload }) => {
            state.productos = payload
        },
        onProducto: (state, { payload }) => {
            state.productos = payload
        },
        onAddNewProductos: ( state, { payload }) => {
            state.productos.push( payload );
        },
        onUpdateProductos: ( state, { payload } ) => {
            state.productos = state.productos.map(producto => {
                if (producto.id === payload.id) {
                    return payload;
                }

                return producto;
            });
        },
    }
});


// Action creators are generated for each case reducer function
export const { onProductos, onProducto, onUpdateProductos, onAddNewProductos} = productoslice.actions;
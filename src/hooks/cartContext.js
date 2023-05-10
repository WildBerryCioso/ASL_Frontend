import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const cartContext = () => {
    const [cartData, setCartData] = useState([]);
    const [total, setTotal] = useState([]);

    const AddToCart = (item) => {
        
        const tempInfoCart = [...cartData];

        if (tempInfoCart.find((temp) => item._id === temp._id)) {
            const filteredData = tempInfoCart.filter(
                (finder) => item._id === finder._id
            );

            if (filteredData[0].cantidad < item.cantidad - 1) {
                tempInfoCart.filter((filterData) => {
                    if (filterData._id === item._id) filterData.cantidad += 1;
                });
            }
        } else {
            const body = {
                _id: item._id,
                titulo: item.titulo,
                precio: item.precio,
                cantidad: item.cantidad,
                descripcion: item.descripcion,
                img: item.img,
            };
            tempInfoCart.push(body);
        }
        setCartData(tempInfoCart);
        console.log(cartData)
    };


    const RemoveToCart = (index) => {
        const tempInfoCart = [...cartData];
        tempInfoCart.splice(index, 1);

        setCartData(tempInfoCart);
    };

    //Se edita la cantidad de productos por cada item
    const editarCantidad = (item, flag) => {
        console.log(item, flag);
        if (flag) {
            item.productQuantity++;
        } else {
            item.productQuantity--;
        }
    }

    //retorna el contexto
    return {
        cartData,
        total,
        setTotal,
        AddToCart,
        RemoveToCart, 
        editarCantidad,
    }
}
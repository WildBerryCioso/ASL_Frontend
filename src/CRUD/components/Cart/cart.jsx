import React, { useEffect, useState } from "react";
import "./cart.css";
import { cartContext } from "../../../hooks";

export const Cart = (data) => {
  const { cartData, RemoveToCart, editarCantidad } = cartContext();

  const [openCart, setOpenCart] = useState(false);
  const [summary, setSummary] = useState(0);
  const [cupon, setCupon] = useState(0);

  

  useEffect(() => {
    console.log(cartData)
    if (cartData.length === 0) return;

    let totalValues = cartData.reduce(
      (acom, actual) => acom + actual.precio,
      0
    );

    setSummary(totalValues);
  }, [cartData]);
  
  return (
    <>
      {openCart && (
        <div className="minicart">
          <span
            className="minicart_close"
            onClick={() => setOpenCart(!openCart)}
          >
            &#10005;
          </span>
          <div>
            <h1>Carrito</h1>
            <div>
              {cartData.length === 0 ? (
                <p>No hay productos en el carrito!</p>
              ) : (
                <ul>
                  {cartData.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src={item.img} alt="car product" />
                        <div className="product_info">
                          <p className="product_info_name">{item.titulo}</p>
                          <p>$ {item.precio}</p>
                          <p className="product_info_cantidad">
                            Cantidad:{" "}
                            <button onClick={() => editarCantidad(item, true)}>
                              +{" "}
                            </button>
                            <button onClick={() => editarCantidad(item, false)}>
                              {" "}
                              -
                            </button>
                          </p>
                          <button onClick={() => RemoveToCart(index)}>
                            Eliminar
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <div>
            <h1>Summary</h1>
            <h3>ENTER COUPON CODE</h3>
            <input
              type="number"
              placeholder="Cupón"
              onKeyUp={(e) => setCupon(e.target.value)}
              max="100"
              min="0"
            />
            <p>SUBTOTAL ${summary}</p>
            <p>SHIPPING FREE</p>
            <p>COUPON ${cupon}</p>
            <h3>TOTAL ${summary - cupon < 0 ? 0 : summary - cupon}</h3>
          </div>
        </div>
      )}
      <div className="button_cart">
        <button onClick={() => setOpenCart(!openCart)}>Cart</button>
      </div>
    </>
  );
};

export default Cart;

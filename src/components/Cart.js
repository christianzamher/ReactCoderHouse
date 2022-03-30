import React from "react";
import { useContext } from "react";
import { cartContext } from "./CartContext";
import {Card,  Button } from "react-bootstrap";


const Cart = () => {
  const { cart, removeItem,clear,precioTotal, addItem } = useContext(cartContext);
  

  return (
    <>
    <div className = "compraContainer">
      <h2 className="CartH2">Detalles de su compra</h2>
     
      <h2>Total: $ {precioTotal()} </h2>
        
      <Button variant="danger" onClick={clear}>Clear</Button>

    </div>
    
      {cart.map((elemento) => (
        <div key={elemento.producto.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src= {`/${elemento.producto.imagen}`} />
            <Card.Body>
              <Card.Title>{elemento.producto.nombre}</Card.Title>
              <Card.Text>{elemento.producto.descripcion}</Card.Text>
              <Card.Text>{`$${elemento.producto.precio}`}</Card.Text>
              <Card.Text>Cantidad: {elemento.cantidad} </Card.Text>
              <Card.Text>SubTotal: ${elemento.cantidad * elemento.producto.precio} </Card.Text>

              <Button variant="danger" onClick={()=>removeItem(elemento.producto.id)}>X</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Cart;

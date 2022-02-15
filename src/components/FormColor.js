import React, { useEffect, useState } from "react";
import "../App.css";
import { Form, Button } from "react-bootstrap";
import ListaCards from "./ListaCards";
const FormColor = () => {

  const arregloConsola = JSON.parse(localStorage.getItem('paletaColores'))|| [];
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState(arregloConsola);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor("");
  };

  useEffect(()=>{
  localStorage.setItem('paletaColores', JSON.stringify(arregloColores));
},[arregloColores]);

  const borrarColor = (color)=>{
    let arregloModificado = arregloColores.filter((item)=> item!== color);
    setArregloColores(arregloModificado);
  }

  console.log(color);
  return (
    <div className="container">
      <div className=" d-flex bg-light">
        <div className="cuadrado" style={{background:(color)}}></div>
        <Form className="w-75 ms-5" onSubmit={handleSubmit}>
          <Form.Group className="my-2">
            <Form.Label>Ingrese un color en ingles o hexadecimal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: blue"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="my-3 w-100">
            Guardar
          </Button>
        </Form>
      </div>
      <section>
        <ListaCards color={color} arregloColores={arregloColores} borrarColor={borrarColor}></ListaCards>
      </section>
    </div>
  );
};

export default FormColor;

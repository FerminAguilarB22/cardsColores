import React from "react";
import { ListGroup } from "react-bootstrap";
import Cards from "./Cards";
const ListaCards = (props) => {
  return (
    <div className='container my-4 d-flex justify-content-center'>
      <ListGroup className='d-flex flex-md-row flex-wrap'>{
          props.arregloColores.map((item,posicion)=><Cards key={posicion} color={item} borrarColor={props.borrarColor}></Cards>)
      }
        
      </ListGroup>
    </div>
  );
};

export default ListaCards;

import React from "react";
import { Card,Button } from "react-bootstrap";
const Cards = (props) => {
  return (
    <div className='mx-3 my-3'>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title className='text-center'>{props.color}</Card.Title>
          <div className='d-flex justify-content-center my-3'>
            <div className="cuadrado" style={{background:(props.color)}}></div>
            </div>
          <Button variant='danger' className='w-100' onClick={()=>props.borrarColor(props.color)}> Borrar </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;

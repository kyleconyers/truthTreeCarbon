import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ name, population, carbon }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
          {name && <h5 className="font-italic">{name}</h5>}
          <p>{carbon}</p>
          <p>{population}</p>
          <p>{name}</p>
        </Col>
        {/* <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col> */}
      </Row>
      {/* <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {population}</p>
        </Col>
      </Row> */}
      <Row>
        {/* <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col> */}
        <Col size="12 sm-8 md-10">
          <p>{carbon}</p>
          <p>{population}</p>
          <p>{name}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;

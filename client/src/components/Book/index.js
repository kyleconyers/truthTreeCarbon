import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ NAME, POPULATION, CARBON }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{NAME}</h3>
          {NAME && <h5 className="font-italic">{NAME}</h5>}
          <p>{CARBON}</p>
          <p>{POPULATION}</p>
          <p>{NAME}</p>
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
          <p>{CARBON}</p>
          <p>{POPULATION}</p>
          <p>{NAME}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;

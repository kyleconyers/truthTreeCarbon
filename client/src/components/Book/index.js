import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ NAME, POPULATION, CARBON, UNITTYPE, NAME_0, NAME_1, NAME_2}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          
          <p className="font-italic">Organization Type: {UNITTYPE}</p>
          <h3>Name if Nation: {NAME}</h3>
          {/* {NAME && <h5 className="font-italic">{NAME}</h5>} */}
          <h5>Nation if state or county:  {NAME_0}</h5>
          <h5>State:  {NAME_1}</h5>
          <h5>County:  {NAME_2}</h5>
          <p>Carbon: {CARBON}</p>
          <p>Population: {POPULATION}</p>
          
          
          {/* <p>{NAME}</p> */}
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
        {/* <Col size="12 sm-8 md-10">
          <p>{CARBON}</p>
          <p>{POPULATION}</p>
          <p>{NAME}</p>
        </Col> */}
      </Row>
    </ListItem>
  );
}

export default Book;

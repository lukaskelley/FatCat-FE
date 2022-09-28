import React from "react";
import { Col, Row } from "antd";
import "./ServiceCard.css";

export const ServiceCard = (props) => {
  const { icon, title, contain, link } = props;

  return (
    <Row className="serviceContainer">
      <Col lg={5} className="serviceIcon">
        <i className={icon} />
      </Col>
      <Col lg={19} className="serviceDetailContainer">
        <div className="serviceDetail">
          <h1>{title}</h1>
          <p>{contain}</p>
        </div>
        <a target="_blank" rel="noreferrer" href={link}>
          Learn More
        </a>
      </Col>
    </Row>
  );
};

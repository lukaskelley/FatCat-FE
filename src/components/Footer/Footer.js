import React from "react";
import { Col, Row } from "antd";
import { GoTopButton } from "./GoTopButtton";
import 'antd/dist/antd.min.css';
import "./Footer.css";

export const Footer = () => {
  return (
    <section id="Footer">
      <Row className="">
        <Col xs={24} sm={20} md={6} lg={1} />
        <Col xs={24} sm={20} md={12} lg={20} className="linkTeam">
          Join our <a className="linkItem">Discord</a> and <a className="linkItem">Twitter</a> to stay up to date.
        </Col>
        <Col xs={24} sm={20} md={6} lg={3} className="contactMenu">
        </Col>
      </Row>
      <GoTopButton />
    </section>
  );
};

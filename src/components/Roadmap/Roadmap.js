import React from "react";
import { Col, Row } from "antd";
import "./Roadmap.css";
import 'antd/dist/antd.min.css';
import RoadMapIMG from "../../assets/roadmap.jpg"

export const Roadmap = () => {

  return (
    <section id="roadmap">
       <Row>
        <Col lg={2} md={2}></Col>
        <Col lg={20} md={20}>
          <img src={RoadMapIMG } alt="" className="roadmapIMG" style={{width:"100%"}}/>
        </Col>
        <Col lg={2} md={2}></Col>
      </Row>
    </section>
  );
};

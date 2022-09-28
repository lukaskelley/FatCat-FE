import React from "react";
import { Col, Row } from "antd";
import "./Membership.css";
import 'antd/dist/antd.min.css';
import MembershipIMG from "../../assets/membership-benefits.jpg"

export const Membership = () => {

  return (
    <section id="membership">
       <Row>
        <Col lg={2} md={2}></Col>
        <Col lg={20} md={20}>
          <img src={MembershipIMG } alt="" className="membershipIMG" style={{width:"100%"}}/>
        </Col>
        <Col lg={2} md={2}></Col>
      </Row>
    </section>
  );
};

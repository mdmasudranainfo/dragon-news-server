import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Sheard/Header/Header";
import LestSide from "../Sheard/LeftSide/LestSide";
import RightSide from "../Sheard/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2 d-none d-lg-block">
            <LestSide></LestSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;

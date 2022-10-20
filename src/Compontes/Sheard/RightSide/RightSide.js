import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Carousel from "react-bootstrap/Carousel";
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";

import brand1 from "../../../assets/image/Brand1.png";
import brand2 from "../../../assets/image/Brand2.png";
import { AuthContext } from "../../Context/ContextProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleSingProvider = new GoogleAuthProvider();

const RightSide = () => {
  const { googleSing } = useContext(AuthContext);
  const GoogleSingHandle = () => {
    googleSing(googleSingProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
    //
    //
  };

  return (
    <div>
      <ButtonGroup vertical="mb-2">
        <Button onClick={GoogleSingHandle} variant="outline-primary mb-1">
          <FaGoogle /> Login With Facebook
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>

      <div className="mt-3">
        <small>Find US On</small>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> What's Up
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      {/* carpsel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightSide;

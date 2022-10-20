import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsSamary = ({ item }) => {
  const { details, rating, author, image_url, title, total_view, _id } = item;

  return (
    <Card className="mb-2">
      <Card.Header>
        <div className=" d-flex justify-content-between align-items-center">
          <div className=" d-flex ">
            <Image
              style={{ width: 50, height: 50 }}
              src={author?.img}
              className="rounded-circle me-2"
            ></Image>
            <div className="">
              <p className="m-0">{author?.name}</p>
              <p className="mb-0">{author?.published_date}</p>
            </div>
          </div>
          <div className="">
            <FaShareAlt></FaShareAlt>
            <FaRegBookmark></FaRegBookmark>
          </div>
        </div>
        {/* 

        // 
        // 
         */}
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="bottom" src={image_url} />

        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250)}{" "}
              <Link to={`/news/${_id}`}>Read More...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="">
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating.number}</span>
        </div>
        <div className="">
          <FaEye className="me-2"></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSamary;

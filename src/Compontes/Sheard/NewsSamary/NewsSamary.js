import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsSamary = ({ item }) => {
  const { details, author, image_url, title, total_view } = item;
  console.log(item);
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
              {details.slice(0, 250)} <Link>Read More...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsSamary;

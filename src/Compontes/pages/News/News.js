import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
// import { Image } from "react-bootstrap";

const News = () => {
  const News = useLoaderData();
  const {
    title,
    author,
    published_date,
    rating,
    image_url,
    details,
    category_id,
  } = News;

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between">
          <p>Athor:{author.name}</p>
          <p> Date:{author.published_date}</p>
          <p>
            <FaStar></FaStar> {rating.number}
          </p>
        </div>
        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>{details}</Card.Text>

        <Link to="/">
          <Button variant="primary">Back to Topic</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LestSide = () => {
  const [catagorys, setCatagorys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCatagorys(data));
  }, []);
  return (
    <div>
      {catagorys.map((catagory) => (
        <p key={catagory.id}>
          <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>{" "}
        </p>
      ))}
    </div>
  );
};

export default LestSide;

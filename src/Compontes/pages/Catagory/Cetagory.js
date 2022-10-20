import React from "react";
import { useLoaderData } from "react-router-dom";

const Cetagory = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1>Cetagory {data.length}</h1>
    </div>
  );
};

export default Cetagory;

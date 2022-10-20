import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSamary from "../../Sheard/NewsSamary/NewsSamary";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      {/* <h1>Home section {data.length}</h1> */}

      {data.map((item) => (
        <NewsSamary item={item}></NewsSamary>
      ))}
    </div>
  );
};

export default Home;

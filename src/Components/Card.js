import React from "react";

const Card = ({ data }) => {
  return (
    <div className="section">
      <h2>{data?.price}</h2>
      <h2>{data?.description}</h2>
      <h2>{data?.category}</h2>
      <h2>{data?.rating?.rate}</h2>
    </div>
  );
};

export default Card;

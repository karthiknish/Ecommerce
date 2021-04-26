import React from "react";
import { Link } from "react-router-dom";

const Cardscg = ({ title }) => {
  return (
    <Link to={`/Shop/?cg=${title}`}>
      <div
        style={{
          background: `url(${
            title === "Women"
              ? images[0]
              : title === "Men"
              ? images[1]
              : images[2]
          })no-repeat center top/cover`,
        }}
        className="cardscg"
      >
        <h1>{title}</h1>
        <p className="ShopNowcg">Shop Now</p>
      </div>
    </Link>
  );
};
const images = [
  "https://i.imgur.com/ugsxgsY.jpg",
  "https://i.imgur.com/roN4Tqt.jpg",
  "https://images.unsplash.com/photo-1515204230490-1ad00b70ed3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
];
export default Cardscg;

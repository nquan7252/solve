import * as React from "react";
import { Component } from "react";
import './Card.css'
import { Link } from "react-router-dom";
interface CardProp{
  title:string;
  desc:string;
  img:string;
  url:string;
}
function Card({ title, desc, img, url }:CardProp) {
  return (
    <Link to={url}>
    <div className="card">
      <span className="img-container">
        <img src={require(`../Assets/${img}`)}></img>
      </span>
      <span className="info-container">
        <h4>{title}</h4>
        <span>{desc}</span>
      </span>
    </div>
    </Link>
  );
}

export default Card;

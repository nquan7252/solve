import React, { Component } from "react";
import { Link } from "react-router-dom";
// import background from "../Assets/wave.svg";
import Card from "../Components/Card.tsx";
import Header from "../Components/Header.tsx";
import "./MainPage.css";
function MainPage() {
  const products = [
    {
      title: "Automatic Alignment",
      desc: "Automatically detect and generate correspondence points between 2 images.",
      img: "alignment.png",
      url: "/alignment",
    },
    {
      title: "Sudoku Solver",
      desc: "Solves sudoku puzzles using computer vision and machine learning.",
      img: "sudoku.png",
      url: "/sudoku",
    },

    {
      title: "Morph Sequence",
      desc: "Generate morph sequence between 2 images as a GIF",
      img: "morph.png",
      url: "/morph",
    },
    {
      title: "Image Rectification",
      desc: "Rectify/project image using homographies",
      img: "rectify.png",
      url: "/rectify",
    },
  ];
  return (
    <div className="main page">
            <Header />

      <section className="homepage-container">
      <div className="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
        <div className="flex items-center h-full">
        <h2>
          ML/AI-powered algorithms and Computer Vision project for word search
          and sudoku solver.
        </h2>
        </div>
        <div>

        </div>
      </section>
      <section>
        <h3>Image Processing</h3>
        <div className="card-container">
          {products.map((product) => (
            <Card
              url={product.url}
              title={product.title}
              desc={product.desc}
              img={product.img}
            ></Card>
          ))}
        </div>
        <h3>Games</h3>
        <h3>PDF Tools</h3>
      </section>
    </div>
  );
}

export default MainPage;

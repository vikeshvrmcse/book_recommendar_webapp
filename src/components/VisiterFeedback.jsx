/** @format */

import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlidingFeedbackCarousel() {  const feedbacks = [
    { id: 1, name: "Satyendra", feedback: "Amazing platform!" },
    { id: 2, name: "Ansh", feedback: "User-friendly interface." },
    { id: 3, name: "Sushant", feedback: "Great customer support." },
    { id: 4, name: "Ayush", feedback: "Wonderful experience!" },
    { id: 5, name: "Schin", feedback: "Highly recommend it!" },
    { id: 6, name: "Saurabh", feedback: "Innovative features!" },
    { id: 7, name: "Akash", feedback: "Exceeded my expectations." },
    { id: 8, name: "Anubhav", feedback: "Exceeded my expectations." },
    { id: 9, name: "Vikash", feedback: "Superb design." },
    { id: 10, name: "Vikesh", feedback: "Very reliable platform." },
    { id: 11, name: "Ritik", feedback: "Effortlessly convenient." },
    { id: 12, name: "Abhishek", feedback: "Effortlessly convenient." },
  ];

  // Slick slider settings
  const settings = {
    
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For devices <= 1024px width
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For devices <= 768px width
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For devices <= 480px width
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <h1 className="m-5 text-center fs-1">Visitors Feedback</h1>
      <hr className="border border-5 border-primary-subtle" />

      {/* Carousel Section */}
      <div
        className="slider-container mx-auto p-3"
        style={{
          maxWidth: "1200px",
          width: "90%",
          height:'50vh'
        }}
      >
        <Slider {...settings}>
          {feedbacks.map((user) => (
            <div
              key={user.id}
              className="d-flex flex-column align-items-center"
              style={{
                margin: "0 auto",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              {/* Icon or Avatar */}
              <div
                className="rounded-circle d-flex justify-content-center align-items-center fs-3"
                style={{
                  width: "5rem",
                  height: "5rem",
                  backgroundColor: "#016b88",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
              </div>
              {/* Feedback Content */}
              <div
                className="border border-2 rounded p-3 m-3 shadow"
                style={{
                  backgroundColor: "#e6f7ff",
                  maxWidth: "300px",
                }}
              >
                <p className="mb-2">"{user.feedback}"</p>
                <h6 className="mb-2 p-2">- {user.name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

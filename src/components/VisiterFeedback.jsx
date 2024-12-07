/** @format */

import React, { useState } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
export default function SlidingFeedbackCarousel() {
  // Feedback data
  const feedbacks = [
    { id: 1, name: "Satyendra Laundiyabaz", feedback: "Amazing platform!" },
    { id: 2, name: "Boobs Smith", feedback: "User-friendly interface." },
    { id: 3, name: "Sushant Burchanda", feedback: "Great customer support." },
    { id: 4, name: "Ayush Landbaz", feedback: "Wonderful experience!" },
    { id: 5, name: "Schin Bhai Chuchi Wale", feedback: "Highly recommend it!" },
    { id: 6, name: "Saurabh Gandu", feedback: "Innovative features!" },
    { id: 7, name: "Akash Bhosdka wala", feedback: "Exceeded my expectations." },
    { id: 8, name: "Anubhav Burchatta", feedback: "Exceeded my expectations." },
    { id: 9, name: "Vikash Jhandu", feedback: "Superb design." },
    { id: 10, name: "Vikesh Hawashi", feedback: "Very reliable platform." },
    { id: 11, name: "Ritik Tharaki", feedback: "Effortlessly convenient." },
    { id: 12, name: "Abhishek Muthal, Both", feedback: "Effortlessly convenient." },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true
  };

  // Function to get the visible group
  const groupSize = 1;
  const generateGroups = () => {
    let groups = [];
    for (let i = 0; i <= feedbacks.length - groupSize; i++) {
      groups.push(feedbacks.slice(i, i + groupSize));
    }
    return groups;
  };

  const groups = generateGroups();

  return (
    <div className="container-fluid text-center">
      <h1 className="m-5 text-center fs-1 p-5 headingDecoration">Visitors' Feedback</h1>
      <hr className="border border-5 border-primary-subtle" />

      {/* Carousel Section */}
      <Slider className="m-5 p-5" {...settings}>
        {groups.map((group, index) => (
          
            <div className="d-flex justify-content-center">
              {group.map((user) => (
                <div
                  key={user.id}
                  className="d-flex flex-column align-items-center mx-3"
                  style={{ width: "12rem" }}
                >
                  {/* Icon or Avatar */}
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center fs-3"
                    style={{
                      width: "6rem",
                      height: "6rem",
                      backgroundColor: "#016b88",
                      marginBottom: "1rem",
                      color: "#fff",
                    }}
                  >
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                  </div>
                  {/* Feedback Content */}
                  <div
                    className="border border-2 rounded backGradient p-3"
                    style={{
                      backgroundColor: "#e6f7ff",
                      width: "100%",
                    }}
                  >
                    <p className="mb-2">"{user.feedback}"</p>
                    <h5 className="mb-0">- {user.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          
        ))}
      </Slider>
    </div>
  );
}

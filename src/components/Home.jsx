/** @format */

import React from "react";
import BookShows from './BookShows';
import { bookData } from '../data/BookData';
import BannerSection from './BannerSection'
import { 
  faCircleArrowDown, 
  faDiceOne, 
  faDiceTwo, 
  faDiceThree, 
  faDiceFour 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisiterFeedback from "./VisiterFeedback";

export default function Home() {
  const steps = [
    { id: 1, icon: faDiceOne, alignment: "start", content: "Step 1 Content" },
    { id: 2, icon: faDiceTwo, alignment: "end", content: "Step 2 Content" },
    { id: 3, icon: faDiceThree, alignment: "start", content: "Step 3 Content" },
    { id: 4, icon: faDiceFour, alignment: "end", content: "Step 4 Content" },
  ];

  // Handle click event
  const handleClick = (step) => {
    alert(`You clicked on: ${step.content}`);
  };

  return (
	<>
	
	<BannerSection val={'data'} />
	<BookShows bookData={bookData} />
    <div className="container-fluid">
      <h1 className="m-5 text-center fs-1 p-5 headingDecoration">
        Team Messages 
      </h1>
	  <hr className="border border-5 border-primary-subtle" />
      {steps.map((step, index) => (
        <div 
          className={`row justify-content-${step.alignment} m-0 p-2`} 
          key={step.id}
        >
          <div
            className="rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient"
            style={{
              width: "8%",
              height: "16vh",
              backgroundColor: "#016b88",
              position: "relative",
              marginBottom: "2%",
              left: step.alignment === "start" ? "17%" : undefined,
              right: step.alignment === "end" ? "10%" : undefined,
            }}
          >
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </div>
          <div className={`d-flex justify-content-${step.alignment}`}>
            <div
              style={{
                width: "10%",
                backgroundColor: "#016b88",
                height: "1vh",
                transform: "rotate(120deg)",
                position: "absolute",
                zIndex: "-1",
                left: step.alignment === "start" ? "12%" : undefined,
                right: step.alignment === "end" ? "15%" : undefined,
              }}
            ></div>
            <div
              className="col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center"
              style={{ height: "30vh", cursor: "pointer" }}
              onClick={() => handleClick(step)} // Add onClick handler
            >
              <FontAwesomeIcon
                className="me-1 fa-spin"
                icon={step.icon}
              />
              Step {index + 1}
            </div>
          </div>
        </div>
      ))}
    </div>
	<VisiterFeedback />
	</>
  );
}

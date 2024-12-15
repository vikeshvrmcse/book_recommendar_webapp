/** @format */
import React from "react";
import BookShows from './BookShows';
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
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

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
	<BookShows />
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
      {/* Circle */}
      <div
        className={`col-auto rounded-circle d-flex justify-content-center align-items-center fs-3`}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#016b88",
          position: "relative",
          marginBottom: "20px",
          left: step.alignment === "start" ? "15%" : undefined,
          right: step.alignment === "end" ? "15%" : undefined,
        }}
      >
        <FontAwesomeIcon icon={faCircleArrowDown} className="text-white" />
        
      </div>
      {/* Line and Box */}
      <div className={`col-12 d-flex justify-content-${step.alignment}`}>
        {/* Line */}
        <div
          className="bg-primary"
          style={{
            width: "50px",
            height: "4px",
            position: "absolute",
            left: step.alignment === "start" ? "15%" : undefined,
            right: step.alignment === "end" ? "15%" : undefined,
            zIndex: -1,
          }}
        ></div>

        {/* Content Box */}
        <div
          className="col-6 col-md-4 border border-2 backGradient fs-5 d-flex flex-row justify-content-center align-items-center"
          style={{
            height: "100px",
            cursor: "pointer",
            backgroundColor: "#e6f7ff",
          }}
          onClick={() => handleClick(step)}
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

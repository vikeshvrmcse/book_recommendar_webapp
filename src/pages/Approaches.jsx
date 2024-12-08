/** @format */

import React from "react";
import {
  faChartDiagram,
  faFilter,
  faBrain,
  faTowerObservation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAffiliatetheme } from "@fortawesome/free-brands-svg-icons";

export default function CustomPatternArray(props) {
  const createCustomPatternArray = (length) => {
    const steps = [
      { heading: "DATASET SELECTION", name: "start", icon: faChartDiagram },
      { heading: "DATASET CLEANING", name: "center", icon: faFilter },
      { heading: "DATASET ANALYSING", name: "end", icon: faBrain },
      { heading: "MODEL BUILDING", name: "center", icon: faAffiliatetheme },
      { heading: "MODEL TESTING", name: "start", icon: faTowerObservation },
    ];
    return Array.from({ length }, (_, i) => steps[i % steps.length]);
  };

  const handleClick = (feature) => {
    alert(`You clicked on: ${feature}`);
  };

  const numberOfItems = 5;
  const alignmentArray = createCustomPatternArray(numberOfItems);

  return (
    <div className="container-fluid text-center">
      <h1 className="text-center mt-5 mb-5 headingDecoration">
        HIGHLIGHTED APPROACHES
      </h1>
      <hr className="border border-5 border-primary-subtle" />
      {alignmentArray.map((alignment, index) => (
        <div
          className={`row justify-content-${alignment.name} align-items-center m-0 p-4`}
          key={index}
          onClick={() => handleClick(alignment.heading)}
          style={{ cursor: "pointer" }}
        >
          <div
            className="col-4 col-sm-6 col-md-4 col-lg-3 border border-2 backGradient d-flex flex-column justify-content-center align-items-center"
            style={{
              height: "30vh",
              minWidth: "150px",
              maxWidth: "300px",
            }}
          >
            <span className="fs-5 text-black mb-2">{alignment.heading}</span>
            <ul className="p-0">
              <li className="fs-6 list-unstyled">
                <FontAwesomeIcon icon={alignment.icon} className="me-2" />
                <span className="text-white text-decoration-none">DETAILS</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

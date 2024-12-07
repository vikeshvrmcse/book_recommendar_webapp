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
      {heading:'DATASET SELECTION', name: "start", icon: faChartDiagram },
      {heading:'DATASET CLEANING', name: "center", icon: faFilter },
      {heading:'DATASET ANAYLISING', name: "end", icon: faBrain },
      {heading:'MODEL BUILDING', name: "center", icon: faAffiliatetheme },
      {heading:'MODEL TESTING', name: "start", icon: faTowerObservation },
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
      <h1 className="text-center mt-5 mb-5 headingDecoration" >HIGHLIGHTED APPROACHAES</h1>
      <hr className="border border-5 border-primary-subtle"/>
      {alignmentArray.map((alignment, index) => (
        <div
          className={`row justify-content-${alignment.name} m-0 p-5`}
          key={index}
          style={{cursor: "pointer"}}
          onClick={()=>{handleClick(alignment.heading)}}
        >
          <div
            className="col-4 border border-2 backGradient fs-2 d-flex flex-column justify-content-center align-items-center"
            style={{ height: "30vh" }}
          >
            
            <span className="fs-4 text-black">{alignment.heading}</span>
            <ul className="p-2">
              <li className=" fs-5 list-unstyled"><FontAwesomeIcon
              icon={alignment.icon}
              className="me-2"
            /><span className="text-white text-decoration-none">DETAILS</span></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

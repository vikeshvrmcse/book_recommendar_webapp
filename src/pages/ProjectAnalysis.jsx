/** @format */

import React from "react";
import {
  faCogs,
  faTasks,
  faLaptopCode,
  faBug,
  faRocket,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectAnalysis(props) {
  const layout = [
    {
      features: ["Feasibility of Software", "Project Requirement"],
      icons: [faCogs, faTasks],
    },
    {
      features: ["Project Analysis"],
      icons: [faLaptopCode],
    },
    {
      features: ["Design", "Implementation of Coding"],
      icons: [faLaptopCode, faCogs],
    },
    {
      features: ["Testing"],
      icons: [faBug],
    },
    {
      features: ["Deployment"],
      icons: [faRocket],
    },
    {
      features: ["Maintenance", "Report"],
      icons: [faClipboard, faClipboard],
    },
  ];

  // Handle click event
  const handleClick = (feature) => {
    alert(`You clicked on: ${feature}`);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center fs-1 p-2 m-5 headingDecoration">PROJECT GROUP</h1>
      <hr className="border border-5 mt-1 mb-3 border-primary-subtle" />

      {layout.map((row, rowIndex) => (
        <div
          className={`row gy-4 px-2 px-md-5 align-items-center ${
            row.features.length > 1
              ? "justify-content-around"
              : "justify-content-center"
          } mb-5`}
          key={rowIndex}
        >
          {row.features.map((feature, colIndex) => (
            <div
              className="col-12 col-md-4 col-lg-2 rounded-circle backGradient d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "100%",
                maxWidth: "150px",
                height: "25vh",
                minHeight: "150px",
                cursor: "pointer",
              }}
              key={colIndex}
              onClick={() => handleClick(feature)} // Set onClick here
            >
              <FontAwesomeIcon icon={row.icons[colIndex]} className="mb-2 fs-3" />
              <span className="text-center">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

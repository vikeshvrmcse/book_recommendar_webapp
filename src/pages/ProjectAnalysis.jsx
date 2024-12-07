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
    <>
      <div className="container-fluid">
        <h1 className="text-center fs-1 p-2 m-5 headingDecoration">
          PROJECT GROUP
        </h1>
        <hr className="border border-5 mt-1 mb-3 border-primary-subtle" />
        {layout.map((row, rowIndex) => (
          <div
            className={`row p-5 d-flex align-items-center ${
              row.features.length > 1
                ? "justify-content-between"
                : "justify-content-center"
            } mb-5`}
            key={rowIndex}
          >
            {row.features.map((feature, colIndex) => (
              <div
                className="col-4 rounded-circle backGradient d-flex flex-column align-items-center justify-content-center"
                style={{ width: "13%", height: "25vh", cursor: "pointer" }}
                key={colIndex}
                onClick={() => handleClick(feature)} // Set onClick here
              >
                <FontAwesomeIcon
                  icon={row.icons[colIndex]}
                  className="mb-2 fs-3"
                />
                <span className="text-center">{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

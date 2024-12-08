/** @format */

import React from "react";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faFaceDizzy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutUs(props) {
  // Array of steps for dynamic rendering
  const steps = [
    { name: "Step 1", icon: faDiceOne },
    { name: "Step 2", icon: faDiceTwo },
    { name: "Step 3", icon: faDiceThree },
    { name: "Step 4", icon: faDiceFour },
    { name: "Step 5", icon: faDiceFive },
  ];

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center fs-1 p-2 m-5 headingDecoration">
          PROJECT GROUP
        </h1>
        <hr className="border border-5 mt-1 mb-3 border-primary-subtle" />
        <div className="row align-items-center m-0 p-0">
          {steps.map((step, index) => (
            <div
              className={`row justify-content-${
                index % 2 === 0 ? "start" : "end"
              } align-items-center m-3`}
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left Column */}
                  <div
                    className="col-12 col-sm-10 col-md-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center mx-auto"
                    style={{
                      height: "25vh",
                      minWidth: "200px",
                      maxWidth: "350px",
                    }}
                  >
                    <FontAwesomeIcon
                      className="me-1 fa-spin"
                      icon={step.icon}
                    />
                    {step.name}
                  </div>
                  {/* Divider */}
                  <div
                    className="aboutUsCircleAndDiv d-flex align-items-center d-sm-none"
                    style={{
                      width: "3px",
                      height: "5px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                      margin: "0 auto",
                    }}
                  ></div>
                  <div
                    className="aboutUsCircleAndDiv d-none d-sm-block"
                    style={{
                      width: "58%",
                      height: "3px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                    }}
                  ></div>
                  {/* Circle */}
                  <div
                    className="circleConnection rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient mx-auto"
                    style={{
                      width: "10vw",
                      maxWidth: "100px",
                      height: "10vw",
                      maxHeight: "100px",
                      backgroundColor: "#016b88",
                    }}
                  >
                    <FontAwesomeIcon icon={faFaceDizzy} />
                  </div>
                </>
              ) : (
                <>
                  {/* Circle */}
                  <div
                    className="circleConnection rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient mx-auto"
                    style={{
                      width: "10vw",
                      maxWidth: "100px",
                      height: "10vw",
                      maxHeight: "100px",
                      backgroundColor: "#016b88",
                    }}
                  >
                    <FontAwesomeIcon icon={faFaceDizzy} />
                  </div>
                  {/* Divider */}
                  <div
                    className="aboutUsCircleAndDiv d-flex align-items-center d-sm-none"
                    style={{
                      width: "3px",
                      height: "5px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                      margin: "0 auto",
                    }}
                  ></div>
                  <div
                    className="aboutUsCircleAndDiv d-none d-sm-block"
                    style={{
                      width: "58%",
                      height: "3px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                    }}
                  ></div>
                  {/* Right Column */}
                  <div
                    className="col-12 col-sm-10 col-md-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center mx-auto"
                    style={{
                      height: "25vh",
                      minWidth: "200px",
                      maxWidth: "350px",
                    }}
                  >
                    <FontAwesomeIcon
                      className="me-1 fa-spin"
                      icon={step.icon}
                    />
                    {step.name}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

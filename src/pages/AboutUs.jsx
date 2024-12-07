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
        <h1 className="text-center fs-1 p-2 m-5 headingDecoration">PROJECT GROUP</h1>
        <hr className="border border-5 mt-1 mb-3 border-primary-subtle" />
        <div className="row align-items-center m-0 p-0">
          {steps.map((step, index) => (
            <div
              className={`row justify-content-${
                index % 2 === 0 ? "start" : "end"
              } align-items-center m-2`}
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div
                    className="col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "30vh" }}
                  >
                    <FontAwesomeIcon
                      className="me-1 fa-spin"
                      icon={step.icon}
                    />
                    {step.name}
                  </div>
                  <div
                    className="aboutUsCircleAndDiv"
                    style={{
                      width: "58%",
                      height: "3px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                    }}
                  ></div>
                  <div
                    className="circleConnection rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient"
                    style={{
                      width: "8%",
                      height: "16vh",
                      backgroundColor: "#016b88",
                      marginBottom: "2%",
                    }}
                  >
                    <FontAwesomeIcon icon={faFaceDizzy} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="circleConnection rounded-circle d-flex justify-content-center align-items-center fs-3 backGradient"
                    style={{
                      width: "8%",
                      height: "16vh",
                      backgroundColor: "#016b88",
                      marginBottom: "2%",
                    }}
                  >
                    <FontAwesomeIcon icon={faFaceDizzy} />
                  </div>
                  <div
                    className="aboutUsCircleAndDiv"
                    style={{
                      width: "58%",
                      height: "3px",
                      backgroundColor: "#016b88",
                      position: "relative",
                      zIndex: -1,
                    }}
                  ></div>
                  <div
                    className="col-4 border border-2 backGradient fs-2 d-flex flex-row justify-content-center align-items-center"
                    style={{ height: "30vh" }}
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

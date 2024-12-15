/** @format */

import React from "react";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faFaceDizzy,
  faArrowRight,
  faLeftRight,
  faCarrot,
  faFaceMehBlank,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faSafari, faScreenpal } from "@fortawesome/free-brands-svg-icons";

export default function AboutUs(props) {
  // Array of steps for dynamic rendering
  const steps = [
    { name: "Vikesh Kumar Verma", sem: '5th Semester', branch: "CSIT", icon: faCarrot },
    { name: "Vansh Pal", sem: '5th Semester', branch: "CSIT", icon: faCarrot },
    { name: "Vansh Bhattnagar ", sem: '5th Semester', branch: "CSIT", icon: faCarrot },
    { name: "Nandita Saxena", sem: '5th Semester', branch: "CSIT", icon: faCarrot }
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
              className={`row justify-content-${index % 2 === 0 ? "start" : "end"
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
                      minWidth: "30%",
                      maxWidth: "50%",
                    }}
                  >

<div className="d-flex flex-column fs-5">
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faPen}
                      />Name: {step.name}</span>
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faSafari}
                      />Semester: {step.sem}</span>


                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faScreenpal}
                      />Department: {step.branch}</span>
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faLinkedin}
                      />Linkdin: {step.sem}</span>
                    </div>
                  </div>
                  {/* Divider */}
                  <div
                    className="aboutUsCircleAndDiv d-flex align-items-center d-sm-none"
                    style={{
                      width: "20%",
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
                    <FontAwesomeIcon icon={faUser} />
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
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  {/* Divider */}
                  <div
                    className="aboutUsCircleAndDiv d-flex align-items-center d-sm-none"
                    style={{
                      width: "30%",
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
                      minWidth: "30%",
                      maxWidth: "50%",
                    }}
                  >

                    <div className="d-flex flex-column fs-5">
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faPen}
                      />Name: {step.name}</span>
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faSafari}
                      />Semester: {step.sem}</span>


                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faScreenpal}
                      />Department: {step.branch}</span>
                      <span className=" text-white"><FontAwesomeIcon
                        className="me-2"
                        icon={faLinkedin}
                      />Linkdin: {step.sem}</span>
                    </div>
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

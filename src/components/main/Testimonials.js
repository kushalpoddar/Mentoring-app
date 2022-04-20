import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./Testimonials.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/mentee/1.png";

export default class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      testimonials: [
        {
          description:
            "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”",
          name: "janie Adams",
          qualification: "Client",
        },
        {
          description:
            "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”",
          name: "janie Adams",
          qualification: "Client",
        },
        {
          description:
            "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”",
          name: "janie Adams",
          qualification: "Client",
        },
      ],
    };
  }
  render() {
    const settings = {
      swipe: true,
      className: "center slider variable-width",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      speed: 500,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="pt-5 justify-center items-center">
        <Slider {...settings}>
          {this.state.testimonials.map((mentor, index) => (
            <div
              className="justify-center items-center lg:py-10 lg:pb-20"
              style={{ width: 800 }}
              key={index}
            >
              <div
                className="text-center justify-center shadow-xl shadow-[#DBDEE1] 
              lg:px-20 lg:pt-16 lg:pb-8 sm:p-10  rounded-3xl"
              >
                <p className="text-xl text-[#273150] font-Helvetica font-normal text-center">
                  {mentor.description}
                </p>
                <div className="flex flex-row items-center pl-10 py-5">
                  <img
                    className="w-14 h-14 rounded-full shadow-lg overflow-hidden"
                    src={img1}
                    alt="profile"
                  />
                  <div className="flex flex-col px-4 items-start">
                    <h5 className="mb-1 text-xl font-bold font-Helvetica text-gray-900">
                      {mentor.name}
                    </h5>
                    <span className="text-sm text-gray-500 font-poppins font-normal">
                      {mentor.qualification}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

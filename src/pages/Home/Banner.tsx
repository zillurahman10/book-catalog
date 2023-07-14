import React from "react";
import bannerPhoto from "../../assets/Back to school books colorful cartoon brown yellow Instagram Post.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row justify-between">
          <img
            src={bannerPhoto}
            className="max-w-sm rounded-lg shadow-2xl mr-24"
          />
          <div>
            <h1 className="text-5xl font-bold">Enlarge your knowladge</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

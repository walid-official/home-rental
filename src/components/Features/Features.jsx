import React from "react";
import Container from "./../../shared/Container";

import FeaturesCard from "./FeaturesCard";
const Features = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="">
          <h2 className="text-center text-4xl font-bold">Featured Listings</h2>
          <div className="flex gap-1 justify-center py-3">
            <div className="bg-[#e93740] w-16 h-1 rounded-full"></div>
            <div className="bg-[#e93740] w-4 h-1 rounded-full"></div>
          </div>
        </div>
        {/* Featured Cards */}
        <FeaturesCard></FeaturesCard>
        <div className="flex justify-center">
          <button className="text-white bg-[#e93740] cursor-pointer rounded-full px-7 py-3 font-medium">
            Learn More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Features;

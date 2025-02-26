import React from "react";
import location1 from "../../assets/images/featureLocation/location1.png";
import location2 from "../../assets/images/featureLocation/location2.png";
import location3 from "../../assets/images/featureLocation/location3.png";
import location4 from "../../assets/images/featureLocation/location4.png";
import location5 from "../../assets/images/featureLocation/location5.png";
import location6 from "../../assets/images/featureLocation/location6.png";
import Container from "../../shared/Container";

const FeatureLocations = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="">
          <h2 className="text-center text-4xl font-bold">Featured Locations</h2>
          <div className="flex gap-1 justify-center py-3">
            <div className="bg-[#e93740] w-16 h-1 rounded-full"></div>
            <div className="bg-[#e93740] w-4 h-1 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 pt-12 pb-10">
          <div className="w-full col-span-3 relative">
            {/* Image */}
            <img
              src={location1}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

            {/* Text */}
            <span className="absolute bottom-4 left-6 text-white z-10">
              Kandy
            </span>
          </div>
          <div className="w-full  col-span-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="w-full  relative">
                {/* Image */}
                <img
                  src={location2}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

                {/* Text */}
                <span className="absolute bottom-4 left-6 text-white z-10">
                  AnuradhaPura
                </span>
              </div>
              <div className="w-full  relative">
                {/* Image */}
                <img
                  src={location4}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

                {/* Text */}
                <span className="absolute bottom-4 left-6 text-white z-10">
                  Gampaha
                </span>
              </div>
              <div className="w-full  relative">
                {/* Image */}
                <img
                  src={location3}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

                {/* Text */}
                <span className="absolute bottom-4 left-6 text-white z-10">
                  Badulla
                </span>
              </div>
              <div className="w-full  relative">
                {/* Image */}
                <img
                  src={location5}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

                {/* Text */}
                <span className="absolute bottom-4 left-6 text-white z-10">
                  Jafna
                </span>
              </div>
            </div>
          </div>
          <div className="w-full col-span-3 relative">
            {/* Image */}
            <img
              src={location6}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div>

            {/* Text */}
            <span className="absolute bottom-4 left-6 text-white z-10">
              Colombo
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureLocations;

import React from "react";
import bannerImg from "../../assets/images/banner.jpeg";
import Container from "./../../shared/Container";
const Banner = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <div className="flex justify-center items-center min-h-[90vh]">
          <div className="">
            <div className="">
              <h1 className="font-bold text-5xl text-center">
                Discover Your{" "}
                <span className="text-[#e93740]">Perfect Rental</span>{" "}
              </h1>
              <h2 className="text-center pt-8 pb-4 text-xl">Your New Home Is Just A Few Clicks Away</h2>
            </div>
            <div className="space-x-3 flex justify-center pb-6">
              <button className="text-[#e93740] bg-white hover:bg-[#e93740] cursor-pointer hover:text-white duration-500 rounded-full px-6 py-2 font-medium">
                Find
              </button>
              <button className="text-[#e93740] bg-white hover:bg-[#e93740] cursor-pointer hover:text-white duration-500 rounded-full px-6 py-2 font-medium">
                Rent
              </button>
              <button className="text-[#e93740] bg-white hover:bg-[#e93740] cursor-pointer hover:text-white duration-500 rounded-full px-6 py-2 font-medium">
                Live
              </button>
            </div>
            <div className="">
              <div className=" border-none bg-white p-3 px-5 rounded-full  flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-5 w-5 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow border-none focus:outline-none"
                  placeholder="Search by features (e.g with balcony)"
                />
                <div className="bg-[#e93740] rounded-full text-white w-10 h-10 object-cover flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-5 w-5 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

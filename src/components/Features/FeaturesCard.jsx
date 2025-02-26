import React from "react";
import Container from "../../shared/Container";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import feature1 from "../../assets/images/featured-img/feature1.png";
import feature2 from "../../assets/images/featured-img/feature2.png";
import feature3 from "../../assets/images/featured-img/feature3.png";
import feature4 from "../../assets/images/featured-img/feature4.png";
import feature5 from "../../assets/images/featured-img/feature5.png";
import feature6 from "../../assets/images/featured-img/feature6.png";
import featureProfile from "../../assets/images/featured-img/feature-profile.png";
const FeaturesCard = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 pt-16 pb-10">
      {/* Card 1 */}
      <div className="card bg-base-100  shadow-xl">
        <figure className="relative">
          <img className="w-full" src={feature1} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="lg:xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden "></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="card bg-base-100  shadow-md">
        <figure className="relative">
          <img className="w-full" src={feature2} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card bg-base-100  shadow-md">
        <figure className="relative">
          <img className="w-full" src={feature3} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="card bg-base-100  shadow-md">
        <figure className="relative">
          <img className="w-full" src={feature4} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="card bg-base-100  shadow-md">
        <figure className="relative">
          <img className="w-full" src={feature5} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="card bg-base-100  shadow-md">
        <figure className="relative">
          <img className="w-full" src={feature6} alt="Feature-Image" />
          <div className="absolute top-5 right-6">
            <button className="text-white bg-[#77b747]  cursor-pointer rounded-full px-5 py-1">
              For Rent
            </button>
          </div>
        </figure>
        <div className="">
          <div className="p-6">
            <h2>
              <span className="text-[#e93740]">85,000 USD</span> /Month
            </h2>
            <h2 className="text-2xl font-semibold pt-3">
              Luxury flat in Rego Park
            </h2>
            <div className="xl:flex justify-between items-center pt-4">
              <h3 className="text-[18px]">3 Bedrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2 Bathrooms</h3>
              <div className="w-[2px] h-4 bg-black lg:flex hidden"></div>
              <h3 className="text-[18px]">2500 Square FT</h3>
            </div>
          </div>
          <div className="border-t border-gray-300">
            <div className="p-6 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="">
                  <img src={featureProfile} alt="" />
                </div>
                <div className="">
                  <h2 className="text-xl font-bold">Anne Liza</h2>
                  <p className="text-sm text-gray-400">Property Seller</p>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 p-2 text-xl">
                  <MdOutlineFavoriteBorder></MdOutlineFavoriteBorder>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;

import React from "react";
import articleHeader from "../../assets/images/articles/article-header.png";
import article1 from "../../assets/images/articles/article1.png";
import article2 from "../../assets/images/articles/article2.png";
import article3 from "../../assets/images/articles/article3.png";
import article4 from "../../assets/images/articles/article4.png";
import Container from "./../../shared/Container";
const Articles = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="">
          <h2 className="text-center text-4xl font-bold">Important Articles</h2>
          <div className="flex gap-1 justify-center py-3">
            <div className="bg-[#e93740] w-16 h-1 rounded-full"></div>
            <div className="bg-[#e93740] w-4 h-1 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-6  pt-10 pb-10">
          <div className="w-[55%]">
            <div className="">
              <img src={articleHeader} alt="" />
            </div>
            <div className="">
              <p className="text-[#e93740] py-3 font-bold">May 7, 2023</p>
              <h2 className="text-3xl font-bold">Car Rental Hacks for a Smooth Journey</h2>
              <p className="text-[#c8c8c8] py-3">
                Learn insider tips for getting the best deals and making the most of your rental car experience
              </p>
            </div>
          </div>
          <div className="w-[45%] space-y-6">
            <div className="">
              <div className="flex gap-4">
                <div className="w-[60%]">
                  <img className="w-full" src={article1} alt="" />
                </div>
                <div className="">
                  <p className="text-[#e93740] font-bold">February 4, 2025</p>
                  <h2 className="text-xl font-bold py-2">Top Tips For Finding The Perfect Rental</h2>
                  <p className="text-sm text-[#c8c8c8]">
                    Discover Expert advice on how to find the ideal rental
                    properties that meets your needs and budgets
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4">
              <div className="w-[50%]">
                  <img className="w-full" src={article2} alt="" />
                </div>
                <div className="">
                  <p className="text-[#e93740] font-bold">April 25, 2023</p>
                  <h2 className="text-xl font-bold py-2">Manage Your Rental Items: A Comprehensive Guide</h2>
                  <p className="text-sm text-[#c8c8c8]">
                   Get valuable insights on how to effectively manage and maintain your rented items
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4">
              <div className="w-[50%]">
                  <img className="w-full" src={article3} alt="" />
                </div>
                <div className="">
                  <p className="text-[#e93740] font-bold">January 2, 2023</p>
                  <h2 className="text-xl font-bold py-2">Navigating the Rental Market: Insights for New Renters</h2>
                  <p className="text-sm text-[#c8c8c8]">
                    Explore key considerations and useful tips for individuals new to the rental market
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-4">
              <div className="w-[55%]">
                  <img className="w-full" src={article4} alt="" />
                </div>
                <div className="">
                  <p className="text-[#e93740] font-bold">April 7, 2023</p>
                  <h2 className="text-xl font-bold py-2">Maximizing Returns: Strategies for Rental Property Owners</h2>
                  <p className="text-sm text-[#c8c8c8]">
                    Learn Strategies to optimize the return on investment for your rental property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Articles;

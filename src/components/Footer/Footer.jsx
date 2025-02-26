import React from "react";
import Container from "./../../shared/Container";
import footerLogo from "../../assets/images/footer-logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#f4f4f4] py-10">
      <Container>
        <footer className="flex justify-between  ">
          <div>
            <div className="">
              <img className="w-40" src={footerLogo} alt="" />
            </div>
            <div className="py-4">
              <p>
                Best Platform for online properties finding and tenant
                <br />
                management
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#e93740] w-10 h-10 rounded-full text-xl flex justify-center items-center text-white">
                <RiInstagramFill></RiInstagramFill>
              </div>
              <div className="bg-[#e93740] w-10 h-10 rounded-full text-xl flex justify-center items-center text-white">
                <FaTwitter></FaTwitter>
              </div>
              <div className="bg-[#e93740] w-10 h-10 rounded-full text-xl flex justify-center items-center text-white">
                <FaYoutube></FaYoutube>
              </div>
              <div className="bg-[#e93740] w-10 h-10 rounded-full text-xl flex justify-center items-center text-white">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="bg-[#e93740] w-10 h-10 rounded-full text-xl flex justify-center items-center text-white">
                <FaLinkedinIn></FaLinkedinIn>
              </div>
            </div>
          </div>
          <div>
            <h6 className="footer-title text-[#e93740]">Navigation</h6>
            <a className="link link-hover block mt-3">About Us</a>
            <a className="link link-hover block mt-3">Blog</a>
            <a className="link link-hover block mt-3">Terms of use</a>
            <a className="link link-hover block mt-3">Privacy Policy</a>
          </div>
          <div>
            <h6 className="footer-title text-[#e93740]">Featured Locations</h6>
            <a className="link link-hover block mt-3">Kandy</a>
            <a className="link link-hover block mt-3">Anuradhapura</a>
            <a className="link link-hover block mt-3">Badullah</a>
            <a className="link link-hover block mt-3">Colombo</a>
            <a className="link link-hover block mt-3">Kaluthara</a>
          </div>
          <div>
            <h6 className="footer-title text-[#e93740]">Help</h6>
            <a className="link link-hover block mt-3">FAQ</a>
            <a className="link link-hover block mt-3">Contact Us</a>
          </div>
          <div>
            <h6 className="footer-title text-[#e93740]">
              Subscribe to Our Newsletter
            </h6>
            <p>Stay Updated With the latest listings and <br /> rental tips</p>
            <div className="">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 w-full border-gray-300 my-4 rounded-full"
              />
            </div>
            <div className="">
              <button className="bg-[#e93740] w-full text-center cursor-pointer rounded-full px-7 py-3 text-white">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

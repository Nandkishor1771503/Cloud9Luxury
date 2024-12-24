import React from "react";
import Logo from "../images/Logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="text-[#cc9766]">
        <div>
          <img src={Logo} alt="" className="p-6 pb-2" />
        </div>
        <div>
          <p className="px-2 ">
            Experience the best in style and care at <br />
            Cloud 9 Luxury. <br />
            Redefining style for everyone, where beauty is for all <br />
            📍 Location: Banjarahills <br />
            📞 Call Us: [Phone Number] <br />
            ✉️ Email: [Email Address] <br />
            💬 Follow Us: [Social Media Icons/Links] <br />© 2024 Cloud 9
            Luxury. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center text-5xl gap-10 my-5 mt-8">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

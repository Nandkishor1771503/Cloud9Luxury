import React from "react";
import Logo from "../images/Logo.png";
import heroImg from "../images/heroImg.jpg";
import { motion } from "motion/react";
function Hero() {
  return (
    <>
      <motion.img
        src={Logo}
        alt=""
         className="  shadow-2xl -z-50 " //sticky
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />{" "}
      {/*fixed */}
      <motion.img
        src={heroImg}
        alt=""
        className="rounded-2xl -z-20 shadow-2xl "
        initial={{ opacity: 0.2, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
    </>
  );
}

export default Hero;

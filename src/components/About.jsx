import React from "react";
import about from "../images/salonImg.jpg";
import { motion } from "motion/react";
function About() {
  return (
    <>
      <motion.img
        src={about}
        alt=""
        className="shadow-xl mt-8"
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 2 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="bg-[#cc9766e2] relative -top-12 rounded-2xl p-4 m-2 shadow-2xl"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="text-2xl">01.</span>
        <h1 className="inline text-4xl lg:text-6xl mt-4"> About Us</h1>
        <p className="text-black text-lg lg:text-xl mt-5">
          Welcome to Cloud 9 Luxury, where luxury meets style. Nestled in the
          heart of Hyderabad, our salon is a sanctuary of elegance and
          relaxation. We are dedicated to providing an exceptional experience,
          combining premium services with a touch of sophistication to make you
          look and feel your absolute best. Our team of highly skilled
          professionals is passionate about delivering personalized beauty
          solutions tailored to your unique needs. 
          {/* From precision haircuts and
          bespoke coloring to indulgent spa treatments, every service is
          designed to leave you feeling refreshed and rejuvenated. */}
        </p>
      </motion.div>
    </>
  );
}

export default About;

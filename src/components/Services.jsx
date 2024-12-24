import React from "react";
import hairB from "../images/hairBefore.png";
import hairA from "../images/hairAfter.png";
import Makeup from "../images/Makeup.png";
import { motion } from "motion/react";
import nail1 from "../images/nail1.png";
import nail2 from "../images/nail2.png";
import bridal1 from "../images/Bridal1.png";
import bridal2 from "../images/Bridal2.png";

function Services() {
  return (
    <>
      <div className="p-3 m-2 mt-0 ">
        <span className=" text-2xl m-2 text-[#cc9766] ">02.</span>
        <h1 className="inline text-4xl lg:text-6xl text-[#cc9766] ">
          Services
        </h1>
        <div className="sticky top-0  w-full">
          <motion.div
            className="mt-4 h-screen"
            initial={{ opacity: 0.1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#cc9766] m-2 text-xl">i.</span>
            <h2 className="inline text-[#cc9766] text-2xl">Hair</h2>
            <div className="mt-5">
              <motion.img
                src={hairB}
                alt=""
                className="relative w-[70%] mt-6"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: -15 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={hairA}
                alt=""
                className="relative w-[60%] -top-32 rounded-3xl left-36 -rotate-12"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 15 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-[#cc9766] m-2 text-xl relative -top-28">
              Luxury grooming with expert cuts & styling. Relax, refresh, and
              redefine your look.
            </p>
          </motion.div>

          <div className="bg-[#cc9766] w-full rounded-xl p-2 ">
            <span className="  m-2 text-xl">ii.</span>
            <h2 className="inline text-2xl ">Makeup</h2>
            <motion.img
              src={Makeup}
              alt=""
              className="w-[80%] mt-5 mx-auto rounded-xl"
              initial={{ opacity: 0.2, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <p
              className=" m-2 text-lg p-2
            "
            >
              Professional makeup artistry for every occasion. Enhance your
              natural beauty, elevate your style, and step into confidence.
            </p>
          </div>

          <div className="my-8">
            <span className="text-[#cc9766] m-1 text-xl">iii.</span>
            <h2 className="inline text-[#cc9766] text-2xl ">Nails</h2>
            <div className="flex items-center justify-between mt-5">
              <motion.img
                src={nail1}
                alt=""
                className="w-[60%] rounded-xl mt-4"
                initial={{ opacity: 0.2, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <h2 className="text-[#cc9766] text-3xl ml-6">
                Elevate your style
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-[#cc9766] text-3xl ml-2">
                with stunning nail art
              </h2>
              <motion.img
                src={nail2}
                alt=""
                className="w-[60%] rounded-xl mt-4"
                initial={{ opacity: 0.2, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <div className="bg-[#cc9766] w-full rounded-xl p-2 ">
            <span className="  m-2 text-xl">iv.</span>
            <h2 className="inline text-2xl ">Bridal</h2>
            <div className="flex items-center ">
              <motion.img
                src={bridal1}
                alt=""
                className="w-[60%] rounded-xl mt-4"
                initial={{ opacity: 0.2, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <h2 className="text-3xl ml-4">Bridal</h2>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-3xl ml-2">Makeup</h2>
              <motion.img
                src={bridal2}
                alt=""
                className="w-[60%] rounded-xl mt-4"
                initial={{ opacity: 0.2, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

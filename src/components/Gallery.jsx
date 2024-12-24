import React from 'react'
import { motion } from 'motion/react';
import hairB from "../images/hairBefore.png";
import hairA from "../images/hairAfter.png";
import Makeup from "../images/Makeup.png";
import nail1 from "../images/nail1.png";
import nail2 from "../images/nail2.png";
import bridal1 from "../images/Bridal1.png";
import bridal2 from "../images/Bridal2.png";

const images = [
    { id: 1, src: nail1, alt: "Image 1", size: "w-full h-full" },
    { id: 2, src: nail2, alt: "Image 2", size: "w-full h-full" },
    { id: 3, src: bridal1, alt: "Image 3", size: "row-span-2 h-full" },
    { id: 4, src: bridal2, alt: "Image 4", size: "col-span-2 w-full" },
    { id: 5, src: Makeup, alt: "Image 5", size: "col-span-2 h-full" },
    { id: 6, src: hairA, alt: "Image 5", size: "row-span-3 h-full" },
    { id: 7, src: hairB, alt: "Image 5", size: "col-span-2 h-full" },
  ];
  
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  function Gallery() {

    return (
        <>
        <span className='text-3xl m-4 ml-6  text-[#cc9766]'>3.</span><h1 className='inline text-4xl lg:text-6xl text-[#cc9766] '>Gallery</h1>
        <motion.div
      className="grid grid-cols-3 gap-4 p-4 md:grid-cols-4 lg:grid-cols-5 mt-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          className={`relative overflow-hidden rounded-lg ${image.size}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </motion.div>
      ))}
    </motion.div>
        </>
    );
  };

export default Gallery

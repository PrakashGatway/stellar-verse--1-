import React from "react";
import { motion } from "framer-motion";

const dummyLogos = [
  { src: "unit/1.png", alt: "Abertay University" },
  { src: "unit/2.png", alt: "University of Aberdeen" },
  { src: "unit/3.png", alt: "Aston University" },
  { src: "unit/4.png", alt: "University of Bath" },
  { src: "unit/5.png", alt: "University of Birmingham" },
  { src: "unit/6.png", alt: "University of Bristol" },
  { src: "unit/7.png", alt: "University of Cambridge" },
  { src: "unit/8.png", alt: "University of Edinburgh" },
  { src: "unit/9.png", alt: "Imperial College London" },
  { src: "unit/10.png", alt: "University of Leeds" },
  { src: "unit/11.png", alt: "University of Manchester" },
  { src: "unit/12.png", alt: "Newcastle University" },
  { src: "unit/13.png", alt: "University of Nottingham" },
  { src: "unit/14.png", alt: "University of Oxford" },
  { src: "unit/15.png", alt: "University of Sheffield" }
];

const SliderRow = ({ logos, direction, speed }) => {
  const logoWidth = 100; // px
  const logoHeight = 30; // px
  const gap = 12; // px, for gap-x-8

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const originalSetWidth = logos.length * logoWidth + (logos.length - 1) * gap;

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex flex-nowrap w-max gap-x-8"
        animate={{
          x: direction === "right" ? [`-${originalSetWidth}px`, "0px"] : ["0px", `-${originalSetWidth}px`],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: `${logoWidth}px`, height: `${logoHeight}px` }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
      {/* <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-100 to-transparent backdrop-blur-[1px] pointer-events-none z-4" /> */}
      {/* <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-100 to-transparent backdrop-blur-[1px] pointer-events-none z-4" /> */}
    </div>
  );
};

const PartnerUniversitiesSlider = () => {
  return (
    <div className="flex flex-col rounded-[30px] items-center justify-center sm:py-12 py-6">
      <div className="w-full">
        <div className="sm:space-y-2 space-y-0">
          <SliderRow logos={dummyLogos.slice(0, 10)} direction="right" speed={30} />
          <SliderRow logos={dummyLogos.slice(10, 20)} direction="left" speed={35} />
          {/* <SliderRow logos={dummyLogos.slice(15, 23)} direction="right" speed={28} /> */}
          <SliderRow logos={dummyLogos.slice(0, 15)} direction="left" speed={32} />
        </div>
      </div>
    </div>
  );
};

export default PartnerUniversitiesSlider;
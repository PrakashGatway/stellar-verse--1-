import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentTestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: "Gulati",
      university: "University",
      image: "https://via.placeholder.com/200x250?text=Gulati",
      testimonial: "Gateway Abroad transformed my SAT prep with personalized strategies that helped me achieve my dream score!"
    },
    {
      name: "Stuti Johri", 
      university: "Columbia University",
      image: "https://via.placeholder.com/200x250?text=Stuti+Johri",
      testimonial: "The expert guidance and mock tests made all the difference. I couldn't have reached my target score without them!"
    },
    {
      name: "Elisha Gras",
      university: "Cornell University",
      image: "https://via.placeholder.com/200x250?text=Elisha+Gras",
      testimonial: "The personalized coaching sessions were game-changers. My confidence and scores improved dramatically!"
    },
    {
      name: "Manan Chugh",
      university: "Cornell University",
      image: "https://via.placeholder.com/200x250?text=Manan+Chugh",
      testimonial: "The comprehensive study materials and strategic approach helped me ace the SAT on my first attempt!"
    },
    {
      name: "Omkar Yawale",
      university: "Cornell University",
      image: "https://via.placeholder.com/200x250?text=Omkar+Yawale", 
      testimonial: "Their step-by-step strategies and consistent support made the difference. Highly recommended!"
    },
    {
      name: "Ajitansh Kar",
      university: "Cornell University",
      image: "https://via.placeholder.com/200x250?text=Ajitansh+Kar",
      testimonial: "The mock tests and detailed feedback helped me identify my weak areas and improve significantly!"
    },
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) >= minSwipeDistance) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide  
        prevSlide();
      }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      {/* Slider Container */}
      <div className="relative rounded-2xl py-12 overflow-hidden ">
        
        {/* Main Slider */}
        <div 
          className="relative h-96 md:h-80 w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex flex-col items-center justify-center p-12"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Student Image */}
              <motion.div 
                className="mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <img
                  src={'https://img.freepik.com/free-photo/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.jpg?semt=ais_hybrid&w=740&q=80'}
                  alt={testimonials[currentIndex].name}
                  className="w-44 h-44 rounded-[32px] object-cover border-4 border-red-400 shadow-lg"
                />
              </motion.div>

              {/* Student Name */}
              <motion.h3 
                className="text-xl md:text-2xl font-bold text-gray-800 mb-2 tracking-tight text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {testimonials[currentIndex].name}
              </motion.h3>

              {/* University */}
              <motion.p 
                className="text-red-600 font-semibold mb-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {testimonials[currentIndex].university}
              </motion.p>

              {/* Testimonial */}
              <motion.p 
                className="text-gray-600 text-sm md:text-base text-center italic leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                "{testimonials[currentIndex].testimonial}"
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hover:shadow-xl"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 hover:shadow-xl"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-600 scale-125 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default StudentTestimonialSlider;
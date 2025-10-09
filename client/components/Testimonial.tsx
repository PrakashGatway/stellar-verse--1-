import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Bhanu",
    university: "Cornell University",
    avatar: "testi/2.jpeg"
  },
  {
    name: "Vansh",
    university: "University of Chicago",
    avatar: "testi/3.jpeg"
  },
  {
    name: "Anik",
    university: "Columbia University",
    avatar: "testi/4.jpeg"
  },
  {
    name: "Ananya",
    university: "Northeastern University",
    avatar: "testi/5.jpeg"
  },
  {
    name: "Angel",
    university: "Columbia University",
    avatar: "testi/6.jpeg"
  },
    {
    name: "Nikita",
    university: "Stanford University",
    avatar: "https://www.gatewayabroadeducations.com/uploads/1711104657980-Nikita1500-removebg-preview.png"
  },
    {
    name: "Mohit",
    university: "Yale University",
    avatar: "https://www.gatewayabroadeducations.com/uploads/1711104611747-Mohit1540-removebg-preview.png"
  },
    {
    name: "Sanjoli",
    university: "Columbia University",
    avatar: "https://www.gatewayabroadeducations.com/uploads/1711093388228-sanjoli325-removebg-preview.png"
  },
    {
    name: "Khushal",
    university: "Colorado State University",
    avatar: "https://www.gatewayabroadeducations.com/uploads/1711104185876-Khushal80-removebg-preview.png"
  },
];

const TestimonialsSectionsss = ({visiable}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Auto scroll every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-background to-secondary/30 py-4">
      <div className="container px-3">
        <div className="">
          <div className="relative overflow-hidden">
            <div className="no-scrollbar flex gap-4 overflow-x-hidden py-8">
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-4"
                style={{ 
                  transform: `translateX(-${currentIndex * (200 + 16)}px)`,
                  width: `${duplicatedTestimonials.length * (200 + 16)}px`
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <motion.article
                    key={`${testimonial.name}-${index}`}
                    className="group relative sm:max-w-[200px] max-w-[150px] shrink-0 rounded-3xl border border-border bg-gray-200 p-2 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-floating)] md:max-w-[200px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Photo at top */}
                    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-accent">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="aspect-[4/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Name and university */}
                    <div className="space-y-1 mt-1 text-center">
                      <h3 className="sm:text-lg text-base font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="sm:text-sm text-xs font-semibold text-[hsl(var(--testimonial-accent))]">
                        {testimonial.university}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              onClick={()=>visiable(true)}
              className="inline-flex items-center justify-center bg-amber-400 border border-2 border-black text-black rounded-2xl px-6 py-3 text-base font-semibold shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-floating)]"
            >
              Get Free Profile Evaluation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionsss;
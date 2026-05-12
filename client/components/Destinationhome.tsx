import React, { useRef } from "react";
import { Link } from "react-router-dom";

const homePage = {
  dreamDestination: {
    __order__: 3,
    __originalName__: "dreamDestination",
    __isDuplicate__: false,

    title: "4 Steps || to Your Dream Destination",

    Image:
      "/images/images/6.png",

    steps: [
      {
        order: "1",
        title: "Education Counseling",
        subtitle:
          "<p>We have professional counsellors who offer personalized guidance in assisting you to analyze and consider the best study locations, identify the best universities, select the best program that fits in your academic areas, and future goals. Such an individualised counselling session assists you to develop a solid base for your overseas education experience.</p>",
        ctabutton: "Free Expert Consultation",
        ctaRoute: "https://ooshasglobal.com/contact",
      },

      {
        order: "2",
        title: "University Applications",
        subtitle:
          "<p>We will make it easy to apply to your chosen university. Our experts will work on the documentation, deadlines, and submissions so that you have a good application with no mistakes.</p>",
        ctabutton: "Free Expert Consultation",
        ctaRoute: "https://ooshasglobal.com/contact",
      },

      {
        order: "3",
        title: "Loans & Scholarships",
        subtitle:
          "<p>Our team guides you through a wide range of financial support, including education loans, scholarships, and funding opportunities. So you can manage your expenses easily and pursue your international education without financial stress.</p>",
        ctabutton: "Free Expert Consultation",
        ctaRoute: "https://ooshasglobal.com/contact",
      },

      {
        order: "4",
        title: "Visa Processing",
        subtitle:
          "<p>Rely on our trained visa consultants to manage your documentation and filing with precision—our proven 99% success rate reflects the quality of our guidance.</p>",
        ctabutton: "Free Expert Consultation",
        ctaRoute: "https://ooshasglobal.com/contact",
      },
    ],
  },
};



const Destinationhome = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Steps Data
  const stepsData =
    homePage?.dreamDestination?.steps
      ?.sort((a, b) => Number(a.order) - Number(b.order))
      ?.map((step, index) => ({
        number: Number(step.order) || index + 1,
        title: step.title,
        description: step.subtitle,
        cta: step.ctabutton,
        route: step.ctaRoute,
      })) || [];

  // Image
  const imageSrc =
    homePage?.dreamDestination?.Image ||
    "/images/images/6.png";

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-12 lg:py-20 max-w-[1440px]  px-4 max-w-7xl mx-auto"
    >
      {/* TITLE */}
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
          {homePage?.dreamDestination?.title ? (
            <>
              <span className="text-[#000]">
                {homePage?.dreamDestination?.title.split("||")[0]}
              </span>

              <span className="text-[#000]">
                {homePage?.dreamDestination?.title.split("||")[1]}
              </span>
            </>
          ) : (
            <>
              <span className="text-[#000]">4 Steps</span>{" "}
              <span className="text-[#000]">
                to Your Dream Destination
              </span>
            </>
          )}
        </h2>
      </div>

      {/* MAIN SECTION */}
      <div className="flex flex-col lg:flex-row items-start gap-8 xl:gap-12">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 space-y-6">
          {stepsData.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                top: `${100 + i * 40}px`,
              }}
              className="sticky rounded-2xl p-6 xl:p-8 bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* NUMBER */}
              <div className="w-12 h-12 rounded-full bg-[#d71635] text-white flex items-center justify-center text-lg font-bold mb-4">
                {step.number}
              </div>

              {/* TITLE */}
              <h3 className="text-xl xl:text-2xl font-bold mb-4 text-[#1a1a2e]">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <div
                className="text-base leading-relaxed text-gray-600 mb-6"
                dangerouslySetInnerHTML={{
                  __html: step.description || "",
                }}
              />

              {/* BUTTON */}
              <Link to={step.route || "/contact"}>
                <button className="px-6 py-3 rounded-full border-2 border-[#d71635] text-[#d71635] font-semibold hover:bg-[#d71635] hover:text-white transition-all duration-300">
                  {step.cta || "Free Expert Consultation"}
                </button>
              </Link>
            </div>
          ))}
        </div>

            <div className="w-full hidden lg:block lg:w-1/2 flex justify-center self-stretch">
          <div className="sticky top-24 h-fit w-full max-w-[550px]">
            <img
              src={imageSrc}
              alt="Foreign Education Consultants"
              className="w-full h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinationhome;
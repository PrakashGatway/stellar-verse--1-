import { ChevronLeft, ChevronRight, Heart, Minus, MoveRight, Percent, Plus, Star, University } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import PartnerUniversitiesSlider from "@/components/Univercity";
import ConsultationModal from "@/components/ConsulantModal";
import TestimonialsSectionsss from "@/components/Testimonial";
import AnimatedStats from "@/components/Stats";
import TrainingPlans from "@/components/Plans";
import { useNavigate, useSearchParams } from "react-router-dom";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Destinationhome from "@/components/Destinationhome";
import { Globe, CircleHelp, Award, BookOpenText, MessageSquareQuote } from 'lucide-react';
import axios from "axios";
import { useForm } from "react-hook-form";


type Testimonial = {
  name: string;
  tagline: string;
  quote: string;
  before: number;
  after: number;
  scoreJump: string;
  avatar: string;
};

type Feature = {
  title: string;
  description: string;
  image: string;
  accent: string;
};


type FAQ = {
  question: string;
  answer: string;
};


const testimonials = [
  {
    name: "Top German Universities",
    tagline: "German Public Universities",
    quote:
      "Explore Germany's leading public universities offering world-class education, affordable tuition fees, and excellent career opportunities for international students.",

    country: "Germany",


    image:
      "/images/images/7.png",
  },

  {
    name: "Top Universities in Australia",
    tagline: "Study in Australia",
    quote:
      "Discover Australia's top-ranked universities known for research excellence, innovation, student-friendly campuses, and global recognition.",

    country: "Australia",

    image:
      "/images/images/1.jpeg", 
  },

  {
    name: "Top Italy Universities",
    tagline: "Study in Italy",
    quote:
      "Find prestigious Italian universities offering affordable education, scholarships, and globally recognized programs in arts, design, business, and engineering.",

    country: "Italy",
    image:
      "/images/images/2.jpeg",
  },


  {
    name: "Top Universities in France",
    tagline: "Study in France",
    quote:
      "Explore globally renowned France universities offering outstanding academic excellence, short-duration degrees, and strong career pathways.",

    country: "France",

    image:
      "/images/images/3.jpeg",
  },

  {
    name: "Top Universities in USA",
    tagline: "Study in USA",
    quote:
      "Discover the best universities in the USA with cutting-edge research opportunities, flexible education systems, and global career exposure.",

    country: "USA",

    image:"/images/images/4.jpeg"
    },
];


const features: Feature[] = [
  {
    title: "One-on-One SAT Coaching",
    description: "Exclusive guidance, doubt clearance, and strategies from Gateway Abroad mentors.",
    image: "icon/6.png",
    accent: "bg-indigo-sheen",
  },
  {
    title: "Power-Packed Study Materials",
    description: "Custom drills, proven strategies, and easy-to-use guides designed by our SAT specialists for maximum results.",
    image: "icon/7.png",
    accent: "bg-lavender-sheen",
  },
  {
    title: "100+ SAT Mock Tests",
    description: "Experience real exam conditions with timed drills, detailed analytics, and expert feedback.",
    image: "icon/8.png",
    accent: "bg-hero-gradient",
  },
  {
    title: "Targeted Prep with Predictive Analytics",
    description: "Get a clear path to success: We offer personalized coaching plans and weekly score projections to eliminate guesswork and guarantee your SAT preparation is perfectly on track for admission.",
    image: "icon/9.png",
    accent: "bg-amber-sheen",
  },
  {
    title: "Top University Partnerships",
    description: "Unlock pathways to prestigious global universities through Gateway Abroad’s trusted collaborations—turning your SAT success into world-class education opportunities.",
    image: "icon/10.png",
    accent: "bg-red-100",
  }
];



const faqs: FAQ[] = [
  {
    question: "What is the SAT and why is it important?",
    answer: "The SAT is a standardized test required for admission to many universities abroad, especially in the USA. A good SAT score boosts your chances of getting into top colleges and scholarships."
  },
  {
    question: "Who can take the SAT?",
    answer: "Any student planning to study undergraduate programs abroad (mainly after Class 11 or 12) can take the SAT."
  },
  {
    question: "How is the SAT scored?",
    answer: "The SAT is scored on a scale of 400–1600. A higher score means better chances at top universities."
  },
  {
    question: "When should I start preparing for the SAT?",
    answer: "Ideally, start your SAT preparation in Class 11 to give yourself enough time for practice and retakes if needed."
  },
  {
    question: "How often is the SAT conducted?",
    answer: "The SAT is conducted multiple times a year, usually in March, May, August, October, and December."
  },
  {
    question: "Can I retake the SAT if I'm not happy with my score?",
    answer: "Yes! You can retake the SAT as many times as you want. Most students attempt it 2–3 times to maximize scores."
  },
  {
    question: "How long is the SAT valid?",
    answer: "SAT scores are valid for 5 years."
  },
  {
    question: "Does SAT preparation also help with other exams?",
    answer: "Absolutely. SAT prep improves critical thinking, problem-solving, and English skills that help in exams like GRE, GMAT, and even IELTS/TOEFL."
  },
  {
    question: "How does Gateway Abroad Education help me with SAT prep?",
    answer: "We offer expert guidance, personalized coaching, mock tests, and strategy sessions to help you achieve your dream score."
  },
  {
    question: "Why choose Gateway Abroad Education for SAT coaching?",
    answer: "• Expert mentors with years of experience\n• Small batch sizes for personalized learning\n• Mock tests that simulate the real exam\n• Step-by-step strategies to improve scores\n• Guidance on admissions, applications, and scholarships"
  }
];

const Index = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultationTrigger = (value) => {
    if (type === "whatsapp" && value === true) {
      const message = encodeURIComponent('Hi, I want help with SAT preparation.');
      window.open(`https://wa.me/917023881046?text=${message}`, '_blank');
    } else {
      setIsModalOpen(value);
    }
  };

  useEffect(() => {
    if (String(type).toLowerCase() === "whatsappopen") {
      const timer = setTimeout(() => {
        const message = encodeURIComponent('Hi, I want help with SAT preparation.');
        window.location.href = `https://wa.me/917023881046?text=${message}`;
      }, 150);

      // const timer = setTimeout(() => {
      //   const link = document.createElement("a");
      //   link.href = "https://wa.me/917023881046?text=Hi%20I%20want%20a%20consultation";
      //   link.target = "_blank";
      //   link.rel = "noopener noreferrer";
      //   link.click();
      // }, 5000); // better to keep <10s
      return () => clearTimeout(timer);
    }
  }, [type]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryType = params.get("type");

    if (queryType && queryType.toLowerCase() === "query") {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Header visiable={handleConsultationTrigger} />
      <div className="space-y-10 pb-10 md:space-y-20">
        <HeroSection visiable={handleConsultationTrigger} />
        <Destinationhome />
        <TestimonialsSection visiable={handleConsultationTrigger} />
        <FeaturesSection visiable={handleConsultationTrigger} />
        <FeaturesSection1 />
        <TrustSection visiable={handleConsultationTrigger} />
        {/* <TrainingPlans visiable={handleConsultationTrigger} /> */}
        {/* <FaqSection />
        <MobileCtaBar visiable={handleConsultationTrigger} /> */}
      </div>
      <Footer visiable={handleConsultationTrigger} />
    </>

  );
};



const homePage = {
  hero: {
    title: "Study Abroad Consultant || in India",
    subtitle: `
      <div class="bg-[#102B5C]/90 text-white p-4 rounded-md max-w-[430px] shadow-lg">
        
        <span class="bg-[#d71635] text-white px-4 py-1 rounded-full text-sm inline-block mb-3">
          Apply Now
        </span>

        <h3 class="text-xl font-bold mb-4">
          Applying for Upcoming Intake
        </h3>

        <ul class="space-y-2 text-sm lg:text-base">
          <li>✓ Assured Admission</li>
          <li>✓ Get Up to 100% Scholarship</li>
          <li>✓ 100% Visa Assistance</li>
          <li>✓ English Taught Program Available</li>
          <li>✓ GET 360 DEGREE SOLUTION</li>
        </ul>
      </div>
    `,
    ctaText1: "Get Free Counselling",
    ctaText2: "Speak to an Expert",

    // LOCAL IMAGE
    heroImage: "/images/hero-girl.png",
  },

  stats: {
    item: [

      {
        title: "Total Students",
        stats: "1000+",
        icon: Globe,
      },
      {
        title: "International University",
        stats: "100+",
        icon: University,
      },
      {
        title: "Acceptance Rate",
        stats: "70%",
        icon: Percent,
      },
      {
        title: "Rank",
        stats: "10",
        icon: Award,
      },
      {
        title: "Offers",
        stats: "500+",
        icon: MessageSquareQuote,
      },
    ],
  },

  formSection: {
    title: "Connect With Our || Expert Team",
  },

  services: [
    {
      title: "International Education Counseling",

      subTitle:
        "<p>Our country-specialized counselors provide expert guidance and personalized support to help students choose the right study destination, course, and university based on their academic goals.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },

    {
      title: "Global University Application Support",

      subTitle:
        "<p>We help in the university application process including profile evaluation, SOP guidance, document preparation, application tracking, and admission support for top universities worldwide.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },

    {
      title: "Visa Application & Interview Preparation",

      subTitle:
        "<p>Our visa experts assist students with documentation, visa filing, financial preparation, and mock interview sessions to maximize visa approval success.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },

    {
      title: "Financial Aid & Scholarship Support",

      subTitle:
        "<p>We guide students in applying for scholarships, education loans, grants, and financial aid opportunities to make studying abroad affordable and stress-free.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
    },

    {
      title: "Pre-Departure Support",

      subTitle:
        "<p>Our team provides complete pre-departure assistance including accommodation guidance, forex support, travel planning, airport pickup coordination, and cultural orientation.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    },

    {
      title: "Additional Student Support Services",

      subTitle:
        "<p>We continue supporting students even after admission through career counseling, internship guidance, part-time job support, and post-arrival assistance abroad.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },
  ],

};


const HeroSection = ({ visiable }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { fullName, email, mobileNumber, city, destination, state, ...rest } = data;
    try {
      let response = await axios.post('https://uat.gatewayabroadeducations.com/api/v1/leads', {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: mobileNumber,
        city: city.trim(),
        coursePreference: 'NA',
        source: "googleAds",
        extraDetails: {
          ...rest,
          destination: destination,
          state: state
        }
      });
      if (response.data.success) {
        localStorage.setItem('formFilled', 'true');
        navigate('/thankyou');
        reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-10 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#d71635]">
                Study Abroad Consultant
                <span className="text-[#000] font-bold">
                  {" "}
                  in India
                </span>
              </h1>

              {/* CARD */}
              <div className="bg-[#d71635]/95 text-white p-5 rounded-md max-w-[430px] shadow-lg mt-6">
                <span className="bg-[#000] text-white px-4 py-1 rounded-full text-sm inline-block mb-3">
                  Apply Now
                </span>

                <h3 className="text-xl font-bold mb-4 text-[#000]">
                  Applying for Upcoming Intake
                </h3>

                <ul className="space-y-2 text-sm lg:text-base">
                  <li>✓ Assured Admission</li>
                  <li>✓ Get Up to 100% Scholarship</li>
                  <li>✓ 100% Visa Assistance</li>
                  <li>✓ English Taught Program Available</li>
                  <li>✓ GET 360 DEGREE SOLUTION</li>
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => visiable(true)}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 border border-2 border-black shadow-xl border-black px-8 py-3 text-base font-semibold text-black shadow-floating transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Book Demo
                  <MoveRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute -right top-51 animate-spin [animation-duration:180s] hidden lg:block">
                  <img
                    src="/images/hero-bg-round.png"
                    alt="circle"
                    className="w-[640px] max-w-none"
                  />
                </div>

                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative z-1 -bottom-10"
                >
                  <img
                    src={"https://res.cloudinary.com/dhzire2mc/image/upload/v1772779540/cway-admin/jx0ei9ny7dobkolcz6po.png"}
                    width={450}
                    height={900}
                    alt="cap"
                    className="lg:w-[420px] w-[200px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {homePage.stats.item.map((stat, index) => {
            const Icon = stat?.icon;

            return (
              <div
                key={index}
                className="bg-[#ececec] rounded-2xl px-4 py-5 flex items-center gap-3 hover:bg-[#d71635] group transition duration-300"
              >
                <Icon className="w-10 h-10 text-[#d71635] group-hover:text-white" />

                <div>
                  <p className="text-gray-600 text-sm group-hover:text-white">
                    {stat.title}
                  </p>

                  <h3 className="text-[#000] font-bold text-lg group-hover:text-white">
                    {stat.stats}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#d71635] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="hidden lg:block">
            <img
              src="/images/home-enquiry.png"
              alt="enquiry"
              className="w-[380px]"
            />
          </div>

          {/* FORM */}
          <div className="w-full lg:w-[60%]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Connect With Our
              <span className="block">Expert Team</span>
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register('fullName', { required: 'Full Name is required' })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.fullName && <span className="text-yellow-300 text-sm">{errors.fullName.message}</span>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email ID"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format'
                    }
                  })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.email && <span className="text-yellow-300 text-sm">{errors.email.message}</span>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  {...register('mobileNumber', { required: 'Mobile Number is required' })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.mobileNumber && <span className="text-yellow-300 text-sm">{errors.mobileNumber.message}</span>}
              </div>

              <div>
                <select 
                  {...register('destination', { required: 'Destination is required' })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option className="text-black" value="">Select Destination</option>
                  <option className="text-black" value="USA">Study In USA</option>
                  <option className="text-black" value="UK">Study In UK</option>
                  <option className="text-black" value="France">Study In France</option>
                  <option className="text-black" value="Italy">Study In Italy</option>
                  <option className="text-black" value="Dubai">Study In Dubai</option>
                  <option className="text-black" value="Germany">Study In Germany</option>
                </select>
                {errors.destination && <span className="text-yellow-300 text-sm">{errors.destination.message}</span>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="State"
                  {...register('state', { required: 'State is required' })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.state && <span className="text-yellow-300 text-sm">{errors.state.message}</span>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="City"
                  {...register('city', { required: 'City is required' })}
                  className="w-full border border-white bg-transparent rounded-lg px-4 py-3 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                {errors.city && <span className="text-yellow-300 text-sm">{errors.city.message}</span>}
              </div>

              <div className="md:col-span-2 flex justify-center">
                <button 
                  type="submit"
                  className="bg-[#123b73] text-white px-10 py-3 rounded-lg font-semibold hover:bg-black transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};


const TestimonialsSection = ({ visiable }) => {
  const containerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto Scroll
  useEffect(() => {
    if (!autoScroll) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrame;

    const scroll = () => {
      container.scrollLeft += 0.5;

      if (
        container.scrollLeft >=
        container.scrollWidth / 2
      ) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [autoScroll]);

  return (
    <section className="bg-[#f5f5f5] py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-[#F15A29] text-sm font-semibold uppercase">
            Top
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#163B65]">
            Universities Hub
          </h2>

          <div className="w-24 h-[3px] bg-[#F15A29] mt-2"></div>
        </div>

        {/* Cards */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-4"
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
        >
          {testimonials.map(
            (testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="min-w-[350px] bg-white border rounded shadow-sm overflow-hidden"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-[170px] object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-bold text-[#163B65] text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {testimonial.tagline}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => visiable(true)}
            className="bg-[#E53935] hover:bg-[#c62828] text-white px-8 py-4 rounded font-semibold transition-all"
          >
            Connect with Experts
          </button>
        </div>

        {/* Scholarship Banner */}
        <div className="relative mt-10 overflow-hidden rounded bg-gray-800">
          {/* Image removed */}

          <div className="relative inset-0 bg-black/50 flex flex-col justify-center px-6 py-10 md:px-12">
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Grab upto 100% Scholarship
            </h2>

            <p className="text-white mt-4 max-w-3xl">
              Find the opportunities for Scholarships in Italy
              with our comprehensive guidance to ensure your
              academic convenience
            </p>

            <button
              onClick={() => visiable(true)}
              className="mt-6 w-fit bg-[#E53935] hover:bg-[#c62828] text-white px-6 py-3 rounded font-semibold"
            >
              Connect with Experts
            </button>
          </div>
        </div>


        {/* Bottom Text */}
        <p className="text-center text-xl mt-6 text-gray-700">
          Find the Opportunities for Scholarships in Study
          Abroad with our comprehensive guidance to ensure
          your academic convenience
        </p>
      </div>
    </section>
  );
};


const courseCategories = [
  {
    title: "Engineering",
    items: [
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Civil Engineering",
      "Environmental Engineering",
      "Automation & Robotics Engineering",
    ],
  },

  {
    title: "Technology & IT",
    items: [
      "Artificial Intelligence (AI)",
      "Cybersecurity",
      "Data Science & Analytics",
      "Software Engineering",
      "Cloud Computing & Engineering",
    ],
  },

  {
    title: "Design & Arts",
    items: [
      "Fashion Design",
      "Luxury Brand Management",
      "Product Design",
      "Architecture",
      "Interior Design",
    ],
  },

  {
    title: "Business & Management",
    items: [
      "Master of Business Administration (MBA)",
      "Finance & Banking",
      "International Business",
      "Luxury Management",
      "Marketing & Brand Management",
    ],
  },

  {
    title: "Hospitality & Tourism",
    items: [
      "Hospitality Management",
      "Tourism Management",
      "Event Management",
      "Hotel & Resort Management",
      "Food & Beverage Management",
    ],
  },

  {
    title: "Science & Humanities",
    items: [
      "Mechanical Engineering",
      "Aerospace Engineering",
      "Civil Engineering",
      "Environmental Engineering",
      "Automation & Robotics Engineering",
    ],
  },
];

const FeaturesSection = ({ visiable }) => {
  return (
    <section className="bg-[#fff] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Top Demanding Courses
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-lg">
            Here are some of the most in demand courses for
            Study Abroad that offer great career prospects.
            Global recognition, and quality education at
            affordable costs.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {courseCategories.map((course, index) => (
            <div
              key={index}
              className="bg-white border rounded shadow-sm p-5"
            >
              <h3 className="text-[#E53935] font-bold text-xl mb-4 text-center">
                {course.title}
              </h3>

              <ul className="space-y-2">
                {course.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-sm border-b pb-2"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => visiable(true)}
            className="bg-[#E53935] hover:bg-[#c62828] text-white px-8 py-4 rounded font-semibold flex items-center gap-2"
          >
            Connect with Experts to Choose the Right Course
            <MoveRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};


const whyChooseGateway = {
  title: "Why Students Choose Getway Study abroad Consultant",

  services: [
    {
      title: "Student Profile Analysis",

      subTitle:
        "<p>We assess your academic background, career goals, and interests to create a personalized study plan tailored for Italian universities.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    {
      title: "Course & University Selection",

      subTitle:
        "<p>Based on your profile and preferences, we help you shortlist the best-fit courses and top-ranked universities in Italy.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
    },

    {
      title: "Admission Assistance",

      subTitle:
        "<p>Our team supports you through the entire application process, from document preparation to submitting applications on time.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },

    {
      title: "Scholarship Assistance",

      subTitle:
        "<p>We match students with relevant scholarships and provide full support in the application process to maximize chances of funding.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
    },

    {
      title: "IELTS Coaching",

      subTitle:
        "<p>YES Italy offers expert IELTS training to help you meet language proficiency requirements for Italian universities. Our coaching includes personalized practice & mock exams to boost your score.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },

    {
      title: "Study Visa Assistance",

      subTitle:
        "<p>Our team provides complete support for the Italy student visa process, including document preparation, appointments, and interview guidance.</p>",

      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
  ],

  buttonText: "Book Your FREE Counselling Now!",
};


const FeaturesSection1 = () => {
  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            {whyChooseGateway.title}
          </h2>

        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {whyChooseGateway?.services.map((course, index) => (
            <div
              key={index}
              className="bg-white border rounded shadow-sm p-5"
            >
              <h3 className="text-[#E53935] font-bold text-xl mb-4 text-center">
                {course.title}
              </h3>

              <p className="text-gray-700 text-sm border-b pb-2" dangerouslySetInnerHTML={{ __html: course.subTitle }}></p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


// const TestimonialsSection = ({ visiable }) => {
//   const containerRef = useRef(null);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [autoScroll, setAutoScroll] = useState(true);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Auto-scroll effect
//   useEffect(() => {
//     if (!autoScroll) return;

//     const container = containerRef.current;
//     if (!container) return;

//     const scrollWidth = container.scrollWidth / 2;
//     let animationFrame;
//     let startTime;

//     const animateScroll = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;

//       const progress = (elapsed % 40000) / 40000;
//       const scrollPos = progress * scrollWidth;

//       container.scrollLeft = scrollPos;
//       animationFrame = requestAnimationFrame(animateScroll);
//     };

//     animationFrame = requestAnimationFrame(animateScroll);

//     return () => {
//       cancelAnimationFrame(animationFrame);
//     };
//   }, [autoScroll]);

//   // Touch handlers
//   const handleTouchStart = (e) => {
//     setAutoScroll(false);
//     setIsScrolling(true);
//     const touch = e.touches[0] || e.changedTouches[0];
//     setStartX(touch.screenX);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleTouchMove = (e) => {
//     if (!isScrolling) return;

//     e.preventDefault();
//     const touch = e.touches[0] || e.changedTouches[0];
//     const x = touch.screenX;
//     const walk = (x - startX) * 1;

//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleTouchEnd = () => {
//     setIsScrolling(false);
//     setTimeout(() => setAutoScroll(true), 2000);
//   };

//   const handleMouseDown = (e) => {
//     setAutoScroll(false);
//     setIsScrolling(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e) => {
//     if (!isScrolling) return;

//     e.preventDefault();
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;

//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsScrolling(false);
//     setTimeout(() => setAutoScroll(true), 3000);
//   };

//   const handleMouseLeave = () => {
//     if (isScrolling) {
//       setIsScrolling(false);
//       setTimeout(() => setAutoScroll(true), 3000);
//     }
//   };

//   // Hover handlers
//   const handleMouseEnter = () => {
//     setAutoScroll(false);
//   };

//   const handleMouseLeaveContainer = () => {
//     if (!isScrolling) {
//       setTimeout(() => setAutoScroll(true), 3000);
//     }
//   };

//   return (
//     <>
//       <section id="testimonials" className="relative scroll-mt-20 bg-background">
//         <div className="container">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="mt-4 text-2xl font-semibold text-balance md:text-[40px]">
//               Top <span className="text-primary">Scorers</span>
//             </h2>
//             <p className="mt-4 text-base text-foreground/70">
//               Hear how Gateway Abroad students achieved their goals with personalized coaching and data-driven strategies.
//             </p>
//           </div>

//           <div className="mt-8 space-y-8">
//             <div
//               ref={containerRef}
//               onTouchStart={handleTouchStart}
//               onTouchMove={handleTouchMove}
//               onTouchEnd={handleTouchEnd}
//               onMouseDown={handleMouseDown}
//               onMouseMove={handleMouseMove}
//               onMouseUp={handleMouseUp}
//               onMouseLeave={handleMouseLeave}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeaveContainer}
//               className="no-scrollbar py-12 flex gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
//             >
//               {/* Duplicate testimonials for infinite scroll effect */}
//               {[...testimonials, ...testimonials].map((testimonial, index) => (
//                 <motion.article
//                   key={`${testimonial.name}-${index}`}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="group relative max-w-[300px] shrink-0 rounded-3xl border border-4 border-border bg-card px-6 pb-6 pt-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-floating)] md:max-w-[420px]"
//                 >
//                   <div className="absolute -top-12 right-6">
//                     <div className="relative">
//                       <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[hsl(var(--testimonial-accent))] to-primary blur-xl transition-opacity duration-300" />
//                       <div className="relative rounded-full border-4 border-card bg-gradient-to-br from-[hsl(var(--testimonial-accent))] to-primary p-1 shadow-lg">
//                         <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-red-400 bg-white">
//                           <img
//                             src={testimonial.avatar}
//                             alt={testimonial.name}
//                             className="h-full w-full object-cover"
//                             loading="lazy"
//                             decoding="async"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-[#E93A3A]">
//                         {testimonial.name}
//                       </h3>
//                       <p className="mt-1 text-xs font-semibold text-natural-900 uppercase tracking-[0.2em] text-muted-foreground">
//                         {testimonial.tagline}
//                       </p>
//                     </div>

//                     <p className="min-h-[120px] text-sm leading-relaxed text-foreground/70">
//                       {testimonial.quote}
//                     </p>
//                   </div>
//                 </motion.article>
//               ))}
//             </div>

//             <div className="flex justify-center md:flex">
//               <button
//                 onClick={() => visiable(true)}
//                 className="inline-flex items-center bg-amber-400 border border-2 border-black text-black justify-center gap-3 rounded-2xl px-8 py-3 text-base font-semibold shadow-floating transition hover:-translate-y-0.5"
//               >
//                 Book Free SAT Demo
//                 <MoveRight className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// const FeaturesSection = ({ visiable }) => {
//   return (
//     <section id="course-features" className="scroll-mt-20 bg-background">
//       <div className="container px-3">
//         <div className="mx-auto mb-12 max-w-4xl text-center">
//           <h2 className="mt-4 text-2xl font-semibold text-balance md:text-[40px]">
//             One Stop Solution for<span className="text-primary"> SAT Excellence</span>
//           </h2>
//           <p className="mt-6 text-base text-foreground/70 md:text-lg">
//             An immersive curriculum spanning concept mastery, pattern recognition, time management, and exam temperament—all tailored around your baseline score.
//           </p>
//         </div>

//         <div className="grid sm:gap-8 gap-2 lg:grid-cols-3">
//           <div className="lg:col-span-2">
//             <div className="grid gap-2 sm:gap-6 grid-cols-2">
//               {features.slice(0, 4).map((feature) => (
//                 <FeatureCard key={feature.title} feature={feature} />
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-col gap-6">
//             {features.slice(4, 5).map((feature) => (
//               <LargeFeatureCard key={feature.title} feature={feature} visiable={visiable} />
//             ))}
//           </div>
//           <div className="block sm:hidden relative overflow-hidden rounded-[28px] border border-primary/20 bg-amber-sheen px-6 py-6 text-primary sm:px-6">
//             <p className=" text-base font-semibold text-primary/90">
//               Get direct, zero-cost guidance on global admissions from leading experts. Claim Your Free Session Today
//             </p>
//             <button onClick={() => visiable(true)} className="mt-3 rounded-full bg-amber-400 border border-2 border-black text-black px-6 py-3 text-sm font-semibold transition-all hover:bg-primary/90">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// Regular Feature Card (for left side)
const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[28px] border border-border/80 p-3 sm:p-6 shadow-card transition-all hover:shadow-lg",
        feature.accent,
      )}
    >
      {/* Image Top Left */}
      <div className="mb-0 sm:mb-2 rounded p-3 h-12 w-12 sm:w-20 sm:h-20 sm: flex items-center justify-center">
        <img
          src={feature.image}
          alt={feature.title}
          className="sm:w-14 sm:h-14 h-6 w-6 rounded object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="sm:text-lg font-semibold text-foreground text-sm">{feature.title}</h3>
        <p className="sm:mt-2 mt-0 flex-1 sm:text-sm text-foreground/70 text-xs">{feature.description}</p>
      </div>
    </article>
  );
};

const LargeFeatureCard = ({ feature, visiable }) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[28px] border border-border/80 p-6 shadow-card transition-all hover:shadow-lg",
        feature.accent,
      )}
    >
      {/* Full Width Image */}
      <div className="mb-2 rounded p-3 w-20 h-20 flex items-center justify-center">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-14 h-14 rounded object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="sm:text-xl text-lg font-semibold text-foreground">{feature.title}</h3>
        <p className="sm:mt-3 mt-1 flex-1 sm:text-base text-sm mb-2 text-foreground/70">{feature.description}</p>
      </div>
      <div className="hidden sm:block relative overflow-hidden rounded-[28px] border border-primary/20 bg-amber-sheen px-4 py-4 text-primary sm:px-6">
        <p className=" text-base font-semibold text-primary/90">
          Get direct, zero-cost guidance on global admissions from leading experts. Claim Your Free Session Today
        </p>
        <button onClick={() => visiable(true)} className="mt-3 bg-amber-400 border border-2 border-black text-black rounded-full px-6 py-3 text-sm font-semibold transition-all">
          Book Now
        </button>
      </div>
    </article>
  );
};

const TrustSection = ({ visiable }) => {
  return (
    <section className="w-full py-8 lg:py-16 bg-[#fff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {/* TOP HEADING */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#163B65] leading-tight">
            Your SAT Success:
            <span className="text-[#d71635]">
              {" "}
              Your Ticket to Global Universities
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-lg leading-relaxed">
            Boost your SAT score with expert coaching at Gateway
            Abroad! Get personalized training, practice tests,
            and strategies to ace the SAT and secure admission
            to top universities worldwide.
          </p>
        </div>

        {/* SERVICES SECTION */}
        <div className="rounded-[30px] relative">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 relative">
            {/* LEFT ORANGE CARD */}
            <div
              className="
                bg-[#d71635]
                rounded-2xl
                p-6 md:p-8
                flex flex-col justify-center
                lg:min-w-[280px]
                lg:max-w-[320px]
                h-auto lg:h-[380px]
                z-10
                lg:mt-20
                shadow-lg
              "
            >
              <h2 className="text-white leading-tight">
                <span className="block text-2xl md:text-4xl font-light">
                  Our Services
                </span>

                <span className="block text-xl md:text-2xl font-bold mt-2 relative">
                  Your Complete Support for Studying Abroad

                  <span className="hidden md:block absolute left-0 -bottom-3 w-24 h-1 bg-yellow-400 rounded-full"></span>
                </span>
              </h2>
            </div>

            {/* BORDER BOX */}
            <div className="hidden lg:block absolute h-[83%] w-[90%] border border-[#d71635] left-40 -bottom-8 rounded-[40px] z-0"></div>

            {/* RIGHT SERVICES */}
            <div className="flex-1 lg:pl-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                {homePage.services?.map(
                  (service, index) => (
                    <div
                      key={index}
                      className="
                        bg-white
                        rounded-2xl
                        p-5
                        text-center
                        border
                        shadow-sm
                        hover:shadow-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      {/* ICON */}
                      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#EEF4FF]">
                        <img
                          src={
                            service.icon ||
                            "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                          }
                          alt={service.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-[#163B65] font-bold text-lg leading-tight mb-3">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <div
                        className="text-sm text-gray-600 leading-relaxed line-clamp-4"
                        dangerouslySetInnerHTML={{
                          __html: service.subTitle || "",
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => visiable(true)}
              className="
                bg-[#E53935]
                hover:bg-[#c62828]
                text-white
                px-8
                py-4
                rounded
                font-semibold
                border-2
                border-black
                transition-all
                duration-300
              "
            >
              CLICK HERE TO BOOK AN APPOINTMENT
            </button>
          </div>
        </div>

        {/* STUDENT SECTION */}
        {/* <div className="text-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#163B65]">
            Our Students <span className="text-[#d71635]">Shine</span>
          </h2>
        </div> */}

        {/* TESTIMONIALS */}
        {/* <div className="mt-10">
          <TestimonialsSectionsss visiable={visiable} />
        </div> */}
      </div>
    </section>
  );
};

// export default TrustSection;

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-20 bg-background pb-12">
      <div className="container px-3">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-4 text-2xl font-semibold text-balance md:text-[40px]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Everything you need to know about the LeapScholar SAT program, from scholarships to course timelines.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl space-y-2">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({
  item,
  open,
  onToggle,
}: {
  item: FAQ;
  open: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="rounded-[18px] border border-gray-300 bg-white/80 sm:px-6 px-3 sm:py-3 py-2 shadow-card transition hover:border-primary/60">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="sm:text-base text-sm font-semibold text-foreground">
          {item.question}
        </span>
        <span className="flex p-1 items-center justify-center rounded-full border border-border bg-secondary text-primary transition hover:border-primary">
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden text-sm text-foreground/70 transition-all duration-300 ease-out",
          open ? "sm:mt-4 mt-1 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden leading-relaxed">{item.answer}</div>
      </div>
    </div>
  );
};

export default Index;

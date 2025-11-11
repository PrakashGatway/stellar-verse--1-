import { ChevronLeft, ChevronRight, Heart, Minus, MoveRight, Plus, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import PartnerUniversitiesSlider from "@/components/Univercity";
import ConsultationModal from "@/components/ConsulantModal";
import TestimonialsSectionsss from "@/components/Testimonial";
import AnimatedStats from "@/components/Stats";
import TrainingPlans from "@/components/Plans";
import { useSearchParams } from "react-router-dom";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

type UniversityLogo = {
  name: string;
  src: string;
};

type Stat = {
  value: string;
  label: string;
  helper: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const heroImages = {
  desktop:
    "https://collegeprep.uworld.com/wp-content/uploads/2025/02/CP_AP-SAT_Graphics_Video_Graphic-02.webp",
  mobile:
    "https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/sat-lp/khitijnew%20mweb_ZisVI5iD1.webp",
  trustpilot:
    "https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/sat-lp/stars-4.5%201_hmpf9ff3lQ.svg",
};

const testimonials: Testimonial[] = [
  {
    name: "Nikita",
    tagline: "SAT 1500 Scorer",
    quote:
      "When I visited Gateway Abroad Jaipur, my quest for SAT coaching stopped. You can tell from the first class itself that these people are genuinely interested in you doing well and achieving a good score in the SAT.",
    before: 1250,
    after: 1500,
    scoreJump: "+250",
    avatar:
      "https://www.gatewayabroadeducations.com/uploads/1711104657980-Nikita1500-removebg-preview.png",
  },
  {
    name: "Vansh",
    tagline: "SAT 1550 Scorer",
    quote:
      "I joined Gateway Abroad for the prepping of SAT exam and I think it was the best decision. Strategies that were explained to me for math and verbal sections along with practice tests were in abundance. Happy to recommend them to anyone for SAT prep!!",
    before: 1300,
    after: 1550,
    scoreJump: "+250",
    avatar:
      "testi/3.jpeg",
  },
  {
    name: "Yatti",
    tagline: "SAT 1490 Scorer",
    quote:
      "I would like to thank the faculty of Gateway Abroad for their outstanding guidance and instruction. Their ability to easily explain complicated ideas demonstrated their in-depth knowledge and subject-matter expertise. Great experience!!",
    before: 1240,
    after: 1490,
    scoreJump: "+250",
    avatar:
      "https://www.gatewayabroadeducations.com/uploads/1711104728223-Yatti1490-removebg-preview.png",
  },
  {
    name: "Mohit",
    tagline: "SAT 1540 Scorer",
    quote:
      "Superb coaching institute! All the faculties are immensely qualified and are master of their areas of teaching. Before the real exam, they provide several mock tests and intensive drill sessions, which are very helpful.",
    before: 1290,
    after: 1540,
    scoreJump: "+250",
    avatar:
      "https://www.gatewayabroadeducations.com/uploads/1711104611747-Mohit1540-removebg-preview.png",
  },
  {
    name: "Priyanshi",
    tagline: "SAT 1510 Scorer",
    quote:
      "Gateway Abroad is the best place to get tutored for the SAT. I took online classes from them and it was an amazing experience for me.",
    before: 1260,
    after: 1510,
    scoreJump: "+250",
    avatar:
      "https://www.gatewayabroadeducations.com/uploads/1711104691217-Priyanshi1510-removebg-preview.png",
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

const stats: Stat[] = [
  {
    value: "12,000+",
    label: "Visa Success Stories",
    helper: "Gateway Abroad alumni now thriving across the UK, US, Canada, and more.",
  },
  {
    value: "50,000+",
    label: "Students Mentored",
    helper: "Personalised SAT roadmaps backed by admissions strategy experts.",
  },
  {
    value: "450,000+",
    label: "Live Learning Hours",
    helper: "Interactive classes, booster clinics, and deep-dive analytics workshops.",
  },
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
        <TestimonialsSection visiable={handleConsultationTrigger} />
        <FeaturesSection visiable={handleConsultationTrigger} />
        <TrustSection visiable={handleConsultationTrigger} />
        {/* <TrainingPlans visiable={handleConsultationTrigger} /> */}
        <FaqSection />
        <MobileCtaBar visiable={handleConsultationTrigger} />
      </div>
      <Footer visiable={handleConsultationTrigger} />
    </>

  );
};

const HeroSection = ({ visiable }) => {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden rounded-b-[48px] bg-[#F5E6FC] py-8 pb-8"
      >
        <div className="pointer-events-none absolute -top-12 right-24 hidden h-64 w-64 rounded-full bg-primary/20 blur-3xl md:block" />
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-60 w-60 rounded-full bg-[#fff7dc]/60 blur-3xl md:block" />

        <div className="container relative flex flex-col items-stretch gap-16 md:flex-row md:items-center">
          <div className="max-w-xl space-y-4">

            <h1 className="text-2xl font-bold leading-[1.4] text-balance sm:text-[42px] md:text-[48px]">
              <span className="">Dream Big Score Higher:</span>
              <span className="block text-primary">1500+ SAT with Experts</span>
            </h1>

            <ul className="space-y-2 text-base text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary" />
                Interactive Live Classes + 1:1 Mentorship.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary" />
                Unlimited doubt clearing.
              </li>
              {/* <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-primary" />
                Proven SAT success formula with 200+ point score boost guaranteed.
              </li> */}
            </ul>
            <div className="md:hidden block">
              <picture className="">
                <source media="(max-width: 267px)" srcSet={'/mobile.png'} />
                <img
                  src='/mobile.png'
                  alt="SAT coaching"
                  className="h-[360px] sm:h-[560px] w-[600px] mx-auto rounded-[32px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              <button
                onClick={() => visiable(true)}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 border border-2 border-black shadow-xl border-black px-8 py-3 text-base font-semibold text-black shadow-floating transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book Demo
                <MoveRight className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${index < 4.9
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300 fill-current'
                          }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm font-semibold text-foreground/70">
                  Rated on <span className="text-foreground">Google</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 rounded-[40px] hidden md:block">
            {/* <StudentTestimonialSlider /> */}
            <div className="absolute -top-10 left-10 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
            <picture>
              <source media="(max-width: 267px)" srcSet={'/SAT.png'} />
              <img
                src='/SAT.png'
                alt="SAT coaching"
                className="h-[280px] sm:h-[560px] w-[600px] mx-auto rounded-[32px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
            {/* <div className="mt-3 rounded-2xl border border-border/70 bg-white px-6 py-4 text-sm font-semibold text-foreground/80 shadow-card">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-[0.4em] text-primary">Score boost</span>
              <span className="text-base text-foreground">200+ average jump</span>
            </div>
            <p className="mt-3 text-sm text-foreground/60">
              Every learner receives bespoke assignments, mock reviews, and a weekly score projection dashboard.
            </p>
          </div> */}
          </div>
        </div>
      </section>
      <div className="container">
        <AnimatedStats />
      </div>

    </>
  );
};

const TestimonialsSection = ({ visiable }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return;

    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    let animationFrame;
    let startTime;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = (elapsed % 40000) / 40000;
      const scrollPos = progress * scrollWidth;

      container.scrollLeft = scrollPos;
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [autoScroll]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setAutoScroll(false);
    setIsScrolling(true);
    const touch = e.touches[0] || e.changedTouches[0];
    setStartX(touch.screenX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isScrolling) return;

    e.preventDefault();
    const touch = e.touches[0] || e.changedTouches[0];
    const x = touch.screenX;
    const walk = (x - startX) * 1;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsScrolling(false);
    setTimeout(() => setAutoScroll(true), 2000);
  };

  const handleMouseDown = (e) => {
    setAutoScroll(false);
    setIsScrolling(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
    setTimeout(() => setAutoScroll(true), 3000);
  };

  const handleMouseLeave = () => {
    if (isScrolling) {
      setIsScrolling(false);
      setTimeout(() => setAutoScroll(true), 3000);
    }
  };

  // Hover handlers
  const handleMouseEnter = () => {
    setAutoScroll(false);
  };

  const handleMouseLeaveContainer = () => {
    if (!isScrolling) {
      setTimeout(() => setAutoScroll(true), 3000);
    }
  };

  return (
    <>
      <section id="testimonials" className="relative scroll-mt-20 bg-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-4 text-2xl font-semibold text-balance md:text-[40px]">
              Top <span className="text-primary">Scorers</span>
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Hear how Gateway Abroad students achieved their goals with personalized coaching and data-driven strategies.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div
              ref={containerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeaveContainer}
              className="no-scrollbar py-12 flex gap-4 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing"
            >
              {/* Duplicate testimonials for infinite scroll effect */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative max-w-[300px] shrink-0 rounded-3xl border border-4 border-border bg-card px-6 pb-6 pt-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-floating)] md:max-w-[420px]"
                >
                  <div className="absolute -top-12 right-6">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[hsl(var(--testimonial-accent))] to-primary blur-xl transition-opacity duration-300" />
                      <div className="relative rounded-full border-4 border-card bg-gradient-to-br from-[hsl(var(--testimonial-accent))] to-primary p-1 shadow-lg">
                        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-red-400 bg-white">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#E93A3A]">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-natural-900 uppercase tracking-[0.2em] text-muted-foreground">
                        {testimonial.tagline}
                      </p>
                    </div>

                    <p className="min-h-[120px] text-sm leading-relaxed text-foreground/70">
                      {testimonial.quote}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="flex justify-center md:flex">
              <button
                onClick={() => visiable(true)}
                className="inline-flex items-center bg-amber-400 border border-2 border-black text-black justify-center gap-3 rounded-2xl px-8 py-3 text-base font-semibold shadow-floating transition hover:-translate-y-0.5"
              >
                Book Free SAT Demo
                <MoveRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeaturesSection = ({ visiable }) => {
  return (
    <section id="course-features" className="scroll-mt-20 bg-background">
      <div className="container px-3">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mt-4 text-2xl font-semibold text-balance md:text-[40px]">
            One Stop Solution for<span className="text-primary"> SAT Excellence</span>
          </h2>
          <p className="mt-6 text-base text-foreground/70 md:text-lg">
            An immersive curriculum spanning concept mastery, pattern recognition, time management, and exam temperament—all tailored around your baseline score.
          </p>
        </div>

        <div className="grid sm:gap-8 gap-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-2 sm:gap-6 grid-cols-2">
              {features.slice(0, 4).map((feature) => (
                <FeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {features.slice(4, 5).map((feature) => (
              <LargeFeatureCard key={feature.title} feature={feature} visiable={visiable} />
            ))}
          </div>
          <div className="block sm:hidden relative overflow-hidden rounded-[28px] border border-primary/20 bg-amber-sheen px-6 py-6 text-primary sm:px-6">
            <p className=" text-base font-semibold text-primary/90">
              Get direct, zero-cost guidance on global admissions from leading experts. Claim Your Free Session Today
            </p>
            <button onClick={() => visiable(true)} className="mt-3 rounded-full bg-amber-400 border border-2 border-black text-black px-6 py-3 text-sm font-semibold transition-all hover:bg-primary/90">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section id="trust" className="scroll-mt-20 overflow-hidden bg-background">
      <div className="container px-2">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mt-6 text-2xl font-semibold text-balance md:text-[40px]">
            Your SAT Success: <span className="text-primary"> Your Ticket to Global Universities</span>
          </h2>
          <p className="mt-4 text-base text-foreground/70">
            Boost your SAT score with expert coaching at Gateway Abroad! Get personalized training, practice tests, and strategies to ace the SAT and secure admission to top universities worldwide. Your journey to success starts here
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-border bg-highlight-soft px-3 py-3 shadow-card">
          <PartnerUniversitiesSlider />
        </div>
      </div>
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mt-12 text-2xl font-semibold text-balance md:text-[40px]">
          Our Students <span className="text-primary">Shine</span>
        </h2>
      </div>
      <TestimonialsSectionsss visiable={visiable} />
    </section>
  );
};

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

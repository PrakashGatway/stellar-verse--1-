import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const brandLogo = "https://www.gatewayabroadeducations.com/images/logo.svg";

const Footer = ({ visiable }) => {
  return (
    <footer className="bg-background" id="footer">
      {/* Promotional CTA Section */}
   
   
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#921418] via-[#B11E23] to-[#D6282E] px-4 py-16
     text-white ">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
        {/* Main Headline */}
        <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white">
          Want Guaranteed Admissions <br className="hidden md:inline" />
          at Top Universities?
        </h2>

        {/* Value Proposition Cards */}
        <div className="mx-auto max-w-2xl rounded-2xl bg-black/15 p-6 backdrop-blur-sm md:p-8">
          <div className="space-y-4 text-base md:text-xl">
            <p className="text-xl font-black uppercase tracking-wide text-yellow-300 md:text-3xl">
              Book Now For A Free Counselling Session!
            </p>
            <div className="h-px bg-white/20 my-2" />
            <p className="font-medium text-white/90">
              Register Today to Get a Free Profile Evaluation
            </p>
            <p className="font-medium text-white/90">
              Choose from 70+ Premium Global Universities
            </p>
          </div>
        </div>

        {/* Urgency Badge */}
        <p className="inline-block rounded-full bg-yellow-400 px-6 py-2 text-sm font-bold uppercase tracking-wider text-black shadow-md md:text-base animate-pulse">
          ⚡ Hurry Up! Admission Open for Upcoming Intake
        </p>

        {/* Call to Action Button */}
        <div className="pt-4">
          <button
            onClick={() => visiable(true)}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-5 text-xl font-black text-[#B11E23] shadow-2xl transition-all duration-300 hover:bg-yellow-300 hover:text-black hover:scale-105 active:scale-98"
          >
            <span>Book Your Seat Now</span>
            <svg 
              className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Fixed Background Image Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-fixed bg-bottom bg-no-repeat opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("/images/footer-bg.png")`,
          backgroundSize: "cover",
        }}
      />
    </section>
   
      {/* Main Footer */}
      <div className="bg-gray-900 text-white py-12 px-6"   style={{
          backgroundImage: `url("/images/footer-bg.png")`,
              backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
          // backgroundAttachment: "fixed",
        }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-10">
          
          <div className="w-1/3 space-y-4">
            <img
              src={brandLogo}
              alt="Gateway Abroad Educations"
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
             Find the Opportunities for Scholarships in Study Abroad with our comprehensive guidance to ensure your academic convenience
            </p>

            
            {/* <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div> */}
          </div>
{/* 
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Study in Italy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div> */}

          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
              {/* <p>📍 Your Office Address, City, Country</p> */}
              <p>📞 +91 8302092630</p>
              
                  <a
                    href={`mailto:info@gatewayabroadeducations.com`}>
                    ✉️ info@gatewayabroadeducations.com
                  </a>
            </div>

            <div className="mt-8">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Gateway Abroad Educations. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
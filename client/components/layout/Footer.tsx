import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const brandLogo = "https://www.gatewayabroadeducations.com/images/logo.svg";

const Footer = ({ visiable }) => {
  return (
    <footer className="bg-background" id="footer">
      {/* Promotional CTA Section */}
      <section
        className="relative w-full bg-[#B11E23] overflow-hidden py-12 md:py-16 text-white text-center px-4"
        style={{
          backgroundImage: `
            linear-gradient(rgba(177, 30, 35, 0.85), rgba(215, 22, 53, 0.9)),
            url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold leading-tight">
            Want Guaranteed Admissions at Top Universities?
          </h2>

          <div className="space-y-2 text-base md:text-xl font-light opacity-95">
            <p className="font-bold text-lg md:text-2xl">
              BOOK NOW for a FREE Counselling Session!
            </p>
            <p>Register Now to Get Free Profile Evaluation</p>
            <p>Choose from 70+ Universities</p>
            <p className="text-yellow-300 font-medium">
              Hurry Up! Admission Open for Upcoming Intake
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={() => visiable(true)}
              className="bg-white text-[#B11E23] hover:bg-gray-100 transition-all duration-300 
                         text-lg md:text-2xl font-bold px-10 py-4 rounded-lg shadow-lg hover:scale-105 active:scale-95"
            >
              Book Your Seat Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      {/* <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5 space-y-4">
            <img
              src={brandLogo}
              alt="Gateway Abroad Educations"
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted education consultant for studying in Italy. We help students secure 
              admissions in top Italian universities for Bachelor, Master, and MBA programs.
            </p>

            
            <div className="flex gap-4 pt-4">
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
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Study in Italy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📍 Your Office Address, City, Country</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉️ info@gatewayabroadeducations.com</p>
            </div>

            <div className="mt-8">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Gateway Abroad Educations. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const brandLogo = "https://www.gatewayabroadeducations.com/images/logo.svg";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/gagatewayabroadjaipur", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/gatewayabroadjaipur/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/gateway-abroad-jaipur1/", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@GatewayAbroadJaipur", icon: Youtube },
];

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "https://www.gatewayabroadeducations.com/" },
      { label: "About Us", href: "https://www.gatewayabroadeducations.com/about" },
      { label: "Spoken English", href: "https://www.gatewayabroadeducations.com/spoken-english" },
      { label: "Blog", href: "https://www.gatewayabroadeducations.com/blog" },
      { label: "Career", href: "https://www.gatewayabroadeducations.com/career" },
      { label: "Contact", href: "https://www.gatewayabroadeducations.com/contact" },
    ],
  },
  {
    title: "Test Preparation",
    links: [
      { label: "IELTS", href: "https://www.gatewayabroadeducations.com/course/ielts" },
      { label: "TOEFL", href: "https://www.gatewayabroadeducations.com/course/toefl" },
      { label: "PTE", href: "https://www.gatewayabroadeducations.com/course/pte" },
      { label: "SAT", href: "https://www.gatewayabroadeducations.com/course/sat" },
      { label: "GRE", href: "https://www.gatewayabroadeducations.com/course/gre" },
      { label: "GMAT", href: "https://www.gatewayabroadeducations.com/course/gmat" },
    ],
  },
];

const Footer = ({ visiable }) => {
  return (
    <footer className="bg-background" id="footer">
      
      <section 
        className="relative w-full bg-[#B11E23] overflow-hidden py-10 text-white text-center px-4"
        style={{
          backgroundImage: 'linear-gradient(hsla(358, 71%, 41%, 0.85), #d71635), url("https://unsplash.com")', // This mimics the architectural background in your image
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-xl md:text-3xl font-serif font-medium text-white">
            Want Guaranteed Admissions at Top Italian Universities for MBA, Masters & Bachelor in Upcoming Intake?
          </h2>
          
          <div className="space-y-1 text-sm md:text-lg font-light opacity-95">
            <p className="font-bold">BOOK NOW for a FREE Counselling Session !!</p>
            <p>Register Now to Get Free Profile Evaluation</p>
            <p>Choose from 70+ Universities</p>
            <p>Hurry Up! Admission Open for Upcoming Intake.</p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => visiable(true)}
              className="text-lg md:text-2xl font-bold underline hover:text-gray-200 transition-colors"
            >
              Book Your Seat Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer Links Section */}
      {/* <div className="container px-2 sm:!container">
        <div className="mt-12 rounded-[28px] border border-border bg-white/90 px-6 py-12 shadow-card backdrop-blur md:px-16 pb-4 mb-28 sm:mb-2">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            
            <div className="max-w-sm space-y-4">
              <img src={brandLogo} alt="Gateway Abroad" className="h-12 w-auto" />
              <p className="text-sm leading-relaxed text-foreground/70">
                105, First Floor, Geetanjali Tower, Ajmer Road, Civil Lines, Jaipur, Rajasthan 302006
              </p>
              <div className="flex flex-col gap-1 text-sm font-semibold">
                <a href="tel:+918302092630" className="hover:text-primary transition-colors">+91 8302092630</a>
                <a href="mailto:jaipur@gatewayabroad.in" className="hover:text-primary transition-colors">jaipur@gatewayabroad.in</a>
              </div>
              
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">Follow us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a key={social.name} href={social.href} className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              {footerColumns.map((column) => (
                <div key={column.title} className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/60">{column.title}</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-border/60 pt-6 text-xs text-center text-foreground/60">
            © {new Date().getFullYear()} Gateway Abroad Education. All rights reserved.
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

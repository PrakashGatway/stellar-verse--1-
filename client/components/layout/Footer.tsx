import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const brandLogo = "https://www.gatewayabroadeducations.com/images/logo.svg";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/gagatewayabroadjaipur",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gatewayabroadjaipur/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gateway-abroad-jaipur1/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GatewayAbroadJaipur",
    icon: Youtube,
  },
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
  // {
  //   title: "Study Abroad",
  //   links: [
  //     { label: "Study in UK", href: "https://www.gatewayabroadeducations.com/study-in-uk" },
  //     { label: "Study in USA", href: "https://www.gatewayabroadeducations.com/study-in-usa" },
  //     { label: "Study in Australia", href: "https://www.gatewayabroadeducations.com/study-in-australia" },
  //     { label: "Study in New Zealand", href: "https://www.gatewayabroadeducations.com/study-in-new-zealand" },
  //     { label: "Study in Canada", href: "https://www.gatewayabroadeducations.com/study-in-canada" },
  //     { label: "Study in Ireland", href: "https://www.gatewayabroadeducations.com/study-in-ireland" },
  //   ],
  // },
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

const handleClick = () => {
  const message = encodeURIComponent('Hi, I want help with SAT preparation.');
  window.open(`https://wa.me/917023881046?text=${message}`, '_blank');
};

const Footer = ({visiable}) => {
  return (
    <footer className="bg-background pt-2" id="footer">
      <section
        id="cta"
        className="container max-w-7xl rounded-[32px] bg-[#FBE7EA] border border-border px-6 py-6 md:px-16 md:py-10"
      >
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          {/* Content Section */}
          <div className="max-w-3xl space-y-3 text-center md:text-left">
            <h2 className="text-2xl font-medium leading-tight text-balance text-foreground md:text-3xl">
              Plan your global education with Gateway Abroad
            </h2>
            <p className="text-base text-foreground/80 md:text-lg">
              Connect with experienced counsellors for personalised university shortlisting, test prep, and visa guidance.
            </p>
            <a
              onClick={()=>visiable(true)}
              className="inline-flex items-center bg-amber-400 border border-2 border-black text-black justify-center rounded-2xl px-8 py-3 text-base font-semibold text-black transition hover:bg-amber-500"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Logo/Image Section */}
          <div className="flex-shrink-0">
            <img
              src="https://www.gatewayabroadeducations.com/img/partner-img.svg" // Replace with your logo/image path
              alt="Gateway Abroad"
              className="h-64 w-64 object-contain md:h-100 md:w-100"
            />
          </div>
        </div>
      </section>

      <div className="container px-2 sm:!container">
        <div className="mt-12 rounded-[28px] border border-border bg-white/90 px-6 py-12 shadow-card backdrop-blur md:px-16 pb-4 mb-28 sm:mb-2">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="max-w-sm space-y-3">
              <img
                src={brandLogo}
                alt="Gateway Abroad"
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
              <p className="text-sm leading-relaxed text-foreground/70">
                105, First Floor, Geetanjali Tower, Ajmer Road, Civil Lines, Jaipur, Rajasthan 302006
              </p>
              <div className="space-y-1 text-sm text-foreground/70">
                <a href="tel:+918302092630" className=" font-semibold text-foreground hover:text-primary">
                  +91 8302092630
                </a>,
                <a href="tel:+919001571113" className=" font-semibold text-foreground hover:text-primary">
                  +91 9001571113
                </a>,
                <a href="tel:+919166144321" className=" font-semibold text-foreground hover:text-primary">
                  +91 9166144321
                </a>
                <a
                  href="mailto:jaipur@gatewayabroad.in"
                  className="block font-semibold text-foreground hover:text-primary"
                >
                  jaipur@gatewayabroad.in
                </a>
              </div>
              <div className="space-y-2 pt-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
                  Follow us
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-secondary transition hover:border-primary hover:bg-primary/10"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title} className="space-y-3">
                  <h3 className="text-base font-semibold uppercase tracking-[0.1em] text-foreground/60">
                    {column.title}
                  </h3>
                  <ul className="space-y-2 text-base text-foreground/80">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="transition hover:text-primary"
                          rel="noreferrer"
                          target="_blank"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border/60 pt-4 text-sm text-foreground/60">
            © {new Date().getFullYear()} Gateway Abroad Education. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

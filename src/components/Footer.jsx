
import "./Footer.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const footerGroups = [
  {
    title: "EXPLORE",
    links: [
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "Research", href: "/research" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "Webcraft HRMS", href: "/products" },
      { label: "TutorWand", href: "/products" },
      { label: "WCSchool ERP", href: "/products" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-green-strip" />

      <div className="footer-inner">
        {/* Top contact section */}
        <section className="footer-intro">
          <p className="footer-eyebrow">SAY HELLO</p>

          <h2 className="footer-heading">
            Think first. <em>Ship well.</em>
          </h2>

          <a
            href="mailto:admin@webcraft.co.in"
            className="footer-email"
          >
            admin@webcraft.co.in
            <span aria-hidden="true">→</span>
          </a>
        </section>

        {/* Footer content */}
        <div className="footer-main">
          {/* Brand and social links */}
          <div className="footer-left">
            <section className="footer-brand">
              <div className="footer-logo">
                WebCraft IT
              </div>

              <p>
                Research-led, AI-enabled digital
                transformation for teams that ship.
              </p>
            </section>

            <section className="footer-social">
              <h3 className="footer-section-title">
                FOLLOW ALONG
              </h3>

              <div className="footer-social-links">
                <a
                  href="https://www.linkedin.com/company/webcraft-it/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://www.instagram.com/webcraftitcompany/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/webcraftit/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </div>
            </section>
          </div>

          {/* Navigation columns */}
          <nav
            className="footer-links"
            aria-label="Footer navigation"
          >
            {footerGroups.map((group) => (
              <div
                className="footer-link-group"
                key={group.title}
              >
                <h3 className="footer-section-title">
                  <span aria-hidden="true" />
                  {group.title}
                </h3>

                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom">
          <p>
            © 2026 WEBCRAFT IT SERVICES. ALL RIGHTS RESERVED.
          </p>

          <p className="footer-meta">
            RESEARCH · AI · ENGINEERING
          </p>

          <button
            className="footer-back-top"
            type="button"
            aria-label="Back to top"
            onClick={handleBackToTop}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


import "./Footer.css";

const footerGroups = [
  {
    title: "EXPLORE",
    links: ["AI Solutions", "Research", "Services", "Products"],
  },
  {
    title: "PRODUCTS",
    links: ["Webcraft HRMS", "TutorWand", "WCSchool ERP"],
  },
  {
    title: "COMPANY",
    links: ["About us", "Contact"],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      {/* Green section above the blue footer */}
      <div className="footer-green-strip"></div>

      <div className="footer-inner">
        {/* Heading and email */}
        <section className="footer-intro">
          <p className="footer-eyebrow">SAY HELLO</p>

          <h2 className="footer-heading">
            Think first. <em>Ship well.</em>
          </h2>

          <a
            href="mailto:admin@webcraft.co.in"
            className="footer-email"
          >
            admin@webcraft.co.in <span>→</span>
          </a>
        </section>

        {/* Brand and description */}
        <section className="footer-brand">
          <div className="footer-logo">
            WebCraft-IT
          </div>

          <p>
            Research-led, AI-enabled digital transformation
            for teams that ship.
          </p>
        </section>

        {/* Social media */}
        <section className="footer-social">
          <h3 className="footer-section-title">
            FOLLOW ALONG
          </h3>

          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              ◎
            </a>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              f
            </a>
          </div>
        </section>

        {/* Footer link columns */}
        <nav className="footer-links" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3 className="footer-section-title">
                <span></span>
                {group.title}
              </h3>

              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Copyright and back-to-top */}
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
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "../../public/logo.svg";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "AI Solutions", href: "#" },
  { label: "Research", href: "#" },
  { label: "Products", href: "#" },
  { label: "Services", href: "#" },
];

const TEAL = "#1f9d7a";
const DARK = "#1f3a4d";

const ArrowIcon = () => (
  <svg
    className="h-[22px] w-[22px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12h16M15 6l6 6-6 6" />
  </svg>
);

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinksRef = useRef({});
  const indicatorRef = useRef(null);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 0);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const target = navLinksRef.current[hovered || active];
      const indicator = indicatorRef.current;

      if (!target || !indicator) return;

      indicator.style.width = `${target.offsetWidth}px`;
      indicator.style.transform = `translateX(${target.offsetLeft}px)`;
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active, hovered]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="flex h-[96px] w-full items-center px-6 lg:px-[47px]">
        <a href="/" className="shrink-0">
          <img src={logo} alt="Webcraft-IT" className="h-[50px] w-auto max-w-none" />
        </a>

        <div className="ml-auto hidden items-center justify-end lg:flex">
          <ul className="relative m-0 flex list-none items-center justify-end p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === label;
              const lit = isActive || hovered === label;
              return (
                <li key={label}>
                  <a
                    ref={(element) => {
                      navLinksRef.current[label] = element;
                    }}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(label);
                    }}
                    onMouseEnter={() => setHovered(label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      color: lit ? TEAL : DARK,
                      textDecoration: "none",
                    }}
                    className="block whitespace-nowrap px-3 py-2.5 text-[16px] font-normal leading-none transition-colors duration-500 ease-in-out"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-[3px] list-none rounded-full bg-[#1f9d7a] transition-[transform,width] duration-500 ease-in-out"
              style={{ width: 0 }}
            />
          </ul>

          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none" }}
            className="ml-4 inline-flex h-[44px] w-[165px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#1f9a86] to-[#41b87b] text-[17px] font-semibold shadow-[0_10px_24px_rgba(31,157,122,0.25)] transition hover:brightness-105"
          >
            Contact Us
            <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          style={{ color: DARK }}
          className="rounded-lg p-2 lg:hidden"
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-[#1f9d7a]/10 bg-white px-6 pb-6 pt-2 shadow-lg lg:hidden">
          <ul className="m-0 flex list-none flex-col p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => {
                    setActive(label);
                    setOpen(false);
                  }}
                  style={{
                    color: active === label ? TEAL : DARK,
                    textDecoration: "none",
                  }}
                  className="block py-3 text-lg transition-colors duration-500 ease-in-out"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            style={{ color: "#fff", textDecoration: "none" }}
            className="mt-4 inline-flex h-12 items-center gap-3 rounded-full bg-gradient-to-r from-[#1f9a86] to-[#41b87b] px-7 text-base font-semibold"
          >
            Contact Us
            <ArrowIcon />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
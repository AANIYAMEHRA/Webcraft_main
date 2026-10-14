const SparkleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2.5 14.1 9.9 21.5 12l-7.4 2.1L12 21.5l-2.1-7.4L2.5 12l7.4-2.1L12 2.5Z"
      fill="currentColor"
    />
  </svg>
);

const HeroArtwork = () => (
  <svg
    className="absolute right-[-42px] top-[110px] h-[620px] w-[820px] max-w-none max-lg:right-[-250px] max-lg:opacity-70 max-md:hidden"
    viewBox="0 0 820 620"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="orbGradient" x1="350" y1="370" x2="560" y2="570" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2D9CBB" />
        <stop offset=".53" stopColor="#1887A1" />
        <stop offset="1" stopColor="#40C58E" />
      </linearGradient>
      <linearGradient id="nodeGradient" x1="205" y1="158" x2="310" y2="260" gradientUnits="userSpaceOnUse">
        <stop stopColor="#45C2A1" />
        <stop offset="1" stopColor="#56BBA1" />
      </linearGradient>
      <radialGradient id="orbGlow" cx="0" cy="0" r="1" gradientTransform="matrix(0 180 -180 0 455 410)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#35BFA1" stopOpacity=".34" />
        <stop offset="1" stopColor="#55C7B2" stopOpacity="0" />
      </radialGradient>
      <filter id="softShadow" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="10" />
      </filter>
      <filter id="cardShadow" x="70" y="-15" width="230" height="130" colorInterpolationFilters="sRGB">
        <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
        <feOffset dy="8" />
        <feComponentTransfer>
          <feFuncA type="linear" slope=".12" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <path
      d="m255 198 196 168 202-190 18 190-216 84"
      stroke="#61C9B2"
      strokeDasharray="8 10"
      strokeOpacity=".72"
      strokeWidth="2"
    />
    <path
      d="m255 198 395-22 18 190"
      stroke="#6CCEBB"
      strokeDasharray="6 11"
      strokeOpacity=".48"
      strokeWidth="1.5"
    />
    <path
      d="m455 410 165-105 48-129"
      stroke="#54C6A4"
      strokeDasharray="3 11"
      strokeOpacity=".42"
      strokeWidth="1.5"
    />

    <circle cx="255" cy="198" r="65" fill="#55BEA8" fillOpacity=".4" filter="url(#softShadow)" />
    <circle cx="255" cy="198" r="53" fill="url(#nodeGradient)" />
    <circle cx="650" cy="176" r="50" fill="#469DB7" fillOpacity=".26" filter="url(#softShadow)" />
    <circle cx="650" cy="176" r="40" fill="#399EB8" fillOpacity=".62" stroke="#59B8C7" strokeWidth="2" />
    <path d="m625 195 51-48m-29 21 17-2-2 17" stroke="#36B797" strokeOpacity=".72" strokeWidth="2" />
    <circle cx="315" cy="251" r="6.5" fill="#68D6AA" />
    <circle cx="484" cy="394" r="6" fill="#55C8A1" />

    <circle cx="455" cy="410" r="190" fill="url(#orbGlow)" />
    <circle cx="455" cy="410" r="166" fill="#2E93A9" fillOpacity=".12" />
    <circle cx="455" cy="410" r="144" stroke="#65C8C1" strokeOpacity=".32" strokeWidth="2" />
    <circle cx="455" cy="410" r="128" stroke="#54C2B1" strokeOpacity=".5" strokeWidth="2" strokeDasharray="4 8" />
    <circle cx="455" cy="410" r="112" fill="url(#orbGradient)" stroke="#53C5B5" strokeOpacity=".8" strokeWidth="4" />
    <circle cx="455" cy="410" r="98" stroke="#76D0B7" strokeOpacity=".38" strokeWidth="2" />
    <circle cx="455" cy="410" r="76" stroke="#83D3B6" strokeOpacity=".32" strokeWidth="1.5" />
    <circle cx="455" cy="410" r="46" fill="#3DB99D" fillOpacity=".35" />
    <circle cx="484" cy="394" r="5" fill="#56D29E" />

    <g filter="url(#cardShadow)">
      <rect x="100" y="0" width="160" height="80" rx="24" fill="white" />
      <rect x="124" y="18" width="44" height="44" rx="13" fill="#39B48E" />
      <foreignObject x="135" y="29" width="22" height="22">
        <div xmlns="http://www.w3.org/1999/xhtml" className="h-full w-full text-white">
          <SparkleIcon />
        </div>
      </foreignObject>
      <text x="181" y="47" fill="#18314E" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600">
        GenAI
      </text>
    </g>
  </svg>
);

const Hero = () => (
  <section className="relative min-h-[850px] overflow-hidden px-[max(28px,calc((100vw-1814px)/2))] pt-[193px] max-md:min-h-[760px] max-md:px-6 max-md:pt-24">
    <HeroArtwork />

    <div className="relative z-10 max-w-[1020px]">
      <span className="inline-flex h-11 items-center rounded-full border border-[#b8e4dc] bg-white/10 px-6 font-mono text-[16px] font-bold tracking-[0.14em] text-[#20a596]">
        AI SOLUTIONS
      </span>

      <h1 className="mt-[43px] font-serif text-[clamp(56px,5.1vw,96px)] font-bold leading-[0.96] tracking-[-0.045em] text-[#0d2549]">
        <span className="block">Intelligent AI.</span>
        <span className="block bg-gradient-to-r from-[#299e9f] via-[#248aa7] to-[#3cbb84] bg-clip-text text-transparent">
          Measurable Outcomes.
        </span>
      </h1>

      <p className="mt-8 max-w-[610px] text-lg leading-8 text-[#405971] max-md:text-base">
        Turn intelligence into impact with AI solutions built to deliver measurable outcomes.
      </p>
      <a
        href="#solutions"
        className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#209d91] to-[#40b980] px-7 py-4 font-semibold text-white shadow-[0_10px_24px_rgba(31,157,122,0.25)] transition hover:brightness-105"
      >
        Explore AI solutions
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

export default Hero;

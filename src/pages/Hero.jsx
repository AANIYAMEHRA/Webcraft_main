const ArrowIcon = () => (
  <svg
    className="h-5 w-5"
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

const SparkleIcon = () => (
  <svg className="h-[72px] w-[72px]" viewBox="0 0 72 72" fill="none" aria-hidden="true">
    <path
      d="M18 40c12-4 17-10 19-25 3 14 8 20 22 24-14 3-19 9-22 23-2-14-7-19-19-22Z"
      stroke="white"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M49 18c6-2 9-5 10-11 1 6 4 9 10 11-6 1-9 4-10 10-1-6-4-9-10-10Z"
      stroke="white"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon = ({ children }) => (
  <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#38b79d]">
    {children}
  </span>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c0-2-4-4-4-9a9 9 0 0 1 18 0c0 5-4 7-4 9H9Z" />
    <path d="M10 23h8m-7 3h6m-3-22v3m-8 3h3m10 0h3" />
  </svg>
);

const TrendIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m4 20 7-7 5 4 8-10m-7 0h7v7" />
  </svg>
);

const CubeIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m14 3 10 5.5v11L14 25 4 19.5v-11L14 3Z" />
    <path d="m4 8.5 10 5.5 10-5.5M14 14v11" />
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m11 3 1-.5h4l1 3 2 1 3-1 2 3-2 2v3l2 2-2 3-3-1-2 1-1 3h-4l-1-3-2-1-3 1-2-3 2-2v-3L4 9l2-3 3 1 2-1 1-3Z" transform="translate(0 1)" />
    <circle cx="14" cy="14" r="3.5" />
  </svg>
);

const FeatureCard = ({ eyebrow, title, icon, className }) => (
  <div className={`absolute z-10 flex items-center gap-2 rounded-[22px] border border-[#edf5f3] bg-white/95 px-4 py-2.5 shadow-[0_10px_24px_rgba(23,67,81,0.09)] ${className}`}>
    <Icon>{icon}</Icon>
    <span className="leading-tight">
      <span className="block text-[11px] font-medium uppercase tracking-[0.08em] text-[#8997a9]">
        {eyebrow}
      </span>
      <span className="block whitespace-nowrap text-[16px] font-semibold text-[#10294d]">
        {title}
      </span>
    </span>
  </div>
);

const OrbitArtwork = () => (
  <div className="pointer-events-none absolute right-[5.7%] top-[8px] hidden h-[610px] w-[650px] xl:block" aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 610" fill="none">
      <circle cx="330" cy="300" r="298" stroke="#39ad9e" strokeOpacity=".28" strokeWidth="3" strokeDasharray="6 18" />
    </svg>
    <div className="absolute left-[330px] top-[300px] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72c6b9]/25" />
    <div className="absolute left-[330px] top-[300px] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65bdb5]/35" />
    <div className="absolute left-[330px] top-[300px] flex h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2ca697] to-[#37b77d] shadow-[0_22px_50px_rgba(37,153,133,0.24)]">
      <SparkleIcon />
    </div>
    <span className="absolute left-[165px] top-[143px] h-[15px] w-[15px] rounded-full bg-[#43b99b] shadow-[0_4px_12px_rgba(31,157,122,0.3)]" />
    <span className="absolute left-[523px] top-[239px] h-[15px] w-[15px] rounded-full bg-[#43b99b] shadow-[0_4px_12px_rgba(31,157,122,0.3)]" />
    <span className="absolute left-[258px] top-[509px] h-[15px] w-[15px] rounded-full bg-[#43b99b] shadow-[0_4px_12px_rgba(31,157,122,0.3)]" />

    <FeatureCard eyebrow="Smarter" title="AI Solutions" icon={<LightbulbIcon />} className="left-[50px] top-[10px]" />
    <FeatureCard eyebrow="Sharper" title="Research" icon={<TrendIcon />} className="right-[35px] top-[20px]" />
    <FeatureCard eyebrow="Built" title="Products" icon={<CubeIcon />} className="left-[30px] top-[478px]" />
    <FeatureCard eyebrow="Engineered" title="Services" icon={<GearIcon />} className="right-[25px] top-[510px]" />
  </div>
);

const STATS = [
  { value: "17+", label: "Years Established" },
  { value: "3000+", label: "Clients Served" },
  { value: "230+", label: "Professionals" },
  { value: "96%", label: "Client Retention" },
];

const Hero = () => (
  <section className="relative mx-auto min-h-[690px] max-w-[1536px] overflow-hidden px-[max(42px,calc((100vw-1450px)/2))] pt-[10px] max-md:min-h-0 max-md:px-6 max-md:pb-12 max-md:pt-10">
    <OrbitArtwork />
    <div className="relative z-10 max-w-[690px]">
      <div className="inline-flex h-[37px] items-center gap-2 whitespace-nowrap rounded-full border border-[#c4e6df] bg-[#dff2ed]/75 px-4 font-mono text-[14px] font-bold tracking-[0.08em] text-[#1b9f91] max-md:gap-1 max-md:px-2 max-md:text-[11px] max-md:tracking-[0.03em]">
        <span className="h-3.5 w-3.5 rounded-full bg-[#76cba7]" />
        AI-LED <span>·</span> RESEARCH-BACKED <span>·</span> DELIVERY-READY
      </div>

      <h1 className="home-hero-title">
        <span className="block whitespace-nowrap max-sm:whitespace-normal">Smarter Decisions.</span>
        <span className="block whitespace-nowrap bg-gradient-to-r from-[#2ca797] via-[#248aa7] to-[#3cbb84] bg-clip-text text-transparent max-sm:whitespace-normal">
          Stronger Products.
        </span>
      </h1>

      <p className="mt-7 max-w-[620px] text-[21px] leading-[1.65] text-[#6e8096] max-md:mt-5 max-md:text-base">
        Webcraft combines AI solutions and deep research with proven engineering to help you decide
        what to build, then build it right.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-5 max-md:mt-7 max-md:gap-3">
        <a
          href="#solutions"
          className="inline-flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-[#209d91] to-[#40b980] px-8 text-[18px] font-semibold text-white shadow-[0_10px_24px_rgba(31,157,122,0.23)] transition hover:brightness-105 max-md:h-12 max-md:px-5 max-md:text-sm"
        >
          Explore AI Solutions
          <ArrowIcon />
        </a>
        <a
          href="#research"
          className="inline-flex h-16 items-center rounded-full border-2 border-[#e4e9ec] bg-white/80 px-8 text-[18px] font-semibold text-[#18314e] transition-colors hover:border-[#40b980] max-md:h-12 max-md:px-5 max-md:text-sm"
        >
          See Research Capabilities
        </a>
      </div>

      <div className="mt-[74px] grid max-w-[700px] grid-cols-4 max-sm:mt-10 max-sm:grid-cols-2">
        {STATS.map(({ value, label }, index) => (
          <div
            key={label}
            className={`text-center ${index > 0 ? "border-l border-[#dbe2e7]" : ""} max-sm:mb-5`}
          >
            <strong className="block text-[38px] font-bold leading-none tracking-[-0.04em] text-[#10294d] max-md:text-[30px]">
              {value}
            </strong>
            <span className="mt-2 block whitespace-nowrap text-[14px] text-[#718199] max-md:text-xs">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

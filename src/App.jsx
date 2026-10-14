import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#fbfefd]">
      {/* soft blurred blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-[420px] w-[420px] rounded-full bg-[#8bd8bc]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-0 h-[480px] w-[480px] rounded-full bg-[#9cc9e6]/12 blur-3xl" />

      {/* faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(31,93,105,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(31,93,105,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home as HomeIcon,
  Building2,
  Stethoscope,
  ChevronDown,
} from "lucide-react";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
    alt: "Physiotherapist assisting a patient with shoulder mobility",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
    alt: "Physiotherapist guiding a patient through a knee exercise",
  },
  {
    url: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1600&auto=format&fit=crop",
    alt: "Home visit physiotherapy session",
  },
];

const DISTRICTS = [
  "Select District",
  "Khordha",
  "Cuttack",
  "Puri",
  "Ganjam",
  "Sundargarh",
];

const CITIES = [
  "Select City",
  "Bhubaneswar",
  "Cuttack",
  "Puri",
  "Berhampur",
  "Rourkela",
];

const SPECIALIZATIONS = [
  "Specialization",
  "Orthopedic",
  "Neuro",
  "Sports Injury",
  "Pediatric",
  "Post-Surgery",
];

const Homes = () => {
  const [index, setIndex] = useState(0);
  const [district, setDistrict] = useState(DISTRICTS[0]);
  const [city, setCity] = useState(CITIES[0]);
  const [specialization, setSpecialization] = useState(SPECIALIZATIONS[0]);

  const goTo = (newIndex) => {
    if (newIndex < 0) {
      setIndex(SLIDES.length - 1);
    } else if (newIndex >= SLIDES.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(index + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full font-sans">
      {/* ============ DESKTOP / TABLET VIEW ============ */}
      <section className="hidden md:block relative w-full h-[520px] lg:h-[580px] overflow-hidden bg-[#0a4f48]">
        {/* Carousel Photo Track */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0">
              <img
                src={s.url}
                alt={s.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#063b36]/95 via-[#0a4f48]/75 to-transparent" />
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <button
          aria-label="Previous photo"
          onClick={() => goTo(index - 1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          aria-label="Next photo"
          onClick={() => goTo(index + 1)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-amber-400"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8">
              Find & Book Top <br />
              <span className="text-amber-400">Physiotherapists</span> in Odisha
            </h1>

            {/* ADVANCED FLOATING SEARCH BAR */}
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl ring-1 ring-black/5 mb-6">
              <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                {/* District Selector */}
                <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
                  <MapPin
                    className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
                    size={18}
                  />
                  <div className="w-full">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Location
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
                    >
                      {DISTRICTS.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <ChevronDown
                    className="absolute right-3 text-slate-400 pointer-events-none"
                    size={14}
                  />
                </div>

                {/* City Selector */}
                <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
                  <Building2
                    className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
                    size={18}
                  />
                  <div className="w-full">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
                    >
                      {CITIES.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <ChevronDown
                    className="absolute right-3 text-slate-400 pointer-events-none"
                    size={14}
                  />
                </div>

                {/* Specialization Selector */}
                <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
                  <Stethoscope
                    className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
                    size={18}
                  />
                  <div className="w-full">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Care Type
                    </label>
                    <select
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
                    >
                      {SPECIALIZATIONS.map((item, idx) => (
                        <option key={idx} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <ChevronDown
                    className="absolute right-3 text-slate-400 pointer-events-none"
                    size={14}
                  />
                </div>

                {/* Main Action Button */}
                <div className="p-1 w-full md:w-auto">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                    <Search size={18} strokeWidth={2.5} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

            {/* SECONDARY BOOKING PILLS */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg">
                <HomeIcon size={16} className="text-amber-400" />
                Book Home Visit
              </button>
              <button className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg">
                <Building2 size={16} className="text-amber-400" />
                Book Clinic Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MOBILE VIEW ============ */}
      <section className="md:hidden w-full bg-slate-50 p-4">
        <div className="bg-[#0a4f48] rounded-2xl p-5 shadow-xl text-white">
          <h1 className="text-xl font-bold text-center leading-snug mb-5">
            Find Trusted Physiotherapists <br />
            <span className="text-amber-400">Across Odisha</span>
          </h1>

          <div className="bg-white text-slate-800 rounded-xl p-3 shadow-md space-y-3 mb-4">
            <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
              <MapPin size={16} className="text-slate-400 mr-2" />
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
              >
                {DISTRICTS.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="text-slate-400 pointer-events-none"
              />
            </div>

            <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
              <Building2 size={16} className="text-slate-400 mr-2" />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
              >
                {CITIES.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="text-slate-400 pointer-events-none"
              />
            </div>

            <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
              <Stethoscope size={16} className="text-slate-400 mr-2" />
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
              >
                {SPECIALIZATIONS.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="text-slate-400 pointer-events-none"
              />
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-3 rounded-lg transition-colors">
              <Search size={16} />
              Search Doctors
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium py-2.5 rounded-lg">
              <HomeIcon size={14} className="text-amber-400" />
              Home Visit
            </button>
            <button className="flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium py-2.5 rounded-lg">
              <Building2 size={14} className="text-amber-400" />
              Clinic Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;

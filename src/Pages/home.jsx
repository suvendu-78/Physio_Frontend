import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home as HomeIcon,
  Building2,
  Stethoscope,
  ChevronDown,
  Star,
  Activity,
  Brain,
  Sparkles,
  Hand,
  UserCheck,
  Phone,
  MessageSquare,
  X,
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

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  containerClassName = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

const Homes = () => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [district, setDistrict] = useState(DISTRICTS[0]);
  const [city, setCity] = useState(CITIES[0]);
  const [specialization, setSpecialization] = useState(SPECIALIZATIONS[0]);
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  const reviewsContainerRef = useRef(null);

  const data = async () => {
    try {
      setLoading(true);

      const [doctorResponse, clinicResponse] = await Promise.all([
        fetch("https://physio-backend-sand.vercel.app/api/v1/user/findDoctor"),
        fetch("https://physio-backend-sand.vercel.app/api/v1/user/findclinic"),
      ]);

      if (!doctorResponse.ok) {
        throw new Error("Failed to fetch doctors");
      }

      if (!clinicResponse.ok) {
        throw new Error("Failed to fetch clinics");
      }

      const doctorResult = await doctorResponse.json();
      const clinicResult = await clinicResponse.json();

      console.log("DOCTOR API DATA:", doctorResult);
      console.log("CLINIC API DATA:", clinicResult);

      setDoctors(Array.isArray(doctorResult?.data) ? doctorResult.data : []);
      setClinics(Array.isArray(clinicResult?.data) ? clinicResult.data : []);
    } catch (error) {
      console.error("HOME DATA ERROR:", error);

      setDoctors([]);
      setClinics([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    data();
  }, []);

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
    if (loading) return;

    const timer = setInterval(() => {
      goTo(index + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [index, loading]);

  const services = [
    { id: 1, title: "Orthopedic", icon: Activity },
    { id: 2, title: "Neurological", icon: Brain },
    { id: 3, title: "Pediatrics", icon: Sparkles },
    { id: 4, title: "Physiotherapy", icon: Hand },
    { id: 5, title: "E-Therapy", icon: Stethoscope },
    { id: 6, title: "Therapy", icon: UserCheck },
  ];

  const reviews = [
    {
      id: 1,
      name: "Rowara Name",
      description: "Physiotherapy Physiotherapist for across Odisha.",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Konra Rahor",
      description: "Physiotherapy Physiotherapist for across Odisha.",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Asanna Bheshi",
      description: "Physiotherapy Physiotherapist for across Odisha.",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const scrollReviews = (direction) => {
    if (reviewsContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;

      reviewsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full font-sans">
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-gradient-to-br from-[#e9f8f5] to-white px-6 pt-7 pb-5 text-center">
              <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border border-gray-200 shadow-md bg-white mb-4 flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt="LiBi Motion Care Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-[#0a4f48] mb-2">
                LiBi Motion Care
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Book a Physiotherapist
                <span className="block text-[#0a4f48]">
                  at Home or Visit Our Clinic
                </span>
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Get professional, trusted and quality physiotherapy care from
                experienced therapists.
              </p>
            </div>

            <div className="px-6 py-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-[#004d40]/10 flex items-center justify-center shrink-0">
                  <HomeIcon className="w-5 h-5 text-[#004d40]" />
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-sm">Home Visit</p>
                  <p className="text-xs text-slate-500">Available</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-[#004d40]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#004d40]" />
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Visit Our Clinic
                  </p>
                  <p className="text-xs text-slate-500">Quality Care</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-[#004d40]/10 flex items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-[#004d40]" />
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Good & Quality
                  </p>
                  <p className="text-xs text-slate-500">Physiotherapy Care</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-[#004d40]/10 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-[#004d40]" />
                </div>

                <div>
                  <p className="font-bold text-slate-800 text-sm">
                    Experienced
                  </p>
                  <p className="text-xs text-slate-500">Therapists</p>
                </div>
              </div>
            </div>

            <div className="mx-6 bg-[#e9f8f5] border border-emerald-100 rounded-xl px-4 py-3 text-center">
              <p className="text-sm font-semibold text-[#004d40]">
                ❤️ Your Recovery, Our Care
              </p>
            </div>

            <div className="px-6 pt-5 pb-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+917846967125"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#004d40] hover:bg-[#00382f] text-white font-bold transition shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/7439058125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition shadow-md"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-xs text-slate-400 mt-4">
                Call us at +91 7846967125 for more information
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="hidden md:block relative w-full h-[520px] lg:h-[580px] overflow-hidden bg-[#0a4f48]">
        {loading ? (
          <div className="w-full h-full bg-slate-300 animate-pulse" />
        ) : (
          <>
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {SLIDES.map((s, i) => (
                <div key={i} className="relative w-full h-full flex-shrink-0">
                  <ImageWithSkeleton
                    src={s.url}
                    alt={s.alt}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#063b36]/95 via-[#0a4f48]/75 to-transparent z-10" />
                </div>
              ))}
            </div>

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
          </>
        )}

        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8">
              Find & Book Top
              <br />
              <span className="text-amber-400">Physiotherapists</span> in Odisha
            </h1>

            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl ring-1 ring-black/5 mb-6">
              <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
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

                <div className="p-1 w-full md:w-auto">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                    <Search size={18} strokeWidth={2.5} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

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

      <section className="md:hidden w-full bg-slate-50 p-4">
        <div className="bg-[#0a4f48] rounded-2xl p-5 shadow-xl text-white">
          <h1 className="text-xl font-bold text-center leading-snug mb-5">
            Find Trusted Physiotherapists
            <br />
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

      <div className="bg-[#edf7f6] text-gray-800 p-3 sm:p-6 lg:p-8 min-h-screen font-sans selection:bg-teal-100">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                Featured Physiotherapists
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {loading ? (
                  Array.from({ length: 4 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs border border-transparent flex flex-col animate-pulse"
                    >
                      <div className="rounded-xl bg-slate-200 mb-2.5 aspect-4/3 sm:aspect-square" />

                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />

                      <div className="h-3 bg-slate-200 rounded w-1/3 mb-2" />

                      <div className="h-3 bg-slate-200 rounded w-1/2" />
                    </div>
                  ))
                ) : doctors.length > 0 ? (
                  doctors.map((doc) => {
                    const doctorId = doc._id || doc.id;

                    const doctorName =
                      doc.fullName ||
                      [doc.firstName, doc.lastName].filter(Boolean).join(" ") ||
                      "Doctor";

                    const doctorImage =
                      doc.profilePhoto?.url ||
                      doc.profilePhoto?.secure_url ||
                      (typeof doc.profilePhoto === "string"
                        ? doc.profilePhoto
                        : "") ||
                      doc.image ||
                      "";

                    const doctorRating = doc.rating ?? doc.averageRating ?? 0;

                    const doctorSpecialization =
                      doc.specialization ||
                      doc.professionalType ||
                      doc.speciality ||
                      "Physiotherapist";

                    const doctorClinic =
                      doc.clinicName ||
                      doc.clinic?.clinicName ||
                      doc.clinic?.name ||
                      "Clinic information not available";

                    return (
                      <a
                        key={doctorId}
                        href={`#doctor-${doctorId}`}
                        className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 flex flex-col group"
                      >
                        <div className="rounded-xl mb-2.5 aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                          {doctorImage ? (
                            <ImageWithSkeleton
                              src={doctorImage}
                              alt={doctorName}
                              containerClassName="w-full h-full"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-medium">
                              No Photo
                            </div>
                          )}
                        </div>

                        <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-xs sm:text-sm truncate">
                          {doctorName}
                        </h3>

                        <div className="flex items-center text-[11px] sm:text-xs text-amber-500 my-0.5 sm:my-1 font-semibold">
                          {doctorRating}
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
                        </div>

                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate">
                          {doctorSpecialization}
                        </p>

                        <p className="text-[10px] sm:text-xs text-[#0a4f48] font-semibold mt-1 truncate">
                          Works at: {doctorClinic}
                        </p>
                      </a>
                    );
                  })
                ) : (
                  <div className="col-span-full bg-white rounded-2xl p-8 sm:p-10 shadow-xs border border-dashed border-slate-200 flex flex-col items-center justify-center text-center min-h-[220px]">
                    <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                      <Stethoscope className="w-7 h-7" />
                    </div>

                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      No verified physiotherapists yet
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 max-w-md">
                      Verified physiotherapists will appear here automatically
                      after they are approved.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                Top Clinics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {loading ? (
                  Array.from({ length: 2 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-3 flex items-center gap-3 sm:gap-4 shadow-xs animate-pulse"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-slate-200 shrink-0" />

                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-200 rounded w-2/3" />

                        <div className="h-3 bg-slate-200 rounded w-1/2" />

                        <div className="h-3 bg-slate-200 rounded w-1/4" />
                      </div>
                    </div>
                  ))
                ) : clinics.length > 0 ? (
                  clinics.map((clinic) => {
                    const clinicId = clinic._id || clinic.id;

                    const clinicName =
                      clinic.clinicName ||
                      clinic.name ||
                      clinic.title ||
                      "Clinic";

                    const clinicImage =
                      clinic.photos?.[0]?.url ||
                      clinic.photos?.[0]?.secure_url ||
                      (typeof clinic.photos?.[0] === "string"
                        ? clinic.photos[0]
                        : "") ||
                      clinic.profilePhoto?.url ||
                      clinic.profilePhoto?.secure_url ||
                      (typeof clinic.profilePhoto === "string"
                        ? clinic.profilePhoto
                        : "") ||
                      clinic.clinicPhoto?.url ||
                      clinic.clinicPhoto?.secure_url ||
                      (typeof clinic.clinicPhoto === "string"
                        ? clinic.clinicPhoto
                        : "");

                    const clinicType =
                      clinic.clinicType ||
                      clinic.type ||
                      clinic.specialization ||
                      "Physiotherapy Clinic";

                    const clinicRating =
                      clinic.rating ?? clinic.averageRating ?? 0;

                    const clinicCity =
                      clinic.city || clinic.location?.city || "";

                    const clinicState =
                      clinic.state || clinic.location?.state || "";

                    const clinicAddress =
                      clinic.address || clinic.clinicAddress || "";

                    return (
                      <a
                        key={clinicId}
                        href={`#clinic-${clinicId}`}
                        className="bg-white rounded-2xl p-3 flex items-center gap-3 sm:gap-4 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 group"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shrink-0 overflow-hidden bg-slate-100">
                          {clinicImage ? (
                            <ImageWithSkeleton
                              src={clinicImage}
                              alt={clinicName}
                              containerClassName="w-full h-full"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-medium text-center px-2">
                              No Photo
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-sm sm:text-base truncate">
                            {clinicName}
                          </h3>

                          <p className="text-xs text-[#0a4f48] font-semibold truncate">
                            {clinicType}
                          </p>

                          {(clinicCity || clinicState) && (
                            <p className="text-[11px] text-gray-500 font-medium truncate mt-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3 shrink-0" />
                              {clinicCity}
                              {clinicCity && clinicState ? ", " : ""}
                              {clinicState}
                            </p>
                          )}

                          {clinicAddress && (
                            <p className="text-[10px] text-gray-400 font-medium truncate mt-0.5">
                              {clinicAddress}
                            </p>
                          )}

                          <div className="flex items-center text-xs text-amber-500 mt-1 font-semibold">
                            {clinicRating}
                            <Star className="w-3 h-3 fill-current ml-1" />
                          </div>
                        </div>
                      </a>
                    );
                  })
                ) : (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-dashed border-slate-200 flex flex-col items-center justify-center text-center min-h-[180px]">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                      <Building2 className="w-6 h-6" />
                    </div>

                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      No verified clinics yet
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1.5 max-w-sm">
                      Verified clinics will appear here automatically after
                      approval.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
              Explore Services
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
              {loading
                ? Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-xs flex flex-col items-center justify-center animate-pulse"
                    >
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-slate-200 rounded-full mb-2 sm:mb-3" />

                      <div className="h-3 sm:h-4 bg-slate-200 rounded w-3/4" />
                    </div>
                  ))
                : services.map((service) => {
                    const IconComponent = service.icon;

                    return (
                      <a
                        key={service.id}
                        href={`#service-${service.id}`}
                        className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center group border border-transparent hover:border-teal-300"
                      >
                        <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                          <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                        </div>

                        <span className="font-bold text-xs sm:text-sm text-gray-800 group-hover:text-teal-600 truncate max-w-full">
                          {service.title}
                        </span>
                      </a>
                    );
                  })}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Recent Patient Reviews
              </h2>

              <button className="text-teal-600 hover:text-teal-700 font-semibold text-xs sm:text-sm cursor-pointer">
                View All
              </button>
            </div>

            <div className="relative group">
              <button
                onClick={() => scrollReviews("left")}
                aria-label="Previous review"
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-gray-600 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-all items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                ref={reviewsContainerRef}
                className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {loading
                  ? Array.from({ length: 3 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xs flex items-start gap-3 min-w-[85%] sm:min-w-[60%] md:min-w-full animate-pulse"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 shrink-0" />

                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-1/2" />

                          <div className="h-3 bg-slate-200 rounded w-full" />

                          <div className="h-3 bg-slate-200 rounded w-1/3" />
                        </div>
                      </div>
                    ))
                  : reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3 min-w-[85%] sm:min-w-[60%] md:min-w-full snap-center shrink-0"
                      >
                        <ImageWithSkeleton
                          src={rev.image}
                          alt={rev.name}
                          containerClassName="w-10 h-10 sm:w-12 sm:h-12 rounded-full shrink-0"
                          className="w-full h-full object-cover"
                        />

                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-900 text-xs sm:text-sm truncate">
                            {rev.name}
                          </h3>

                          <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight my-1 line-clamp-2">
                            {rev.description}
                          </p>

                          <div className="flex items-center text-[11px] sm:text-xs text-amber-500 font-semibold mt-1">
                            <div className="flex gap-0.5 mr-1.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current"
                                />
                              ))}
                            </div>

                            {rev.rating}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>

              <button
                onClick={() => scrollReviews("right")}
                aria-label="Next review"
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-gray-600 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-all items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center items-center gap-1.5 mt-4 sm:mt-6">
              <span className="w-5 sm:w-6 h-1.5 sm:h-2 bg-teal-600 rounded-full"></span>

              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-200 rounded-full"></span>

              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-200 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;

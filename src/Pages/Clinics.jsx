// const Clinics = () => {
//   return (
//     <>
//       <h1>Clinics</h1>
//     </>
//   );
// };
// export default Clinics;

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Search,
  Star,
  Clock,
  Phone,
  ShieldCheck,
  ChevronDown,
  Building2,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Helper Image Component with Skeleton Loading
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

// Master Clinics Data
const CLINICS_DATA = [
  {
    id: 1,
    name: "Kalinga Advanced Physio & Rehab Center",
    district: "Khordha",
    city: "Bhubaneswar",
    address: "Plot No. 124, Saheed Nagar, Janpath Road",
    rating: 4.9,
    reviewsCount: 128,
    phone: "+91 98765 43210",
    timing: "08:00 AM - 08:00 PM",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    therapistsCount: 6,
    equipment: ["Laser Therapy", "Ultrasound", "Traction Table", "CPM Unit"],
    startingPrice: "₹600",
  },
  {
    id: 2,
    name: "Cuttack Ortho-Neuro Care Clinic",
    district: "Cuttack",
    city: "Cuttack",
    address: "Near Link Road, Opp. Municipal Complex",
    rating: 4.8,
    reviewsCount: 94,
    phone: "+91 98765 11223",
    timing: "09:00 AM - 07:30 PM",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80",
    therapistsCount: 4,
    equipment: ["SWD Machine", "IFT Unit", "Parallel Bars", "Gym Ball"],
    startingPrice: "₹500",
  },
  {
    id: 3,
    name: "Puri Beachside Physiotherapy & Wellness",
    district: "Puri",
    city: "Puri",
    address: "VIP Road, Near Grand Road Crossing",
    rating: 4.7,
    reviewsCount: 56,
    phone: "+91 98765 99887",
    timing: "08:30 AM - 06:30 PM",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    therapistsCount: 3,
    equipment: ["Hydrotherapy", "Tens Machine", "Kinesio Taping"],
    startingPrice: "₹450",
  },
  {
    id: 4,
    name: "Rourkela Sports & Spine Rehabilitation",
    district: "Sundargarh",
    city: "Rourkela",
    address: "Sector 5, Main Commercial Complex",
    rating: 4.9,
    reviewsCount: 112,
    phone: "+91 98765 33445",
    timing: "08:00 AM - 08:30 PM",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
    therapistsCount: 5,
    equipment: ["Shockwave Therapy", "Cryotherapy", "Force Plates"],
    startingPrice: "₹700",
  },
];

const DISTRICTS = ["All Districts", "Khordha", "Cuttack", "Puri", "Sundargarh"];
const CITIES = ["All Cities", "Bhubaneswar", "Cuttack", "Puri", "Rourkela"];

// Clinic Card Skeleton Loader Component
const ClinicCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-100 flex flex-col md:flex-row animate-pulse">
      <div className="md:w-2/5 h-48 md:h-auto bg-slate-200" />
      <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 bg-slate-200 rounded w-1/4" />
            <div className="h-4 bg-slate-200 rounded w-1/6" />
          </div>
          <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
          <div className="h-3 bg-slate-200 rounded w-full mb-2" />
          <div className="h-3 bg-slate-200 rounded w-2/3 mb-4" />

          <div className="flex gap-2 mb-3">
            <div className="h-6 w-20 bg-slate-200 rounded-md" />
            <div className="h-6 w-20 bg-slate-200 rounded-md" />
            <div className="h-6 w-20 bg-slate-200 rounded-md" />
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
          <div className="h-5 w-24 bg-slate-200 rounded" />
          <div className="h-10 w-32 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

const Clinics = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredClinics = CLINICS_DATA.filter((clinic) => {
    const matchesSearch =
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDistrict =
      selectedDistrict === "All Districts" ||
      clinic.district === selectedDistrict;
    const matchesCity =
      selectedCity === "All Cities" || clinic.city === selectedCity;

    return matchesSearch && matchesDistrict && matchesCity;
  });

  return (
    <div className="w-full bg-[#edf7f6] text-gray-800 font-sans selection:bg-teal-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a4f48] bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Verified Healthcare Centers
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Top Partner{" "}
            <span className="text-[#0a4f48]">Physiotherapy Clinics</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Explore state-of-the-art physiotherapy centers, equipped with modern
            therapeutic technology across major Odisha cities.
          </p>
        </div>

        {/* FILTER & SEARCH BAR */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-md border border-slate-200/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-[#0a4f48] transition-colors">
              <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search clinic by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>

            {/* District Selector */}
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-[#0a4f48] transition-colors">
              <MapPin size={18} className="text-slate-400 mr-2 flex-shrink-0" />
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none appearance-none text-slate-800 cursor-pointer pr-4"
              >
                {DISTRICTS.map((dist, i) => (
                  <option key={i} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 text-slate-400 pointer-events-none"
              />
            </div>

            {/* City Selector */}
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-[#0a4f48] transition-colors">
              <Building2
                size={18}
                className="text-slate-400 mr-2 flex-shrink-0"
              />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none appearance-none text-slate-800 cursor-pointer pr-4"
              >
                {CITIES.map((city, i) => (
                  
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* CLINICS LIST GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <ClinicCardSkeleton key={idx} />
              ))
            : filteredClinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-300 flex flex-col sm:flex-row group"
                >
                  {/* Clinic Photo */}
                  <ImageWithSkeleton
                    src={clinic.image}
                    alt={clinic.name}
                    containerClassName="sm:w-2/5 h-48 sm:h-auto shrink-0"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Clinic Meta Data */}
                  <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      {/* Rating & Verified Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        {clinic.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                            <ShieldCheck className="w-3 h-3 text-[#0a4f48]" />{" "}
                            Verified Partner
                          </span>
                        )}
                        <div className="flex items-center text-xs font-semibold text-amber-500 ml-auto">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{clinic.rating}</span>
                          <span className="text-gray-400 font-normal text-[11px] ml-1">
                            ({clinic.reviewsCount})
                          </span>
                        </div>
                      </div>

                      {/* Name & Address */}
                      <h3 className="font-bold text-gray-900 group-hover:text-[#0a4f48] transition-colors text-base sm:text-lg mb-1 leading-snug">
                        {clinic.name}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-start gap-1 font-medium mb-3">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          {clinic.address}, {clinic.city}
                        </span>
                      </p>

                      {/* Key Details: Hours & Staff */}
                      <div className="space-y-1.5 mb-4 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{clinic.timing}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#0a4f48] shrink-0" />
                          <span>
                            <strong>{clinic.therapistsCount}+</strong>{" "}
                            Specialist Therapists
                          </span>
                        </div>
                      </div>

                      {/* Equipment Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {clinic.equipment.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                          >
                            {item}
                          </span>
                        ))}
                        {clinic.equipment.length > 3 && (
                          <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                            +{clinic.equipment.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gray-400 block">
                          Consultation Fee
                        </span>
                        <span className="text-sm font-extrabold text-[#0a4f48]">
                          {clinic.startingPrice}
                        </span>
                      </div>

                      <button className="flex items-center gap-1.5 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Empty Search Result Fallback */}
        {!loading && filteredClinics.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl shadow-xs border border-slate-200/80">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">
              No Clinics Found
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Try adjusting your district, city, or search term query.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;

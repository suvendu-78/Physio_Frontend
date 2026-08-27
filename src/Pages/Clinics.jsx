import React, { useState, useMemo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MapPin,
  Search,
  Star,
  Clock,
  ShieldCheck,
  ChevronDown,
  Building2,
  Calendar,
  Sparkles,
  ExternalLink,
} from "lucide-react";

// Master Map of All 30 Districts of Odisha and Their Major Cities/HQ
const ODISHA_DISTRICTS_CITIES = {
  Angul: ["Angul", "Talcher", "Athalmallik", "Pallahara"],
  Balangir: ["Balangir", "Titilagarh", "Kantabanji", "Patnagarh"],
  Balasore: ["Balasore", "Bhadrak", "Jaleswar", "Soro"],
  Bargarh: ["Bargarh", "Padampur", "Attabira", "Barpali"],
  Bhadrak: ["Bhadrak", "Dhamra", "Chandbali", "Basudevpur"],
  Baudh: ["Baudh", "Kantamal", "Manamunda"],
  Cuttack: ["Cuttack", "Choudwar", "Banki", "Athagarh"],
  Deogarh: ["Deogarh", "Barkote", "Reamal"],
  Dhenkanal: ["Dhenkanal", "Bhuban", "Kamakhyanagar", "Gondia"],
  Gajapati: ["Paralakhemundi", "Kashinagara", "Mohana"],
  Ganjam: ["Berhampur", "Chhatrapur", "Hinjilicut", "Aska", "Bhanjanagar"],
  Jagatsinghpur: ["Jagatsinghpur", "Paradeep", "Rahama"],
  Jajpur: ["Jajpur Road", "Jajpur Town", "Vyasanagar", "Chandikhole"],
  Jharsuguda: ["Jharsuguda", "Belpahar", "Brajrajnagar"],
  Kalahandi: ["Bhawanipatna", "Kesinga", "Junagarh", "Dharamgarh"],
  Kandhamal: ["Phulbani", "G. Udayagiri", "Balliguda"],
  Kendrapara: ["Kendrapara", "Pattamundai", "Rajnagar"],
  Kendujhar: ["Keonjhar", "Barbil", "Joda", "Anandapur"],
  Khordha: ["Bhubaneswar", "Khordha", "Jatni", "Banapur"],
  Koraput: ["Koraput", "Jeypore", "Sunabeda", "Kotpad"],
  Malkangiri: ["Malkangiri", "Balimela", "MV 79"],
  Mayurbhanj: ["Baripada", "Rairangpur", "Karanjia", "Udala"],
  Nabarangpur: ["Nabarangpur", "Umerkote", "Khatiguda"],
  Nayagarh: ["Nayagarh", "Khandapada", "Ranpur", "Odagaon"],
  Nuapada: ["Nuapada", "Khariar", "Khariar Road"],
  Puri: ["Puri", "Konark", "Pipili", "Nimapada"],
  Rayagada: ["Rayagada", "Gunupur", "Muniguda"],
  Sambalpur: ["Sambalpur", "Burla", "Hirakud", "Rairakhol"],
  Subarnapur: ["Sonepur", "Binika", "Tarbha", "Ullunda"],
  Sundargarh: ["Rourkela", "Sundargarh", "Rajgangpur", "Biramitrapur"],
};

// Master Clinics Data (4 Example Clinics)
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

// Helper Image Component with Skeleton
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

// Skeleton Loader Component
const ClinicCardSkeleton = () => (
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
        </div>
      </div>
      <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
        <div className="h-5 w-20 bg-slate-200 rounded" />
        <div className="flex gap-2">
          <div className="h-9 w-24 bg-slate-200 rounded-xl" />
          <div className="h-9 w-24 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  </div>
);

const Clinics = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Sorted list of all 30 districts
  const districtOptions = useMemo(() => {
    return ["All Districts", ...Object.keys(ODISHA_DISTRICTS_CITIES).sort()];
  }, []);

  // Dynamic city options based on selected district
  const cityOptions = useMemo(() => {
    if (selectedDistrict === "All Districts") {
      const allCities = Object.values(ODISHA_DISTRICTS_CITIES).flat().sort();
      return ["All Cities", ...Array.from(new Set(allCities))];
    }
    const districtCities = ODISHA_DISTRICTS_CITIES[selectedDistrict] || [];
    return ["All Cities", ...districtCities.sort()];
  }, [selectedDistrict]);

  // Handle District change
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedCity("All Cities");
  };

  // Dynamic Filtering Logic
  const filteredClinics = useMemo(() => {
    return CLINICS_DATA.filter((clinic) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        clinic.name.toLowerCase().includes(query) ||
        clinic.address.toLowerCase().includes(query) ||
        clinic.city.toLowerCase().includes(query) ||
        clinic.district.toLowerCase().includes(query);

      const matchesDistrict =
        selectedDistrict === "All Districts" ||
        clinic.district === selectedDistrict;

      const matchesCity =
        selectedCity === "All Cities" || clinic.city === selectedCity;

      return matchesSearch && matchesDistrict && matchesCity;
    });
  }, [searchQuery, selectedDistrict, selectedCity]);

  return (
    <div className="w-full bg-[#edf7f6] text-gray-800 font-sans selection:bg-teal-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a4f48] bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Verified Healthcare Centers
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Top Partner{" "}
            <span className="text-[#0a4f48]">Physiotherapy Clinics</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Explore state-of-the-art physiotherapy centers across all 30
            districts of Odisha.
          </p>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-md border border-slate-200/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-[#0a4f48] transition-colors">
              <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by clinic name or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>

            {/* District Selector (All 30 Odisha Districts) */}
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3 py-2.5 bg-slate-50 focus-within:bg-white focus-within:border-[#0a4f48] transition-colors">
              <MapPin size={18} className="text-slate-400 mr-2 flex-shrink-0" />
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
                className="w-full bg-transparent text-xs sm:text-sm font-medium focus:outline-none appearance-none text-slate-800 cursor-pointer pr-4"
              >
                {districtOptions.map((dist, i) => (
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
                {cityOptions.map((city, i) => (
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

        {/* CLINICS GRID */}
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
                  <ImageWithSkeleton
                    src={clinic.image}
                    alt={clinic.name}
                    containerClassName="sm:w-2/5 h-48 sm:h-auto shrink-0"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                    <div>
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

                      <h3 className="font-bold text-gray-900 group-hover:text-[#0a4f48] transition-colors text-base sm:text-lg mb-1 leading-snug">
                        {clinic.name}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-start gap-1 font-medium mb-3">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                        <span>
                          {clinic.address}, {clinic.city}
                        </span>
                      </p>

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

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {clinic.equipment.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gray-400 block">
                          Consultation Fee
                        </span>
                        <span className="text-sm font-extrabold text-[#0a4f48]">
                          {clinic.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <NavLink to="/clinicDetail">
                          <button className="flex items-center gap-1 border border-[#0a4f48] text-[#0a4f48] hover:bg-[#0a4f48] hover:text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all active:scale-[0.98] cursor-pointer">
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Explore</span>
                          </button>
                        </NavLink>
                        <NavLink to="/bookingpage">
                          <button className="flex items-center gap-1 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Visit</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* EMPTY STATE (Triggers when selected District/City has no clinics) */}
        {!loading && filteredClinics.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-xs border border-slate-200/80 max-w-2xl mx-auto">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">
              No Clinics Found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
              We currently don't have registered physiotherapy centers in{" "}
              <strong className="text-gray-700">
                {selectedCity !== "All Cities"
                  ? selectedCity
                  : selectedDistrict}
              </strong>
              . Try expanding your search filter or selecting another location.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clinics;

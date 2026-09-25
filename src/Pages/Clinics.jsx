import React, { useState, useMemo, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

const ODISHA_DISTRICTS_CITIES = {
  Angul: ["Angul", "Talcher", "Athmallik", "Pallahara"],
  Balangir: ["Balangir", "Titlagarh", "Kantabanji", "Patnagarh"],
  Balasore: ["Balasore", "Bhadrak", "Jaleswar", "Soro"],
  Bargarh: ["Bargarh", "Padampur", "Attabira", "Barpali"],
  Bhadrak: ["Bhadrak", "Dhamra", "Chandbali", "Basudevpur"],
  Baudh: ["Boudh", "Kantamal", "Manamunda"],
  Cuttack: ["Cuttack", "Choudwar", "Banki", "Athagarh"],
  Deogarh: ["Deogarh", "Barkote", "Reamal"],
  Dhenkanal: ["Dhenkanal", "Bhuban", "Kamakhyanagar", "Gondia"],
  Gajapati: ["Paralakhemundi", "Kashinagara", "Mohana"],
  Ganjam: ["Berhampur", "Chhatrapur", "Hinjilicut", "Aska", "Bhanjanagar"],
  Jagatsinghpur: ["Jagatsinghpur", "Paradip", "Rahama"],
  Jajpur: ["Jajpur Road", "Jajpur Town", "Vyasanagar", "Chandikhole"],
  Jharsuguda: ["Jharsuguda", "Belpahar", "Brajarajnagar"],
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

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  containerClassName = "",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && src && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}

      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm font-medium">
          No Photo
        </div>
      )}
    </div>
  );
};

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
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [clinics, setClinics] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const fetchClinics = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://physio-backend-sand.vercel.app/api/v1/user/findclinic",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch clinics");
      }

      const result = await response.json();

      console.log("CLINIC API RESPONSE:", result);

      if (Array.isArray(result?.data)) {
        setClinics(result.data);
      } else {
        setClinics([]);
      }
    } catch (error) {
      console.error("CLINIC FETCH ERROR:", error);
      setClinics([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClinics();
  }, []);

  const handleExplore = async (clinic) => {
    const clinicName = clinic.clinicName;

    if (!clinicName) {
      navigate("/clinicDetail", {
        state: {
          clinic,
        },
      });
      return;
    }

    try {
      const response = await fetch(
        `https://physio-backend-sand.vercel.app/api/v1/user/findDoctorsByClinic?clinicName=${encodeURIComponent(
          clinicName,
        )}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }

      const result = await response.json();

      navigate("/clinicDetail", {
        state: {
          clinic,
          clinicName,
          doctors: Array.isArray(result?.data) ? result.data : [],
        },
      });
    } catch (error) {
      console.error("DOCTOR FETCH ERROR:", error);

      navigate("/clinicDetail", {
        state: {
          clinic,
          clinicName,
          doctors: [],
        },
      });
    }
  };

  const districtOptions = useMemo(() => {
    return ["All Districts", ...Object.keys(ODISHA_DISTRICTS_CITIES).sort()];
  }, []);

  const cityOptions = useMemo(() => {
    if (selectedDistrict === "All Districts") {
      const allCities = Object.values(ODISHA_DISTRICTS_CITIES).flat().sort();

      return ["All Cities", ...Array.from(new Set(allCities))];
    }

    const districtCities = ODISHA_DISTRICTS_CITIES[selectedDistrict] || [];

    return ["All Cities", ...districtCities.sort()];
  }, [selectedDistrict]);

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedCity("All Cities");
  };

  const filteredClinics = useMemo(() => {
    return clinics.filter((clinic) => {
      const query = searchQuery.toLowerCase().trim();

      const clinicName = String(
        clinic.clinicName || clinic.name || clinic.title || "",
      );

      const clinicAddress = String(
        clinic.address || clinic.clinicAddress || "",
      );

      const clinicCity = String(clinic.city || clinic.location?.city || "");

      const clinicDistrict = String(
        clinic.district || clinic.location?.district || "",
      );

      const matchesSearch =
        !query ||
        clinicName.toLowerCase().includes(query) ||
        clinicAddress.toLowerCase().includes(query) ||
        clinicCity.toLowerCase().includes(query) ||
        clinicDistrict.toLowerCase().includes(query);

      const matchesDistrict =
        selectedDistrict === "All Districts" ||
        clinicDistrict === selectedDistrict;

      const matchesCity =
        selectedCity === "All Cities" || clinicCity === selectedCity;

      return matchesSearch && matchesDistrict && matchesCity;
    });
  }, [clinics, searchQuery, selectedDistrict, selectedCity]);

  return (
    <div className="w-full bg-[#edf7f6] text-gray-800 font-sans selection:bg-teal-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a4f48] bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Verified Healthcare Centers
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Top Partner{" "}
            <span className="text-[#0a4f48]">Physiotherapy Clinics</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Explore verified physiotherapy centers across all districts of
            Odisha.
          </p>
        </div>

        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-md border border-slate-200/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <ClinicCardSkeleton key={idx} />
            ))
          ) : filteredClinics.length > 0 ? (
            filteredClinics.map((clinic) => {
              const clinicId = clinic._id || clinic.id;

              const clinicName = String(
                clinic.clinicName || clinic.name || clinic.title || "Clinic",
              );

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
                  : "") ||
                clinic.image ||
                "";

              const clinicAddress = String(
                clinic.address ||
                  clinic.clinicAddress ||
                  "Address not available",
              );

              const clinicCity = String(
                clinic.city || clinic.location?.city || "",
              );

              const clinicRating = clinic.rating ?? clinic.averageRating ?? 0;

              const reviewsCount =
                clinic.reviewsCount ?? clinic.totalReviews ?? 0;

              const formatWorkingHours = (workingHours) => {
                if (!Array.isArray(workingHours) || workingHours.length === 0) {
                  return "Timing not available";
                }

                const activeDay = workingHours.find(
                  (item) =>
                    item && item.enabled === true && item.open && item.close,
                );

                if (!activeDay) {
                  return "Closed";
                }

                return `${activeDay.day}: ${activeDay.open} - ${activeDay.close}`;
              };

              const clinicTiming =
                typeof clinic.timing === "string"
                  ? clinic.timing
                  : typeof clinic.openingHours === "string"
                    ? clinic.openingHours
                    : formatWorkingHours(clinic.workingHours);

              const therapistsCount =
                clinic.therapistsCount ??
                clinic.doctorsCount ??
                clinic.staffCount ??
                0;

              const equipment = Array.isArray(clinic.equipment)
                ? clinic.equipment
                    .map((item) =>
                      typeof item === "string"
                        ? item
                        : item?.name || item?.title || "",
                    )
                    .filter(Boolean)
                : [];

              const rawStartingPrice =
                clinic.startingPrice ?? clinic.consultationFee ?? clinic.fee;

              const startingPrice =
                typeof rawStartingPrice === "object" &&
                rawStartingPrice !== null
                  ? rawStartingPrice.amount
                    ? `₹${rawStartingPrice.amount}`
                    : "Not available"
                  : (rawStartingPrice ?? "Not available");

              return (
                <div
                  key={clinicId}
                  className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-300 flex flex-col sm:flex-row group"
                >
                  <ImageWithSkeleton
                    src={clinicImage}
                    alt={clinicName}
                    containerClassName="sm:w-2/5 h-48 sm:h-auto shrink-0"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                          <ShieldCheck className="w-3 h-3 text-[#0a4f48]" />
                          Verified Partner
                        </span>

                        <div className="flex items-center text-xs font-semibold text-amber-500 ml-auto">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />

                          <span>{clinicRating}</span>

                          <span className="text-gray-400 font-normal text-[11px] ml-1">
                            ({reviewsCount})
                          </span>
                        </div>
                      </div>

                      <h3 className="font-bold text-gray-900 group-hover:text-[#0a4f48] transition-colors text-base sm:text-lg mb-1 leading-snug">
                        {clinicName}
                      </h3>

                      <p className="text-xs text-gray-500 flex items-start gap-1 font-medium mb-3">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />

                        <span>
                          {clinicAddress}
                          {clinicCity ? `, ${clinicCity}` : ""}
                        </span>
                      </p>

                      <div className="space-y-1.5 mb-4 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />

                          <span>{clinicTiming}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#0a4f48] shrink-0" />

                          <span>
                            <strong>{therapistsCount}+</strong> Specialist
                            Therapists
                          </span>
                        </div>
                      </div>

                      {equipment.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {equipment.slice(0, 3).map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-gray-400 block">
                          Consultation Fee
                        </span>

                        <span className="text-sm font-extrabold text-[#0a4f48]">
                          {startingPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleExplore(clinic)}
                          className="flex items-center gap-1 border border-[#0a4f48] text-[#0a4f48] hover:bg-[#0a4f48] hover:text-white text-xs font-semibold px-3 py-2 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Explore</span>
                        </button>

                        <NavLink
                          to="/bookingpage"
                          state={{
                            clinic,
                            clinicName: clinic.clinicName,
                          }}
                        >
                          <button className="flex items-center gap-1 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
                            <Calendar className="w-3.5 h-3.5" />

                            <span>Book Visit</span>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-1 lg:col-span-2 text-center py-16 bg-white rounded-2xl shadow-xs border border-slate-200/80 max-w-2xl mx-auto w-full">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />

              <h3 className="text-lg font-bold text-gray-800">
                No Service Available, Sorry
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
                We currently don't have any verified physiotherapy clinic
                available for the selected location.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clinics;

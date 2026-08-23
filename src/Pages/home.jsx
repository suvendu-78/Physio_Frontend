// import React, { useState, useEffect, useRef } from "react";
// import {
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   MapPin,
//   Home as HomeIcon,
//   Building2,
//   Stethoscope,
//   ChevronDown,
//   Star,
//   Activity,
//   Brain,
//   Sparkles,
//   Hand,
//   UserCheck,
// } from "lucide-react";

// const SLIDES = [
//   {
//     url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
//     alt: "Physiotherapist assisting a patient with shoulder mobility",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
//     alt: "Physiotherapist guiding a patient through a knee exercise",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1600&auto=format&fit=crop",
//     alt: "Home visit physiotherapy session",
//   },
// ];

// const DISTRICTS = [
//   "Select District",
//   "Khordha",
//   "Cuttack",
//   "Puri",
//   "Ganjam",
//   "Sundargarh",
// ];

// const CITIES = [
//   "Select City",
//   "Bhubaneswar",
//   "Cuttack",
//   "Puri",
//   "Berhampur",
//   "Rourkela",
// ];

// const SPECIALIZATIONS = [
//   "Specialization",
//   "Orthopedic",
//   "Neuro",
//   "Sports Injury",
//   "Pediatric",
//   "Post-Surgery",
// ];

// const Homes = () => {
//   const [index, setIndex] = useState(0);
//   const [district, setDistrict] = useState(DISTRICTS[0]);
//   const [city, setCity] = useState(CITIES[0]);
//   const [specialization, setSpecialization] = useState(SPECIALIZATIONS[0]);

//   const goTo = (newIndex) => {
//     if (newIndex < 0) {
//       setIndex(SLIDES.length - 1);
//     } else if (newIndex >= SLIDES.length) {
//       setIndex(0);
//     } else {
//       setIndex(newIndex);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       goTo(index + 1);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [index]);
//   const reviewsContainerRef = useRef(null);

//   // Sample Data
//   const doctors = [
//     {
//       id: 1,
//       name: "Dr. Namara Names",
//       rating: 4.8,
//       specialization: "Specialization",
//       image:
//         "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 2,
//       name: "Dr. Namara Sannan",
//       rating: 4.8,
//       specialization: "Specialization",
//       image:
//         "https://images.unsplash.com/photo-1594824813566-78a93a1a9e70?w=400&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 3,
//       name: "Dr. Name Naman",
//       rating: 4.8,
//       specialization: "Specialization",
//       image:
//         "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 4,
//       name: "Dr. Namarar Ranam",
//       rating: 4.8,
//       specialization: "Specialization",
//       image:
//         "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
//     },
//   ];

//   const clinics = [
//     {
//       id: 1,
//       title: "Top Clinics",
//       subtitle: "Physiotherapist",
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 2,
//       title: "Top Clinics",
//       subtitle: "Physiotherapist",
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&auto=format&fit=crop&q=80",
//     },
//   ];

//   const services = [
//     { id: 1, title: "Orthopedic", icon: Activity },
//     { id: 2, title: "Neurological", icon: Brain },
//     { id: 3, title: "Pediatrics", icon: Sparkles },
//     { id: 4, title: "Physiotherapy", icon: Hand },
//     { id: 5, title: "E-Therapy", icon: Stethoscope },
//     { id: 6, title: "Therapy", icon: UserCheck },
//   ];

//   const reviews = [
//     {
//       id: 1,
//       name: "Rowara Name",
//       description: "Physiotherapy Physiotherapist for across Odisha.",
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 2,
//       name: "Konra Rahor",
//       description: "Physiotherapy Physiotherapist for across Odisha.",
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
//     },
//     {
//       id: 3,
//       name: "Asanna Bheshi",
//       description: "Physiotherapy Physiotherapist for across Odisha.",
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
//     },
//   ];

//   // Horizontal Scroll Handler for mobile/tablet review carousel
//   const scrollReviews = (direction) => {
//     if (reviewsContainerRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       reviewsContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="w-full font-sans">
//       {/* ============ DESKTOP / TABLET VIEW ============ */}
//       <section className="hidden md:block relative w-full h-[520px] lg:h-[580px] overflow-hidden bg-[#0a4f48]">
//         {/* Carousel Photo Track */}
//         <div
//           className="absolute inset-0 flex transition-transform duration-700 ease-out"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {SLIDES.map((s, i) => (
//             <div key={i} className="relative w-full h-full flex-shrink-0">
//               <img
//                 src={s.url}
//                 alt={s.alt}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#063b36]/95 via-[#0a4f48]/75 to-transparent" />
//             </div>
//           ))}
//         </div>

//         {/* Carousel Arrow Controls */}
//         <button
//           aria-label="Previous photo"
//           onClick={() => goTo(index - 1)}
//           className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200"
//         >
//           <ChevronLeft size={22} />
//         </button>
//         <button
//           aria-label="Next photo"
//           onClick={() => goTo(index + 1)}
//           className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200"
//         >
//           <ChevronRight size={22} />
//         </button>

//         {/* Carousel Indicators */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//           {SLIDES.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to photo ${i + 1}`}
//               onClick={() => goTo(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 i === index
//                   ? "w-8 bg-amber-400"
//                   : "w-2 bg-white/40 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Hero Content Overlay */}
//         <div className="relative z-10 h-full max-w-7xl mx-auto px-8 lg:px-12 flex items-center">
//           <div className="max-w-2xl">
//             <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8">
//               Find & Book Top <br />
//               <span className="text-amber-400">Physiotherapists</span> in Odisha
//             </h1>

//             {/* ADVANCED FLOATING SEARCH BAR */}
//             <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl ring-1 ring-black/5 mb-6">
//               <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
//                 {/* District Selector */}
//                 <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
//                   <MapPin
//                     className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
//                     size={18}
//                   />
//                   <div className="w-full">
//                     <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
//                       Location
//                     </label>
//                     <select
//                       value={district}
//                       onChange={(e) => setDistrict(e.target.value)}
//                       className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
//                     >
//                       {DISTRICTS.map((item, idx) => (
//                         <option key={idx} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <ChevronDown
//                     className="absolute right-3 text-slate-400 pointer-events-none"
//                     size={14}
//                   />
//                 </div>

//                 {/* City Selector */}
//                 <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
//                   <Building2
//                     className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
//                     size={18}
//                   />
//                   <div className="w-full">
//                     <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
//                       City
//                     </label>
//                     <select
//                       value={city}
//                       onChange={(e) => setCity(e.target.value)}
//                       className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
//                     >
//                       {CITIES.map((item, idx) => (
//                         <option key={idx} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <ChevronDown
//                     className="absolute right-3 text-slate-400 pointer-events-none"
//                     size={14}
//                   />
//                 </div>

//                 {/* Specialization Selector */}
//                 <div className="relative flex items-center w-full md:w-1/3 px-3 py-2 group">
//                   <Stethoscope
//                     className="text-slate-400 group-focus-within:text-[#0a4f48] transition-colors mr-2.5 flex-shrink-0"
//                     size={18}
//                   />
//                   <div className="w-full">
//                     <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
//                       Care Type
//                     </label>
//                     <select
//                       value={specialization}
//                       onChange={(e) => setSpecialization(e.target.value)}
//                       className="w-full bg-transparent text-slate-800 font-medium text-sm focus:outline-none appearance-none cursor-pointer pr-4 truncate"
//                     >
//                       {SPECIALIZATIONS.map((item, idx) => (
//                         <option key={idx} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <ChevronDown
//                     className="absolute right-3 text-slate-400 pointer-events-none"
//                     size={14}
//                   />
//                 </div>

//                 {/* Main Action Button */}
//                 <div className="p-1 w-full md:w-auto">
//                   <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
//                     <Search size={18} strokeWidth={2.5} />
//                     <span>Search</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* SECONDARY BOOKING PILLS */}
//             <div className="flex flex-wrap gap-3">
//               <button className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg">
//                 <HomeIcon size={16} className="text-amber-400" />
//                 Book Home Visit
//               </button>
//               <button className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg">
//                 <Building2 size={16} className="text-amber-400" />
//                 Book Clinic Visit
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ MOBILE VIEW ============ */}
//       <section className="md:hidden w-full bg-slate-50 p-4">
//         <div className="bg-[#0a4f48] rounded-2xl p-5 shadow-xl text-white">
//           <h1 className="text-xl font-bold text-center leading-snug mb-5">
//             Find Trusted Physiotherapists <br />
//             <span className="text-amber-400">Across Odisha</span>
//           </h1>

//           <div className="bg-white text-slate-800 rounded-xl p-3 shadow-md space-y-3 mb-4">
//             <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
//               <MapPin size={16} className="text-slate-400 mr-2" />
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
//               >
//                 {DISTRICTS.map((item, idx) => (
//                   <option key={idx} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown
//                 size={14}
//                 className="text-slate-400 pointer-events-none"
//               />
//             </div>

//             <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
//               <Building2 size={16} className="text-slate-400 mr-2" />
//               <select
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
//               >
//                 {CITIES.map((item, idx) => (
//                   <option key={idx} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown
//                 size={14}
//                 className="text-slate-400 pointer-events-none"
//               />
//             </div>

//             <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-2">
//               <Stethoscope size={16} className="text-slate-400 mr-2" />
//               <select
//                 value={specialization}
//                 onChange={(e) => setSpecialization(e.target.value)}
//                 className="w-full bg-transparent text-xs font-medium focus:outline-none appearance-none"
//               >
//                 {SPECIALIZATIONS.map((item, idx) => (
//                   <option key={idx} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown
//                 size={14}
//                 className="text-slate-400 pointer-events-none"
//               />
//             </div>

//             <button className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm py-3 rounded-lg transition-colors">
//               <Search size={16} />
//               Search Doctors
//             </button>
//           </div>

//           <div className="grid grid-cols-2 gap-2">
//             <button className="flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium py-2.5 rounded-lg">
//               <HomeIcon size={14} className="text-amber-400" />
//               Home Visit
//             </button>
//             <button className="flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium py-2.5 rounded-lg">
//               <Building2 size={14} className="text-amber-400" />
//               Clinic Visit
//             </button>
//           </div>
//         </div>
//       </section>

//       <div className="bg-[#edf7f6] text-gray-800 p-3 sm:p-6 lg:p-8 min-h-screen font-sans selection:bg-teal-100">
//         <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
//           {/* ================= TOP SECTION ================= */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Featured Physiotherapists */}
//             <div className="lg:col-span-2">
//               <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
//                 Featured Physiotherapists
//               </h2>

//               {/* 2 Columns on Mobile, 4 Columns on Desktop */}
//               <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
//                 {doctors.map((doc) => (
//                   <a
//                     key={doc.id}
//                     href={`#doctor-${doc.id}`}
//                     className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 flex flex-col group"
//                   >
//                     <div className="relative rounded-xl overflow-hidden mb-2.5 aspect-4/3 sm:aspect-square">
//                       <img
//                         src={doc.image}
//                         alt={doc.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         loading="lazy"
//                       />
//                       <span className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-teal-600/90 text-white text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
//                         {doc.rating}{" "}
//                         <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
//                       </span>
//                     </div>
//                     <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-xs sm:text-sm truncate">
//                       {doc.name}
//                     </h3>
//                     <div className="flex items-center text-[11px] sm:text-xs text-amber-500 my-0.5 sm:my-1 font-semibold">
//                       {doc.rating}{" "}
//                       <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
//                     </div>
//                     <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate">
//                       {doc.specialization}
//                     </p>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Top Clinics */}
//             <div>
//               <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
//                 Top Clinics
//               </h2>

//               {/* Grid layout on Mobile/Tablet, Stacked on Desktop */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
//                 {clinics.map((clinic) => (
//                   <a
//                     key={clinic.id}
//                     href={`#clinic-${clinic.id}`}
//                     className="bg-white rounded-2xl p-3 flex items-center gap-3 sm:gap-4 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 group"
//                   >
//                     <img
//                       src={clinic.image}
//                       alt={clinic.title}
//                       className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
//                       loading="lazy"
//                     />
//                     <div className="min-w-0">
//                       <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-sm sm:text-base truncate">
//                         {clinic.title}
//                       </h3>
//                       <p className="text-xs text-gray-500 font-medium truncate">
//                         {clinic.subtitle}
//                       </p>
//                       <div className="flex items-center text-xs text-amber-500 mt-1 font-semibold">
//                         {clinic.rating}{" "}
//                         <Star className="w-3 h-3 fill-current ml-1" />
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ================= EXPLORE SERVICES ================= */}
//           <div>
//             <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
//               Explore Services
//             </h2>

//             {/* Responsive Grid: 3 columns on Mobile, 6 on Large Screens */}
//             <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
//               {services.map((service) => {
//                 const IconComponent = service.icon;
//                 return (
//                   <a
//                     key={service.id}
//                     href={`#service-${service.id}`}
//                     className="bg-white rounded-2xl p-3 sm:p-5 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-center group border border-transparent hover:border-teal-300"
//                   >
//                     <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
//                       <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
//                     </div>
//                     <span className="font-bold text-xs sm:text-sm text-gray-800 group-hover:text-teal-600 truncate max-w-full">
//                       {service.title}
//                     </span>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ================= RECENT PATIENT REVIEWS ================= */}
//           <div>
//             <div className="flex justify-between items-center mb-3 sm:mb-4">
//               <h2 className="text-lg sm:text-xl font-bold text-gray-900">
//                 Recent Patient Reviews
//               </h2>
//               <button className="text-teal-600 hover:text-teal-700 font-semibold text-xs sm:text-sm cursor-pointer">
//                 View All
//               </button>
//             </div>

//             <div className="relative group">
//               {/* Prev Button */}
//               <button
//                 onClick={() => scrollReviews("left")}
//                 aria-label="Previous review"
//                 className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-gray-600 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-all items-center justify-center cursor-pointer"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>

//               {/* Responsive Container: Touch Scroll on Mobile, Grid on Desktop */}
//               <div
//                 ref={reviewsContainerRef}
//                 className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//               >
//                 {reviews.map((rev) => (
//                   <div
//                     key={rev.id}
//                     className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3 min-w-[85%] sm:min-w-[60%] md:min-w-full snap-center shrink-0"
//                   >
//                     <img
//                       src={rev.image}
//                       alt={rev.name}
//                       className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0"
//                       loading="lazy"
//                     />
//                     <div className="min-w-0">
//                       <h3 className="font-bold text-gray-900 text-xs sm:text-sm truncate">
//                         {rev.name}
//                       </h3>
//                       <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight my-1 line-clamp-2">
//                         {rev.description}
//                       </p>
//                       <div className="flex items-center text-[11px] sm:text-xs text-amber-500 font-semibold mt-1">
//                         <div className="flex gap-0.5 mr-1.5">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current"
//                             />
//                           ))}
//                         </div>
//                         {rev.rating}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Next Button */}
//               <button
//                 onClick={() => scrollReviews("right")}
//                 aria-label="Next review"
//                 className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white text-gray-600 rounded-full shadow-md hover:bg-teal-600 hover:text-white transition-all items-center justify-center cursor-pointer"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Carousel Indicators */}
//             <div className="flex justify-center items-center gap-1.5 mt-4 sm:mt-6">
//               <span className="w-5 sm:w-6 h-1.5 sm:h-2 bg-teal-600 rounded-full"></span>
//               <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-200 rounded-full"></span>
//               <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-200 rounded-full"></span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homes;
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

// Helper Image Component with built-in Skeleton Loader
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

  const reviewsContainerRef = useRef(null);

  // Simulate data fetching delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
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

  // Sample Data
  const doctors = [
    {
      id: 1,
      name: "Dr. Namara Names",
      rating: 4.8,
      specialization: "Specialization",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Dr. Namara Sannan",
      rating: 4.8,
      specialization: "Specialization",
      image:
        "https://images.unsplash.com/photo-1594824813566-78a93a1a9e70?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Dr. Name Naman",
      rating: 4.8,
      specialization: "Specialization",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Dr. Namarar Ranam",
      rating: 4.8,
      specialization: "Specialization",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80",
    },
  ];

  const clinics = [
    {
      id: 1,
      title: "Top Clinics",
      subtitle: "Physiotherapist",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Top Clinics",
      subtitle: "Physiotherapist",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&auto=format&fit=crop&q=80",
    },
  ];

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
      {/* ============ DESKTOP / TABLET VIEW ============ */}
      <section className="hidden md:block relative w-full h-[520px] lg:h-[580px] overflow-hidden bg-[#0a4f48]">
        {loading ? (
          <div className="w-full h-full bg-slate-300 animate-pulse" />
        ) : (
          <>
            {/* Carousel Photo Track */}
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
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
          </>
        )}

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

      <div className="bg-[#edf7f6] text-gray-800 p-3 sm:p-6 lg:p-8 min-h-screen font-sans selection:bg-teal-100">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          {/* ================= TOP SECTION ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Physiotherapists */}
            <div className="lg:col-span-2">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                Featured Physiotherapists
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {loading
                  ? Array.from({ length: 4 }).map((_, idx) => (
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
                  : doctors.map((doc) => (
                      <a
                        key={doc.id}
                        href={`#doctor-${doc.id}`}
                        className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 flex flex-col group"
                      >
                        <ImageWithSkeleton
                          src={doc.image}
                          alt={doc.name}
                          containerClassName="rounded-xl mb-2.5 aspect-4/3 sm:aspect-square"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-xs sm:text-sm truncate">
                          {doc.name}
                        </h3>
                        <div className="flex items-center text-[11px] sm:text-xs text-amber-500 my-0.5 sm:my-1 font-semibold">
                          {doc.rating}{" "}
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate">
                          {doc.specialization}
                        </p>
                      </a>
                    ))}
              </div>
            </div>

            {/* Top Clinics */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                Top Clinics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {loading
                  ? Array.from({ length: 2 }).map((_, idx) => (
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
                  : clinics.map((clinic) => (
                      <a
                        key={clinic.id}
                        href={`#clinic-${clinic.id}`}
                        className="bg-white rounded-2xl p-3 flex items-center gap-3 sm:gap-4 shadow-xs hover:shadow-md transition-all duration-200 border border-transparent hover:border-teal-300 group"
                      >
                        <ImageWithSkeleton
                          src={clinic.image}
                          alt={clinic.title}
                          containerClassName="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shrink-0"
                          className="w-full h-full object-cover"
                        />
                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors text-sm sm:text-base truncate">
                            {clinic.title}
                          </h3>
                          <p className="text-xs text-gray-500 font-medium truncate">
                            {clinic.subtitle}
                          </p>
                          <div className="flex items-center text-xs text-amber-500 mt-1 font-semibold">
                            {clinic.rating}{" "}
                            <Star className="w-3 h-3 fill-current ml-1" />
                          </div>
                        </div>
                      </a>
                    ))}
              </div>
            </div>
          </div>

          {/* ================= EXPLORE SERVICES ================= */}
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

          {/* ================= RECENT PATIENT REVIEWS ================= */}
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

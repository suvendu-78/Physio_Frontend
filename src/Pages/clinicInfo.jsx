import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Star,
  Calendar,
  Award,
  Users,
  Stethoscope,
  Send,
  ArrowLeft,
  CheckCircle2,
  Building,
} from "lucide-react";

// Mock Detailed Clinic Data
const CLINIC_DETAIL_DATA = {
  id: 3,
  name: "Puri Beachside Physiotherapy & Wellness",
  district: "Puri",
  city: "Puri",
  address: "VIP Road, Near Grand Road Crossing, Puri, Odisha - 752001",
  rating: 4.7,
  reviewsCount: 56,
  phone: "+91 98765 99887",
  openingTime: "08:30 AM",
  closingTime: "06:30 PM",
  verified: true,
  startingPrice: "₹450",
  description:
    "Puri Beachside Physiotherapy & Wellness center is a state-of-the-art rehabilitation unit offering specialized sports injuries recovery, orthopedic care, and neuro-physiotherapy under certified clinical practitioners.",
  gallery: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80",
  ],
  departments: [
    { name: "Orthopedic Rehab", icon: "🦴" },
    { name: "Neurological Physio", icon: "🧠" },
    { name: "Sports Rehabilitation", icon: "⚽" },
    { name: "Pediatric Therapy", icon: "🧸" },
    { name: "Cardiopulmonary Care", icon: "🫀" },
  ],
  doctors: [
    {
      id: 101,
      name: "Dr. Ansuman Mishra (PT)",
      specialty: "Senior Orthopedic Physiotherapist",
      experience: "12+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
      achievements: [
        "Gold Medalist in BPT (Utkal University)",
        "Certified Manual Therapist (Maitland, UK)",
        "Ex-Consultant at AIIMS Bhubaneswar",
      ],
    },
    {
      id: 102,
      name: "Dr. Sunita Pattnaik (PT)",
      specialty: "Neuro & Pediatric Specialist",
      experience: "9+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1594824813566-78a0328905b7?w=400&auto=format&fit=crop&q=80",
      achievements: [
        "MPT in Neurological Disorders",
        "Published 8 Research Papers on Stroke Rehabilitation",
        "Certified Bobath Technique Practitioner",
      ],
    },
    {
      id: 103,
      name: "Dr. Rajesh Mohanty (PT)",
      specialty: "Sports Injury & Biomechanics Specialist",
      experience: "7+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80",
      achievements: [
        "Official Physiotherapist for Odisha State Cricket Team",
        "Certified Kinesio Taping Expert",
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      author: "Rohan Samal",
      rating: 5,
      date: "12 Feb 2026",
      comment:
        "Excellent facility! Dr. Ansuman helped me recover from post-ACL surgery within 6 weeks. Highly recommended clinic in Puri.",
    },
    {
      id: 2,
      author: "Priyanka Jena",
      rating: 4,
      date: "04 Jan 2026",
      comment:
        "Very clean and modern equipment. Staff is extremely polite and professional.",
    },
  ],
};

const ClinicDetail = () => {
  const { id } = useParams(); // Use this ID to fetch real clinic data from backend
  const clinic = CLINIC_DETAIL_DATA;

  const [activeImage, setActiveImage] = useState(clinic.gallery[0]);
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Connect to backend API: POST /api/clinics/:id/reviews
    console.log({ rating: newRating, comment: newComment });
    setNewComment("");
  };

  return (
    <div className="w-full bg-[#edf7f6] text-gray-800 font-sans min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* TOP BACK BUTTON */}
        <NavLink
          to="/clinics"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a4f48] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Clinics
        </NavLink>

        {/* CLINIC HEADER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col lg:flex-row justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              {clinic.verified && (
                <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                  <ShieldCheck className="w-4 h-4 text-[#0a4f48]" /> Verified
                  Partner
                </span>
              )}
              <div className="flex items-center text-sm font-semibold text-amber-500">
                <Star className="w-4 h-4 fill-current mr-1" />
                <span>{clinic.rating}</span>
                <span className="text-gray-400 font-normal text-xs ml-1">
                  ({clinic.reviewsCount} Reviews)
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {clinic.name}
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#0a4f48] shrink-0" />
              <span>{clinic.address}</span>
            </p>

            <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
              <span className="flex items-center gap-1.5 font-semibold">
                <Clock className="w-4 h-4 text-amber-500" />
                {clinic.openingTime} - {clinic.closingTime}
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <Phone className="w-4 h-4 text-[#0a4f48]" />
                {clinic.phone}
              </span>
            </div>
          </div>

          {/* QUICK BOOK ACTION BOX */}
          <div className="lg:w-72 bg-[#edf7f6] p-5 rounded-2xl border border-teal-100 flex flex-col justify-between shrink-0">
            <div>
              <span className="text-xs font-bold uppercase text-gray-400 block">
                Starting Consultation Fee
              </span>
              <span className="text-2xl font-extrabold text-[#0a4f48]">
                {clinic.startingPrice}
              </span>
            </div>

            <NavLink to="/bookingpage" className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </NavLink>
          </div>
        </div>

        {/* PHOTO GALLERY (MIN 5 PHOTOS) */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#0a4f48]" /> Clinic Overview &
            Infrastructure
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Featured Photo */}
            <div className="lg:col-span-2 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
              <img
                src={activeImage}
                alt={clinic.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* 4 Thumbnails Grid */}
            <div className="grid grid-cols-2 gap-3 h-72 sm:h-96">
              {clinic.gallery.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                    activeImage === imgUrl
                      ? "border-[#0a4f48] scale-[0.98]"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="clinic sample"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DEPARTMENTS SECTION */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#0a4f48]" /> Active
            Departments ({clinic.departments.length})
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {clinic.departments.map((dept, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-[#edf7f6] rounded-2xl border border-teal-100/60 text-center hover:border-teal-300 transition-colors"
              >
                <span className="text-2xl mb-1">{dept.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-gray-800">
                  {dept.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DOCTORS & SPECIALISTS SECTION */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#0a4f48]" /> Specialist Doctors (
              {clinic.doctors.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinic.doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-[#edf7f6]/40 rounded-2xl p-5 border border-slate-200/80 hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#0a4f48]"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-[#0a4f48] font-semibold">
                        {doctor.specialty}
                      </p>
                      <span className="text-[11px] text-gray-500 font-medium block">
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Achievements */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Key Achievements
                    </span>
                    {doctor.achievements.map((item, i) => (
                      <p
                        key={i}
                        className="text-xs text-gray-600 flex items-start gap-1.5"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <NavLink to="/bookingpage" className="mt-5">
                  <button className="w-full bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold py-2 rounded-xl transition-all cursor-pointer">
                    Book Consultation
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS & COMMENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Review Submission Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Leave a Review
            </h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">
                  Select Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setNewRating(star)}
                      className={`w-6 h-6 cursor-pointer transition-colors ${
                        star <= newRating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">
                  Your Comment
                </label>
                <textarea
                  rows="4"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your experience regarding therapy quality and clinic staff..."
                  className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0a4f48]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Review</span>
              </button>
            </form>
          </div>

          {/* User Reviews List */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Patient Experiences & Ratings
            </h3>

            <div className="space-y-4">
              {clinic.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-800">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] text-gray-400">
                        {rev.date}
                      </span>
                    </div>
                    <div className="flex text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;

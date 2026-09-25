import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  Building,
  Mail,
} from "lucide-react";

const ClinicDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const passedClinic = location.state?.clinic;

  const [clinic, setClinic] = useState(passedClinic || null);
  const [loading, setLoading] = useState(!passedClinic);

  const [activeImage, setActiveImage] = useState("");

  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState("");

  /*
   * If clinic data is already passed from Explore,
   * use that data.
   *
   * If the page is opened directly, fetch all approved
   * clinics and try to find the clinic using the ID.
   */
  useEffect(() => {
    const fetchClinic = async () => {
      try {
        if (passedClinic) {
          setClinic(passedClinic);

          const firstPhoto =
            passedClinic.photos?.[0]?.url ||
            passedClinic.photos?.[0]?.secure_url ||
            (typeof passedClinic.photos?.[0] === "string"
              ? passedClinic.photos[0]
              : "");

          setActiveImage(firstPhoto || "");

          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://physio-backend-sand.vercel.app/api/v1/user/findclinic",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch clinic");
        }

        const result = await response.json();

        console.log("CLINIC DETAIL API RESPONSE:", result);

        const clinics = Array.isArray(result?.data) ? result.data : [];

        /*
         * If Explore page sends clinicId, use it.
         */
        const clinicId =
          location.state?.clinicId ||
          new URLSearchParams(window.location.search).get("id");

        let selectedClinic = null;

        if (clinicId) {
          selectedClinic = clinics.find(
            (item) => String(item._id) === String(clinicId),
          );
        }

        /*
         * If there is only one clinic and no ID,
         * use the first one.
         */
        if (!selectedClinic && clinics.length === 1) {
          selectedClinic = clinics[0];
        }

        setClinic(selectedClinic);

        if (selectedClinic) {
          const firstPhoto =
            selectedClinic.photos?.[0]?.url ||
            selectedClinic.photos?.[0]?.secure_url ||
            (typeof selectedClinic.photos?.[0] === "string"
              ? selectedClinic.photos[0]
              : "");

          setActiveImage(firstPhoto || "");
        }
      } catch (error) {
        console.error("CLINIC DETAIL FETCH ERROR:", error);

        setClinic(null);
      } finally {
        setLoading(false);
      }
    };

    fetchClinic();
  }, [passedClinic, location.state]);

  /*
   * Format working hours.
   *
   * Backend example:
   * {
   *   day: "Monday",
   *   enabled: true,
   *   open: "09:00 AM",
   *   close: "06:00 PM"
   * }
   */
  const formatWorkingHours = (workingHours) => {
    if (!Array.isArray(workingHours) || workingHours.length === 0) {
      return [];
    }

    return workingHours;
  };

  /*
   * Submit review.
   *
   * Backend review API is not provided yet,
   * so currently this only prevents page reload.
   */
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    console.log("Review:", {
      clinicId: clinic?._id,
      rating: newRating,
      comment: newComment,
    });

    setNewComment("");
  };

  /*
   * Loading
   */
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center">
        <div className="bg-white rounded-2xl px-8 py-6 shadow-md text-center">
          <div className="w-10 h-10 border-4 border-teal-100 border-t-[#0a4f48] rounded-full animate-spin mx-auto mb-4" />

          <p className="text-sm font-semibold text-gray-600">
            Loading clinic details...
          </p>
        </div>
      </div>
    );
  }

  /*
   * No clinic data
   */
  if (!clinic) {
    return (
      <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 text-center shadow-md border border-slate-100 max-w-md w-full">
          <Building className="w-14 h-14 text-slate-300 mx-auto mb-4" />

          <h2 className="text-xl font-bold text-gray-800">
            No Service Available, Sorry
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Clinic information is not available.
          </p>

          <button
            onClick={() => navigate("/clinics")}
            className="mt-5 bg-[#0a4f48] hover:bg-[#063b36] text-white px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            Back to Clinics
          </button>
        </div>
      </div>
    );
  }

  /*
   * REAL CLINIC DATA
   */
  const clinicName = clinic.clinicName || clinic.name || "Clinic";

  const clinicAddress =
    clinic.address || clinic.clinicAddress || "Address not available";

  const clinicCity = clinic.city || clinic.location?.city || "";

  const clinicState = clinic.state || clinic.location?.state || "";

  const clinicPincode = clinic.pincode || clinic.location?.pincode || "";

  const clinicPhone = clinic.phone || "Phone not available";

  const clinicEmail = clinic.email || "Email not available";

  const clinicType = clinic.clinicType || "Physiotherapy Clinic";

  const clinicRating = clinic.rating ?? clinic.averageRating ?? 0;

  const reviewsCount = clinic.reviewsCount ?? clinic.totalReviews ?? 0;

  const rawStartingPrice =
    clinic.startingPrice ?? clinic.consultationFee ?? clinic.fee;

  const startingPrice =
    typeof rawStartingPrice === "object" && rawStartingPrice !== null
      ? rawStartingPrice.amount
        ? `₹${rawStartingPrice.amount}`
        : "Not available"
      : (rawStartingPrice ?? "Not available");

  const gallery = Array.isArray(clinic.photos)
    ? clinic.photos
        .map((photo) => {
          if (typeof photo === "string") {
            return photo;
          }

          return photo?.url || photo?.secure_url || "";
        })
        .filter(Boolean)
    : [];

  const workingHours = formatWorkingHours(clinic.workingHours);

  /*
   * Only use real departments if backend provides them.
   */
  const departments = Array.isArray(clinic.departments)
    ? clinic.departments
    : [];

  /*
   * Only use real doctors if backend provides them.
   */
  const doctors = Array.isArray(clinic.doctors) ? clinic.doctors : [];

  /*
   * Only use real reviews if backend provides them.
   */
  const reviews = Array.isArray(clinic.reviews) ? clinic.reviews : [];

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
            {/* VERIFIED + RATING */}
            <div className="flex items-center gap-3 flex-wrap">
              {clinic.verificationStatus === "approved" && (
                <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                  <ShieldCheck className="w-4 h-4 text-[#0a4f48]" />
                  Verified Partner
                </span>
              )}

              <div className="flex items-center text-sm font-semibold text-amber-500">
                <Star className="w-4 h-4 fill-current mr-1" />

                <span>{clinicRating}</span>

                <span className="text-gray-400 font-normal text-xs ml-1">
                  ({reviewsCount} Reviews)
                </span>
              </div>
            </div>

            {/* CLINIC NAME */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {clinicName}
            </h1>

            {/* CLINIC TYPE */}
            <p className="text-xs sm:text-sm text-[#0a4f48] font-semibold">
              {clinicType}
            </p>

            {/* ADDRESS */}
            <p className="text-xs sm:text-sm text-gray-500 flex items-start gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#0a4f48] shrink-0 mt-0.5" />

              <span>
                {clinicAddress}

                {clinicCity ? `, ${clinicCity}` : ""}

                {clinicState ? `, ${clinicState}` : ""}

                {clinicPincode ? ` - ${clinicPincode}` : ""}
              </span>
            </p>

            {/* PHONE + EMAIL */}
            <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
              <span className="flex items-center gap-1.5 font-semibold">
                <Phone className="w-4 h-4 text-[#0a4f48]" />

                {clinicPhone}
              </span>

              <span className="flex items-center gap-1.5 font-semibold">
                <Mail className="w-4 h-4 text-[#0a4f48]" />

                {clinicEmail}
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
                {startingPrice}
              </span>
            </div>

            <NavLink to="/bookingpage" state={{ clinic }} className="mt-4">
              <button className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
                <Calendar className="w-4 h-4" />

                <span>Book Appointment</span>
              </button>
            </NavLink>
          </div>
        </div>

        {/* PHOTO GALLERY */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#0a4f48]" />
            Clinic Overview & Infrastructure
          </h2>

          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* MAIN PHOTO */}
              <div className="lg:col-span-2 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={activeImage || gallery[0]}
                  alt={clinicName}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-2 gap-3 h-72 sm:h-96">
                {gallery.slice(0, 4).map((imgUrl, index) => (
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
                      alt={`${clinicName} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-72 sm:h-96 rounded-2xl bg-slate-100 flex items-center justify-center text-gray-400">
              No Clinic Photos Available
            </div>
          )}
        </div>

        {/* WORKING HOURS */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#0a4f48]" />
            Working Hours
          </h2>

          {workingHours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {workingHours.map((item, index) => (
                <div
                  key={item?._id || index}
                  className="bg-[#edf7f6] rounded-2xl border border-teal-100/60 p-4 text-center"
                >
                  <p className="text-xs font-bold text-gray-800">
                    {item?.day || "Day"}
                  </p>

                  <div className="mt-2">
                    {item?.enabled ? (
                      <>
                        <p className="text-xs font-semibold text-[#0a4f48]">
                          {item?.open || "N/A"}
                        </p>

                        <p className="text-[10px] text-gray-400">to</p>

                        <p className="text-xs font-semibold text-[#0a4f48]">
                          {item?.close || "N/A"}
                        </p>
                      </>
                    ) : (
                      <p className="text-xs font-semibold text-red-500">
                        Closed
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Working hours not available.
            </p>
          )}
        </div>

        {/* DEPARTMENTS SECTION */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#0a4f48]" />
            Active Departments ({departments.length})
          </h2>

          {departments.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-[#edf7f6] rounded-2xl border border-teal-100/60 text-center hover:border-teal-300 transition-colors"
                >
                  <span className="text-2xl mb-1">{dept.icon || "🏥"}</span>

                  <span className="text-xs sm:text-sm font-bold text-gray-800">
                    {dept.name || dept.title || "Department"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-2" />

              <p className="text-sm text-gray-500">
                No department information available.
              </p>
            </div>
          )}
        </div>

        {/* DOCTORS & SPECIALISTS */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#0a4f48]" />
              Specialist Doctors ({doctors.length})
            </h2>
          </div>

          {doctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => {
                const doctorImage =
                  doctor.image ||
                  doctor.profilePhoto?.url ||
                  doctor.profilePhoto?.secure_url ||
                  "";

                const doctorName = doctor.name || doctor.fullName || "Doctor";

                return (
                  <div
                    key={doctor._id || doctor.id || index}
                    className="bg-[#edf7f6]/40 rounded-2xl p-5 border border-slate-200/80 hover:border-teal-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        {doctorImage ? (
                          <img
                            src={doctorImage}
                            alt={doctorName}
                            className="w-16 h-16 rounded-full object-cover border-2 border-[#0a4f48]"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-[#0a4f48] flex items-center justify-center">
                            <Users className="w-7 h-7 text-slate-400" />
                          </div>
                        )}

                        <div>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                            {doctorName}
                          </h3>

                          <p className="text-xs text-[#0a4f48] font-semibold">
                            {doctor.specialty ||
                              doctor.specialization ||
                              "Physiotherapist"}
                          </p>

                          <span className="text-[11px] text-gray-500 font-medium block">
                            {doctor.experience || "Experience not available"}
                          </span>
                        </div>
                      </div>

                      {/* ACHIEVEMENTS */}
                      {Array.isArray(doctor.achievements) &&
                        doctor.achievements.length > 0 && (
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

                                <span>
                                  {typeof item === "string"
                                    ? item
                                    : item?.name || item?.title || ""}
                                </span>
                              </p>
                            ))}
                          </div>
                        )}
                    </div>

                    <NavLink
                      to="/bookingpage"
                      state={{
                        clinic,
                        doctor,
                      }}
                      className="mt-5"
                    >
                      <button className="w-full bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold py-2 rounded-xl transition-all cursor-pointer">
                        Book Consultation
                      </button>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />

              <p className="text-sm text-gray-500">
                No specialist doctor information available.
              </p>
            </div>
          )}
        </div>

        {/* REVIEWS & COMMENT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* REVIEW FORM */}
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

          {/* USER REVIEWS */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
            <h3 className="text-base font-bold text-gray-900">
              Patient Experiences & Ratings
            </h3>

            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((rev, index) => (
                  <div
                    key={rev._id || rev.id || index}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-800">
                          {rev.author || rev.name || rev.userName || "Patient"}
                        </h4>

                        <span className="text-[10px] text-gray-400">
                          {rev.date || rev.createdAt || ""}
                        </span>
                      </div>

                      <div className="flex text-amber-400">
                        {Array.from({
                          length: Number(rev.rating) || 0,
                        }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 font-medium">
                      {rev.comment || rev.message || ""}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center">
                <Star className="w-10 h-10 text-slate-300 mx-auto mb-2" />

                <p className="text-sm text-gray-500">
                  No reviews available for this clinic.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;

// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Clock,
//   Phone,
//   ShieldCheck,
//   Star,
//   Calendar,
//   Award,
//   Users,
//   Stethoscope,
//   Send,
//   ArrowLeft,
//   Building,
//   Mail,
// } from "lucide-react";

// const ClinicDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const passedClinic = location.state?.clinic;

//   const [clinic, setClinic] = useState(passedClinic || null);
//   const [loading, setLoading] = useState(!passedClinic);
//   const [doctors, setDoctors] = useState([]);
//   const [doctorLoading, setDoctorLoading] = useState(false);

//   const [activeImage, setActiveImage] = useState("");
//   const [newRating, setNewRating] = useState(5);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchClinic = async () => {
//       try {
//         if (passedClinic) {
//           setClinic(passedClinic);

//           const firstPhoto =
//             passedClinic.photos?.[0]?.url ||
//             passedClinic.photos?.[0]?.secure_url ||
//             (typeof passedClinic.photos?.[0] === "string"
//               ? passedClinic.photos[0]
//               : "");

//           setActiveImage(firstPhoto || "");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "http://localhost:8000/api/v1/user/findclinic",
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch clinic");
//         }

//         const result = await response.json();

//         console.log("CLINIC DETAIL API RESPONSE:", result);

//         const clinics = Array.isArray(result?.data) ? result.data : [];

//         const clinicId =
//           location.state?.clinicId ||
//           new URLSearchParams(window.location.search).get("id");

//         let selectedClinic = null;

//         if (clinicId) {
//           selectedClinic = clinics.find(
//             (item) => String(item._id) === String(clinicId),
//           );
//         }

//         if (!selectedClinic && clinics.length === 1) {
//           selectedClinic = clinics[0];
//         }

//         setClinic(selectedClinic);

//         if (selectedClinic) {
//           const firstPhoto =
//             selectedClinic.photos?.[0]?.url ||
//             selectedClinic.photos?.[0]?.secure_url ||
//             (typeof selectedClinic.photos?.[0] === "string"
//               ? selectedClinic.photos[0]
//               : "");

//           setActiveImage(firstPhoto || "");
//         }
//       } catch (error) {
//         console.error("CLINIC DETAIL FETCH ERROR:", error);
//         setClinic(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClinic();
//   }, [passedClinic, location.state]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       if (!clinic?.clinicName) {
//         setDoctors([]);
//         return;
//       }

//       try {
//         setDoctorLoading(true);

//         const response = await fetch(
//           `http://localhost:8000/api/v1/user/findDoctorsByClinic?clinicName=${encodeURIComponent(
//             clinic.clinicName,
//           )}`,
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch doctors");
//         }

//         const result = await response.json();

//         console.log("DOCTOR API RESPONSE:", result);

//         if (Array.isArray(result?.data)) {
//           setDoctors(result.data);
//         } else {
//           setDoctors([]);
//         }
//       } catch (error) {
//         console.error("DOCTOR FETCH ERROR:", error);
//         setDoctors([]);
//       } finally {
//         setDoctorLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, [clinic?.clinicName]);

//   const formatWorkingHours = (workingHours) => {
//     if (!Array.isArray(workingHours) || workingHours.length === 0) {
//       return [];
//     }

//     return workingHours;
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();

//     console.log("Review:", {
//       clinicId: clinic?._id,
//       rating: newRating,
//       comment: newComment,
//     });

//     setNewComment("");
//   };

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center">
//         <div className="bg-white rounded-2xl px-8 py-6 shadow-md text-center">
//           <div className="w-10 h-10 border-4 border-teal-100 border-t-[#0a4f48] rounded-full animate-spin mx-auto mb-4" />

//           <p className="text-sm font-semibold text-gray-600">
//             Loading clinic details...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!clinic) {
//     return (
//       <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center px-4">
//         <div className="bg-white rounded-3xl p-8 text-center shadow-md border border-slate-100 max-w-md w-full">
//           <Building className="w-14 h-14 text-slate-300 mx-auto mb-4" />

//           <h2 className="text-xl font-bold text-gray-800">
//             No Service Available, Sorry
//           </h2>

//           <p className="text-sm text-gray-500 mt-2">
//             Clinic information is not available.
//           </p>

//           <button
//             onClick={() => navigate("/clinics")}
//             className="mt-5 bg-[#0a4f48] hover:bg-[#063b36] text-white px-5 py-2.5 rounded-xl text-sm font-semibold"
//           >
//             Back to Clinics
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const clinicName = clinic.clinicName || clinic.name || "Clinic";

//   const clinicAddress =
//     clinic.address || clinic.clinicAddress || "Address not available";

//   const clinicCity = clinic.city || clinic.location?.city || "";

//   const clinicState = clinic.state || clinic.location?.state || "";

//   const clinicPincode = clinic.pincode || clinic.location?.pincode || "";

//   const clinicPhone = clinic.phone || "Phone not available";

//   const clinicEmail = clinic.email || "Email not available";

//   const clinicType = clinic.clinicType || "Physiotherapy Clinic";

//   const clinicRating = clinic.rating ?? clinic.averageRating ?? 0;

//   const reviewsCount = clinic.reviewsCount ?? clinic.totalReviews ?? 0;

//   const rawStartingPrice =
//     clinic.startingPrice ?? clinic.consultationFee ?? clinic.fee;

//   const startingPrice =
//     typeof rawStartingPrice === "object" && rawStartingPrice !== null
//       ? rawStartingPrice.amount
//         ? `₹${rawStartingPrice.amount}`
//         : "Not available"
//       : (rawStartingPrice ?? "Not available");

//   const gallery = Array.isArray(clinic.photos)
//     ? clinic.photos
//         .map((photo) => {
//           if (typeof photo === "string") {
//             return photo;
//           }

//           return photo?.url || photo?.secure_url || "";
//         })
//         .filter(Boolean)
//     : [];

//   const workingHours = formatWorkingHours(clinic.workingHours);

//   const departments = Array.isArray(clinic.departments)
//     ? clinic.departments
//     : [];

//   const reviews = Array.isArray(clinic.reviews) ? clinic.reviews : [];

//   return (
//     <div className="w-full bg-[#edf7f6] text-gray-800 font-sans min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto space-y-8">
//         <NavLink
//           to="/clinics"
//           className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a4f48] hover:underline"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Clinics
//         </NavLink>

//         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col lg:flex-row justify-between gap-6">
//           <div className="space-y-3">
//             <div className="flex items-center gap-3 flex-wrap">
//               {clinic.verificationStatus === "approved" && (
//                 <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
//                   <ShieldCheck className="w-4 h-4 text-[#0a4f48]" />
//                   Verified Partner
//                 </span>
//               )}

//               <div className="flex items-center text-sm font-semibold text-amber-500">
//                 <Star className="w-4 h-4 fill-current mr-1" />

//                 <span>{clinicRating}</span>

//                 <span className="text-gray-400 font-normal text-xs ml-1">
//                   ({reviewsCount} Reviews)
//                 </span>
//               </div>
//             </div>

//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
//               {clinicName}
//             </h1>

//             <p className="text-xs sm:text-sm text-[#0a4f48] font-semibold">
//               {clinicType}
//             </p>

//             <p className="text-xs sm:text-sm text-gray-500 flex items-start gap-1.5 font-medium">
//               <MapPin className="w-4 h-4 text-[#0a4f48] shrink-0 mt-0.5" />

//               <span>
//                 {clinicAddress}
//                 {clinicCity ? `, ${clinicCity}` : ""}
//                 {clinicState ? `, ${clinicState}` : ""}
//                 {clinicPincode ? ` - ${clinicPincode}` : ""}
//               </span>
//             </p>

//             <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
//               <span className="flex items-center gap-1.5 font-semibold">
//                 <Phone className="w-4 h-4 text-[#0a4f48]" />
//                 {clinicPhone}
//               </span>

//               <span className="flex items-center gap-1.5 font-semibold">
//                 <Mail className="w-4 h-4 text-[#0a4f48]" />
//                 {clinicEmail}
//               </span>
//             </div>
//           </div>

//           <div className="lg:w-72 bg-[#edf7f6] p-5 rounded-2xl border border-teal-100 flex flex-col justify-between shrink-0">
//             <div>
//               <span className="text-xs font-bold uppercase text-gray-400 block">
//                 Starting Consultation Fee
//               </span>

//               <span className="text-2xl font-extrabold text-[#0a4f48]">
//                 {startingPrice}
//               </span>
//             </div>

//             <NavLink to="/bookingpage" state={{ clinic }} className="mt-4">
//               <button className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
//                 <Calendar className="w-4 h-4" />
//                 <span>Book Appointment</span>
//               </button>
//             </NavLink>
//           </div>
//         </div>

//         <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Building className="w-5 h-5 text-[#0a4f48]" />
//             Clinic Overview & Infrastructure
//           </h2>

//           {gallery.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//               <div className="lg:col-span-2 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
//                 <img
//                   src={activeImage || gallery[0]}
//                   alt={clinicName}
//                   className="w-full h-full object-cover transition-all duration-300"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-3 h-72 sm:h-96">
//                 {gallery.slice(0, 4).map((imgUrl, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setActiveImage(imgUrl)}
//                     className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
//                       activeImage === imgUrl
//                         ? "border-[#0a4f48] scale-[0.98]"
//                         : "border-transparent opacity-80 hover:opacity-100"
//                     }`}
//                   >
//                     <img
//                       src={imgUrl}
//                       alt={`${clinicName} ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="h-72 sm:h-96 rounded-2xl bg-slate-100 flex items-center justify-center text-gray-400">
//               No Clinic Photos Available
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Clock className="w-5 h-5 text-[#0a4f48]" />
//             Working Hours
//           </h2>

//           {workingHours.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
//               {workingHours.map((item, index) => (
//                 <div
//                   key={item?._id || index}
//                   className="bg-[#edf7f6] rounded-2xl border border-teal-100/60 p-4 text-center"
//                 >
//                   <p className="text-xs font-bold text-gray-800">
//                     {item?.day || "Day"}
//                   </p>

//                   <div className="mt-2">
//                     {item?.enabled ? (
//                       <>
//                         <p className="text-xs font-semibold text-[#0a4f48]">
//                           {item?.open || "N/A"}
//                         </p>

//                         <p className="text-[10px] text-gray-400">to</p>

//                         <p className="text-xs font-semibold text-[#0a4f48]">
//                           {item?.close || "N/A"}
//                         </p>
//                       </>
//                     ) : (
//                       <p className="text-xs font-semibold text-red-500">
//                         Closed
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">
//               Working hours not available.
//             </p>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Stethoscope className="w-5 h-5 text-[#0a4f48]" />
//             Active Departments ({departments.length})
//           </h2>

//           {departments.length > 0 ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//               {departments.map((dept, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center p-4 bg-[#edf7f6] rounded-2xl border border-teal-100/60 text-center hover:border-teal-300 transition-colors"
//                 >
//                   <span className="text-2xl mb-1">{dept.icon || "🏥"}</span>

//                   <span className="text-xs sm:text-sm font-bold text-gray-800">
//                     {dept.name || dept.title || "Department"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="py-8 text-center">
//               <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-2" />

//               <p className="text-sm text-gray-500">
//                 No department information available.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
//               <Users className="w-5 h-5 text-[#0a4f48]" />
//               Featured Physiotherapists ({doctors.length})
//             </h2>
//           </div>

//           {doctorLoading ? (
//             <div className="py-10 flex justify-center">
//               <div className="w-10 h-10 border-4 border-teal-100 border-t-[#0a4f48] rounded-full animate-spin" />
//             </div>
//           ) : doctors.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {doctors.map((doctor, index) => {
//                 const doctorImage =
//                   doctor.image ||
//                   doctor.profilePhoto?.url ||
//                   doctor.profilePhoto?.secure_url ||
//                   doctor.profileImage?.url ||
//                   doctor.profileImage?.secure_url ||
//                   doctor.photo?.url ||
//                   doctor.photo?.secure_url ||
//                   (typeof doctor.profilePhoto === "string"
//                     ? doctor.profilePhoto
//                     : "") ||
//                   (typeof doctor.profileImage === "string"
//                     ? doctor.profileImage
//                     : "") ||
//                   (typeof doctor.photo === "string" ? doctor.photo : "");

//                 const doctorName =
//                   doctor.name ||
//                   doctor.fullName ||
//                   doctor.doctorName ||
//                   "Doctor";

//                 const doctorSpecialty =
//                   doctor.specialty ||
//                   doctor.specialization ||
//                   doctor.speciality ||
//                   "Physiotherapist";

//                 const doctorExperience =
//                   doctor.experience ||
//                   doctor.experienceYears ||
//                   "Experience not available";

//                 const doctorRating = doctor.rating ?? doctor.averageRating ?? 0;

//                 return (
//                   <div
//                     key={doctor._id || doctor.id || index}
//                     className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
//                   >
//                     <div className="p-4">
//                       {doctorImage ? (
//                         <img
//                           src={doctorImage}
//                           alt={doctorName}
//                           className="w-full h-56 sm:h-64 object-cover rounded-xl border border-slate-200"
//                         />
//                       ) : (
//                         <div className="w-full h-56 sm:h-64 rounded-xl bg-slate-100 flex items-center justify-center">
//                           <Users className="w-16 h-16 text-slate-300" />
//                         </div>
//                       )}

//                       <div className="pt-4">
//                         <h3 className="font-bold text-[#008c86] text-base sm:text-lg">
//                           {doctorName}
//                         </h3>

//                         <div className="flex items-center gap-1 mt-1 text-amber-500">
//                           <span className="text-sm text-gray-700">
//                             {doctorRating}
//                           </span>
//                           <Star className="w-4 h-4 fill-current" />
//                         </div>

//                         <p className="text-sm text-gray-600 font-medium mt-2">
//                           {doctorSpecialty}
//                         </p>

//                         <p className="text-xs text-gray-500 mt-1">
//                           {doctorExperience}
//                         </p>

//                         {Array.isArray(doctor.achievements) &&
//                           doctor.achievements.length > 0 && (
//                             <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
//                               {doctor.achievements
//                                 .slice(0, 3)
//                                 .map((item, i) => (
//                                   <p
//                                     key={i}
//                                     className="text-xs text-gray-600 flex items-start gap-1.5"
//                                   >
//                                     <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />

//                                     <span>
//                                       {typeof item === "string"
//                                         ? item
//                                         : item?.name || item?.title || ""}
//                                     </span>
//                                   </p>
//                                 ))}
//                             </div>
//                           )}
//                       </div>
//                     </div>

//                     <div className="px-4 pb-4">
//                       <NavLink
//                         to="/bookingpage"
//                         state={{
//                           clinic,
//                           doctor,
//                         }}
//                       >
//                         <button className="w-full bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer">
//                           Book Consultation
//                         </button>
//                       </NavLink>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="py-12 text-center bg-[#edf7f6] rounded-2xl border border-teal-100">
//               <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />

//               <h3 className="text-lg font-bold text-gray-800">
//                 Sorry, No Doctor Data Available
//               </h3>

//               <p className="text-sm text-gray-500 mt-1">
//                 No verified physiotherapist is available for this clinic.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//             <h3 className="text-base font-bold text-gray-900">
//               Leave a Review
//             </h3>

//             <form onSubmit={handleReviewSubmit} className="space-y-4">
//               <div>
//                 <label className="text-xs font-semibold text-gray-600 block mb-1">
//                   Select Rating
//                 </label>

//                 <div className="flex gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       onClick={() => setNewRating(star)}
//                       className={`w-6 h-6 cursor-pointer transition-colors ${
//                         star <= newRating
//                           ? "text-amber-400 fill-amber-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-600 block mb-1">
//                   Your Comment
//                 </label>

//                 <textarea
//                   rows="4"
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Share your experience regarding therapy quality and clinic staff..."
//                   className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0a4f48]"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
//               >
//                 <Send className="w-3.5 h-3.5" />
//                 <span>Submit Review</span>
//               </button>
//             </form>
//           </div>

//           <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//             <h3 className="text-base font-bold text-gray-900">
//               Patient Experiences & Ratings
//             </h3>

//             {reviews.length > 0 ? (
//               <div className="space-y-4">
//                 {reviews.map((rev, index) => (
//                   <div
//                     key={rev._id || rev.id || index}
//                     className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="font-bold text-xs sm:text-sm text-gray-800">
//                           {rev.author || rev.name || rev.userName || "Patient"}
//                         </h4>

//                         <span className="text-[10px] text-gray-400">
//                           {rev.date || rev.createdAt || ""}
//                         </span>
//                       </div>

//                       <div className="flex text-amber-400">
//                         {Array.from({
//                           length: Number(rev.rating) || 0,
//                         }).map((_, i) => (
//                           <Star key={i} className="w-3.5 h-3.5 fill-current" />
//                         ))}
//                       </div>
//                     </div>

//                     <p className="text-xs text-gray-600 font-medium">
//                       {rev.comment || rev.message || ""}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="py-10 text-center">
//                 <Star className="w-10 h-10 text-slate-300 mx-auto mb-2" />

//                 <p className="text-sm text-gray-500">
//                   No reviews available for this clinic.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClinicDetail;

// import React, { useEffect, useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Clock,
//   Phone,
//   ShieldCheck,
//   Star,
//   Calendar,
//   Award,
//   Users,
//   Stethoscope,
//   Send,
//   ArrowLeft,
//   Building,
//   Mail,
// } from "lucide-react";

// const ClinicDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const passedClinic = location.state?.clinic;

//   const [clinic, setClinic] = useState(passedClinic || null);
//   const [loading, setLoading] = useState(!passedClinic);
//   const [doctors, setDoctors] = useState([]);
//   const [doctorLoading, setDoctorLoading] = useState(false);

//   const [activeImage, setActiveImage] = useState("");
//   const [newRating, setNewRating] = useState(5);
//   const [newComment, setNewComment] = useState("");
//   const [popup, setPopup] = useState({
//     show: false,
//     message: "",
//     type: "info",
//   });

//   useEffect(() => {
//     const fetchClinic = async () => {
//       try {
//         if (passedClinic) {
//           setClinic(passedClinic);

//           const firstPhoto =
//             passedClinic.photos?.[0]?.url ||
//             passedClinic.photos?.[0]?.secure_url ||
//             (typeof passedClinic.photos?.[0] === "string"
//               ? passedClinic.photos[0]
//               : "");

//           setActiveImage(firstPhoto || "");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           "http://localhost:8000/api/v1/user/findclinic",
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch clinic");
//         }

//         const result = await response.json();

//         console.log("CLINIC DETAIL API RESPONSE:", result);

//         const clinics = Array.isArray(result?.data) ? result.data : [];

//         const clinicId =
//           location.state?.clinicId ||
//           new URLSearchParams(window.location.search).get("id");

//         let selectedClinic = null;

//         if (clinicId) {
//           selectedClinic = clinics.find(
//             (item) => String(item._id) === String(clinicId),
//           );
//         }

//         if (!selectedClinic && clinics.length === 1) {
//           selectedClinic = clinics[0];
//         }

//         setClinic(selectedClinic);

//         if (selectedClinic) {
//           const firstPhoto =
//             selectedClinic.photos?.[0]?.url ||
//             selectedClinic.photos?.[0]?.secure_url ||
//             (typeof selectedClinic.photos?.[0] === "string"
//               ? selectedClinic.photos[0]
//               : "");

//           setActiveImage(firstPhoto || "");
//         }
//       } catch (error) {
//         console.error("CLINIC DETAIL FETCH ERROR:", error);
//         setClinic(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClinic();
//   }, [passedClinic, location.state]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       if (!clinic?.clinicName) {
//         setDoctors([]);
//         return;
//       }

//       try {
//         setDoctorLoading(true);

//         const response = await fetch(
//           `http://localhost:8000/api/v1/user/findDoctorsByClinic?clinicName=${encodeURIComponent(
//             clinic.clinicName,
//           )}`,
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch doctors");
//         }

//         const result = await response.json();

//         console.log("DOCTOR API RESPONSE:", result);

//         if (Array.isArray(result?.data)) {
//           setDoctors(result.data);
//         } else {
//           setDoctors([]);
//         }
//       } catch (error) {
//         console.error("DOCTOR FETCH ERROR:", error);
//         setDoctors([]);
//       } finally {
//         setDoctorLoading(false);
//       }
//     };

//     fetchDoctors();
//   }, [clinic?.clinicName]);

//   const formatWorkingHours = (workingHours) => {
//     if (!Array.isArray(workingHours) || workingHours.length === 0) {
//       return [];
//     }

//     return workingHours;
//   };

//   const handleReviewSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       //   const authResponse = await fetch("http://localhost:8000/api/v1/user/me", {
//       //     method: "GET",
//       //     credentials: "include",
//       //   });

//       //   if (authResponse.status === 401 || authResponse.status === 403) {
//       //     setPopup({
//       //       show: true,
//       //       message: "Please login first to submit review",
//       //       type: "login",
//       //     });
//       //     return;
//       //   }

//       //   if (!authResponse.ok) {
//       //     setPopup({
//       //       show: true,
//       //       message: "Please login first to submit review",
//       //       type: "login",
//       //     });
//       //     return;
//       //   }

//       //   if (!clinic?._id) {
//       //     setPopup({
//       //       show: true,
//       //       message: "Clinic details not available",
//       //       type: "info",
//       //     });
//       //     return;
//       //   }

//       //   if (!newComment.trim()) {
//       //     setPopup({
//       //       show: true,
//       //       message: "Please enter your feedback",
//       //       type: "info",
//       //     });
//       //     return;
//       //   }

//       const response = await fetch(
//         "http://localhost:8000/api/v1/user/feedback",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify({
//             clinicId: clinic._id,
//             Clinicname: clinic.clinicName || clinic.name || "Clinic",
//             star: newRating,
//             message: newComment.trim(),
//           }),
//         },
//       );

//       const result = await response.json();

//       if (response.status === 401 || response.status === 403) {
//         setPopup({
//           show: true,
//           message: "Please login first to submit review",
//           type: "login",
//         });
//         return;
//       }

//       if (!response.ok) {
//         setPopup({
//           show: true,
//           message: result.message || "Failed to submit feedback",
//           type: "info",
//         });
//         return;
//       }

//       setPopup({
//         show: true,
//         message: "Feedback submitted successfully",
//         type: "success",
//       });

//       setClinic((prev) => ({
//         ...prev,
//         reviews: [result.data, ...(prev.reviews || [])],
//       }));

//       setNewRating(5);
//       setNewComment("");
//     } catch (error) {
//       console.error("FEEDBACK ERROR:", error);

//       setPopup({
//         show: true,
//         message: "Something went wrong. Please try again.",
//         type: "info",
//       });
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center">
//         <div className="bg-white rounded-2xl px-8 py-6 shadow-md text-center">
//           <div className="w-10 h-10 border-4 border-teal-100 border-t-[#0a4f48] rounded-full animate-spin mx-auto mb-4" />

//           <p className="text-sm font-semibold text-gray-600">
//             Loading clinic details...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!clinic) {
//     return (
//       <div className="w-full min-h-screen bg-[#edf7f6] flex items-center justify-center px-4">
//         <div className="bg-white rounded-3xl p-8 text-center shadow-md border border-slate-100 max-w-md w-full">
//           <Building className="w-14 h-14 text-slate-300 mx-auto mb-4" />

//           <h2 className="text-xl font-bold text-gray-800">
//             No Service Available, Sorry
//           </h2>

//           <p className="text-sm text-gray-500 mt-2">
//             Clinic information is not available.
//           </p>

//           <button
//             onClick={() => navigate("/clinics")}
//             className="mt-5 bg-[#0a4f48] hover:bg-[#063b36] text-white px-5 py-2.5 rounded-xl text-sm font-semibold"
//           >
//             Back to Clinics
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const clinicName = clinic.clinicName || clinic.name || "Clinic";

//   const clinicAddress =
//     clinic.address || clinic.clinicAddress || "Address not available";

//   const clinicCity = clinic.city || clinic.location?.city || "";

//   const clinicState = clinic.state || clinic.location?.state || "";

//   const clinicPincode = clinic.pincode || clinic.location?.pincode || "";

//   const clinicPhone = clinic.phone || "Phone not available";

//   const clinicEmail = clinic.email || "Email not available";

//   const clinicType = clinic.clinicType || "Physiotherapy Clinic";

//   const clinicRating = clinic.rating ?? clinic.averageRating ?? 0;

//   const reviewsCount = clinic.reviewsCount ?? clinic.totalReviews ?? 0;

//   const rawStartingPrice =
//     clinic.startingPrice ?? clinic.consultationFee ?? clinic.fee;

//   const startingPrice =
//     typeof rawStartingPrice === "object" && rawStartingPrice !== null
//       ? rawStartingPrice.amount
//         ? `₹${rawStartingPrice.amount}`
//         : "Not available"
//       : (rawStartingPrice ?? "Not available");

//   const gallery = Array.isArray(clinic.photos)
//     ? clinic.photos
//         .map((photo) => {
//           if (typeof photo === "string") {
//             return photo;
//           }

//           return photo?.url || photo?.secure_url || "";
//         })
//         .filter(Boolean)
//     : [];

//   const workingHours = formatWorkingHours(clinic.workingHours);

//   const departments = Array.isArray(clinic.departments)
//     ? clinic.departments
//     : [];

//   const reviews = Array.isArray(clinic.reviews) ? clinic.reviews : [];

//   return (
//     <div className="w-full bg-[#edf7f6] text-gray-800 font-sans min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       {popup.show && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
//           <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl">
//             <div className="text-center">
//               <h3 className="text-lg font-bold text-gray-900">
//                 {popup.type === "login"
//                   ? "Login Required"
//                   : popup.type === "success"
//                     ? "Success"
//                     : "Message"}
//               </h3>

//               <p className="text-sm text-gray-500 mt-2">{popup.message}</p>
//             </div>

//             <div className="flex gap-3 mt-6">
//               {popup.type === "login" ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setPopup({
//                         show: false,
//                         message: "",
//                         type: "info",
//                       })
//                     }
//                     className="flex-1 border border-gray-200 text-gray-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => navigate("/login")}
//                     className="flex-1 bg-[#0a4f48] hover:bg-[#063b36] text-white py-2.5 rounded-xl text-sm font-semibold"
//                   >
//                     Login
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setPopup({
//                       show: false,
//                       message: "",
//                       type: "info",
//                     })
//                   }
//                   className="w-full bg-[#0a4f48] hover:bg-[#063b36] text-white py-2.5 rounded-xl text-sm font-semibold"
//                 >
//                   OK
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="max-w-7xl mx-auto space-y-8">
//         <NavLink
//           to="/clinics"
//           className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0a4f48] hover:underline"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back to Clinics
//         </NavLink>

//         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-100 flex flex-col lg:flex-row justify-between gap-6">
//           <div className="space-y-3">
//             <div className="flex items-center gap-3 flex-wrap">
//               {clinic.verificationStatus === "approved" && (
//                 <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wide text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
//                   <ShieldCheck className="w-4 h-4 text-[#0a4f48]" />
//                   Verified Partner
//                 </span>
//               )}

//               <div className="flex items-center text-sm font-semibold text-amber-500">
//                 <Star className="w-4 h-4 fill-current mr-1" />

//                 <span>{clinicRating}</span>

//                 <span className="text-gray-400 font-normal text-xs ml-1">
//                   ({reviewsCount} Reviews)
//                 </span>
//               </div>
//             </div>

//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
//               {clinicName}
//             </h1>

//             <p className="text-xs sm:text-sm text-[#0a4f48] font-semibold">
//               {clinicType}
//             </p>

//             <p className="text-xs sm:text-sm text-gray-500 flex items-start gap-1.5 font-medium">
//               <MapPin className="w-4 h-4 text-[#0a4f48] shrink-0 mt-0.5" />

//               <span>
//                 {clinicAddress}
//                 {clinicCity ? `, ${clinicCity}` : ""}
//                 {clinicState ? `, ${clinicState}` : ""}
//                 {clinicPincode ? ` - ${clinicPincode}` : ""}
//               </span>
//             </p>

//             <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
//               <span className="flex items-center gap-1.5 font-semibold">
//                 <Phone className="w-4 h-4 text-[#0a4f48]" />
//                 {clinicPhone}
//               </span>

//               <span className="flex items-center gap-1.5 font-semibold">
//                 <Mail className="w-4 h-4 text-[#0a4f48]" />
//                 {clinicEmail}
//               </span>
//             </div>
//           </div>

//           <div className="lg:w-72 bg-[#edf7f6] p-5 rounded-2xl border border-teal-100 flex flex-col justify-between shrink-0">
//             <div>
//               <span className="text-xs font-bold uppercase text-gray-400 block">
//                 Starting Consultation Fee
//               </span>

//               <span className="text-2xl font-extrabold text-[#0a4f48]">
//                 {startingPrice}
//               </span>
//             </div>

//             <NavLink to="/bookingpage" state={{ clinic }} className="mt-4">
//               <button className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer">
//                 <Calendar className="w-4 h-4" />
//                 <span>Book Appointment</span>
//               </button>
//             </NavLink>
//           </div>
//         </div>

//         <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Building className="w-5 h-5 text-[#0a4f48]" />
//             Clinic Overview & Infrastructure
//           </h2>

//           {gallery.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//               <div className="lg:col-span-2 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
//                 <img
//                   src={activeImage || gallery[0]}
//                   alt={clinicName}
//                   className="w-full h-full object-cover transition-all duration-300"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-3 h-72 sm:h-96">
//                 {gallery.slice(0, 4).map((imgUrl, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setActiveImage(imgUrl)}
//                     className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
//                       activeImage === imgUrl
//                         ? "border-[#0a4f48] scale-[0.98]"
//                         : "border-transparent opacity-80 hover:opacity-100"
//                     }`}
//                   >
//                     <img
//                       src={imgUrl}
//                       alt={`${clinicName} ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="h-72 sm:h-96 rounded-2xl bg-slate-100 flex items-center justify-center text-gray-400">
//               No Clinic Photos Available
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Clock className="w-5 h-5 text-[#0a4f48]" />
//             Working Hours
//           </h2>

//           {workingHours.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
//               {workingHours.map((item, index) => (
//                 <div
//                   key={item?._id || index}
//                   className="bg-[#edf7f6] rounded-2xl border border-teal-100/60 p-4 text-center"
//                 >
//                   <p className="text-xs font-bold text-gray-800">
//                     {item?.day || "Day"}
//                   </p>

//                   <div className="mt-2">
//                     {item?.enabled ? (
//                       <>
//                         <p className="text-xs font-semibold text-[#0a4f48]">
//                           {item?.open || "N/A"}
//                         </p>

//                         <p className="text-[10px] text-gray-400">to</p>

//                         <p className="text-xs font-semibold text-[#0a4f48]">
//                           {item?.close || "N/A"}
//                         </p>
//                       </>
//                     ) : (
//                       <p className="text-xs font-semibold text-red-500">
//                         Closed
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">
//               Working hours not available.
//             </p>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//           <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
//             <Stethoscope className="w-5 h-5 text-[#0a4f48]" />
//             Active Departments ({departments.length})
//           </h2>

//           {departments.length > 0 ? (
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//               {departments.map((dept, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center justify-center p-4 bg-[#edf7f6] rounded-2xl border border-teal-100/60 text-center hover:border-teal-300 transition-colors"
//                 >
//                   <span className="text-2xl mb-1">{dept.icon || "🏥"}</span>

//                   <span className="text-xs sm:text-sm font-bold text-gray-800">
//                     {dept.name || dept.title || "Department"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="py-8 text-center">
//               <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-2" />

//               <p className="text-sm text-gray-500">
//                 No department information available.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-6">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
//               <Users className="w-5 h-5 text-[#0a4f48]" />
//               Featured Physiotherapists ({doctors.length})
//             </h2>
//           </div>

//           {doctorLoading ? (
//             <div className="py-10 flex justify-center">
//               <div className="w-10 h-10 border-4 border-teal-100 border-t-[#0a4f48] rounded-full animate-spin" />
//             </div>
//           ) : doctors.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {doctors.map((doctor, index) => {
//                 const doctorImage =
//                   doctor.image ||
//                   doctor.profilePhoto?.url ||
//                   doctor.profilePhoto?.secure_url ||
//                   doctor.profileImage?.url ||
//                   doctor.profileImage?.secure_url ||
//                   doctor.photo?.url ||
//                   doctor.photo?.secure_url ||
//                   (typeof doctor.profilePhoto === "string"
//                     ? doctor.profilePhoto
//                     : "") ||
//                   (typeof doctor.profileImage === "string"
//                     ? doctor.profileImage
//                     : "") ||
//                   (typeof doctor.photo === "string" ? doctor.photo : "");

//                 const doctorName =
//                   doctor.name ||
//                   doctor.fullName ||
//                   doctor.doctorName ||
//                   "Doctor";

//                 const doctorSpecialty =
//                   doctor.specialty ||
//                   doctor.specialization ||
//                   doctor.speciality ||
//                   "Physiotherapist";

//                 const doctorExperience =
//                   doctor.experience ||
//                   doctor.experienceYears ||
//                   "Experience not available";

//                 const doctorRating = doctor.rating ?? doctor.averageRating ?? 0;

//                 return (
//                   <div
//                     key={doctor._id || doctor.id || index}
//                     className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
//                   >
//                     <div className="p-4">
//                       {doctorImage ? (
//                         <img
//                           src={doctorImage}
//                           alt={doctorName}
//                           className="w-full h-56 sm:h-64 object-cover rounded-xl border border-slate-200"
//                         />
//                       ) : (
//                         <div className="w-full h-56 sm:h-64 rounded-xl bg-slate-100 flex items-center justify-center">
//                           <Users className="w-16 h-16 text-slate-300" />
//                         </div>
//                       )}

//                       <div className="pt-4">
//                         <h3 className="font-bold text-[#008c86] text-base sm:text-lg">
//                           {doctorName}
//                         </h3>

//                         <div className="flex items-center gap-1 mt-1 text-amber-500">
//                           <span className="text-sm text-gray-700">
//                             {doctorRating}
//                           </span>

//                           <Star className="w-4 h-4 fill-current" />
//                         </div>

//                         <p className="text-sm text-gray-600 font-medium mt-2">
//                           {doctorSpecialty}
//                         </p>

//                         <p className="text-xs text-gray-500 mt-1">
//                           {doctorExperience}
//                         </p>

//                         {Array.isArray(doctor.achievements) &&
//                           doctor.achievements.length > 0 && (
//                             <div className="mt-4 pt-3 border-t border-slate-200 space-y-1.5">
//                               {doctor.achievements
//                                 .slice(0, 3)
//                                 .map((item, i) => (
//                                   <p
//                                     key={i}
//                                     className="text-xs text-gray-600 flex items-start gap-1.5"
//                                   >
//                                     <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />

//                                     <span>
//                                       {typeof item === "string"
//                                         ? item
//                                         : item?.name || item?.title || ""}
//                                     </span>
//                                   </p>
//                                 ))}
//                             </div>
//                           )}
//                       </div>
//                     </div>

//                     <div className="px-4 pb-4">
//                       <NavLink
//                         to="/bookingpage"
//                         state={{
//                           clinic,
//                           doctor,
//                         }}
//                       >
//                         <button className="w-full bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-semibold py-2.5 rounded-xl transition-all cursor-pointer">
//                           Book Consultation
//                         </button>
//                       </NavLink>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div className="py-12 text-center bg-[#edf7f6] rounded-2xl border border-teal-100">
//               <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />

//               <h3 className="text-lg font-bold text-gray-800">
//                 Sorry, No Doctor Data Available
//               </h3>

//               <p className="text-sm text-gray-500 mt-1">
//                 No verified physiotherapist is available for this clinic.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//             <h3 className="text-base font-bold text-gray-900">
//               Leave a Review
//             </h3>

//             <form onSubmit={handleReviewSubmit} className="space-y-4">
//               <div>
//                 <label className="text-xs font-semibold text-gray-600 block mb-1">
//                   Select Rating
//                 </label>

//                 <div className="flex gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       onClick={() => setNewRating(star)}
//                       className={`w-6 h-6 cursor-pointer transition-colors ${
//                         star <= newRating
//                           ? "text-amber-400 fill-amber-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-600 block mb-1">
//                   Your Comment
//                 </label>

//                 <textarea
//                   rows="4"
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Share your experience regarding therapy quality and clinic staff..."
//                   className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0a4f48]"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
//               >
//                 <Send className="w-3.5 h-3.5" />
//                 <span>Submit Review</span>
//               </button>
//             </form>
//           </div>

//           <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 space-y-4">
//             <h3 className="text-base font-bold text-gray-900">
//               Patient Experiences & Ratings
//             </h3>

//             {reviews.length > 0 ? (
//               <div className="space-y-4">
//                 {reviews.map((rev, index) => (
//                   <div
//                     key={rev._id || rev.id || index}
//                     className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="font-bold text-xs sm:text-sm text-gray-800">
//                           {rev.user?.name ||
//                             rev.user?.fullName ||
//                             rev.author ||
//                             rev.name ||
//                             rev.userName ||
//                             "Patient"}
//                         </h4>

//                         <span className="text-[10px] text-gray-400">
//                           {rev.date ||
//                             (rev.createdAt
//                               ? new Date(rev.createdAt).toLocaleDateString()
//                               : "")}
//                         </span>
//                       </div>

//                       <div className="flex text-amber-400">
//                         {Array.from({
//                           length: Number(rev.star ?? rev.rating) || 0,
//                         }).map((_, i) => (
//                           <Star key={i} className="w-3.5 h-3.5 fill-current" />
//                         ))}
//                       </div>
//                     </div>

//                     <p className="text-xs text-gray-600 font-medium">
//                       {rev.message || rev.comment || ""}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="py-10 text-center">
//                 <Star className="w-10 h-10 text-slate-300 mx-auto mb-2" />

//                 <p className="text-sm text-gray-500">
//                   No reviews available for this clinic.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClinicDetail;

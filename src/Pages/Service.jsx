import React, { useState } from "react";
import {
  Activity,
  Brain,
  Sparkles,
  Hand,
  Stethoscope,
  UserCheck,
  Heart,
  Clock,
  ArrowRight,
  Home,
  Building2,
  Video,
  CheckCircle2,
  Filter,
} from "lucide-react";

// Master Service Data mapped to Blueprint
const SERVICES_DATA = [
  {
    id: "ortho",
    title: "Orthopedic Rehabilitation",
    category: "Orthopedic",
    icon: Activity,
    shortDesc:
      "Comprehensive care for joint pain, fractures, arthritis, and musculoskeletal disorders.",
    fullDesc:
      "Specialized treatment designed to restore function to your joints, muscles, and bones. Includes manual therapy, targeted exercises, and posture correction.",
    duration: "45–60 mins",
    startingPrice: "₹500",
    deliveryModes: ["Home Visit", "Clinic Visit"],
    keyBenefits: [
      "Pain Management",
      "Joint Mobility Improvement",
      "Post-Fracture Recovery",
    ],
  },
  {
    id: "neuro",
    title: "Neurological Care",
    category: "Neurological",
    icon: Brain,
    shortDesc:
      "Rehabilitation for Stroke, Parkinson’s, Paralysis, and Spinal Cord injuries.",
    fullDesc:
      "Focused neuro-rehabilitation helping patients regain motor control, balance, and independence in daily activities through targeted retraining exercises.",
    duration: "60 mins",
    startingPrice: "₹700",
    deliveryModes: ["Home Visit", "Clinic Visit"],
    keyBenefits: [
      "Gait & Balance Training",
      "Muscle Spasticity Reduction",
      "Functional Independence",
    ],
  },
  {
    id: "sports",
    title: "Sports Injury & Recovery",
    category: "Sports Injury",
    icon: Hand,
    shortDesc:
      "Targeted therapy for ligament tears, sprains, muscle strains, and athletic performance.",
    fullDesc:
      "Designed for athletes and active individuals to recover quickly from sports injuries, prevent future re-injury, and enhance physical performance.",
    duration: "45 mins",
    startingPrice: "₹600",
    deliveryModes: ["Clinic Visit", "Home Visit"],
    keyBenefits: [
      "Rapid Recovery Protocols",
      "Taping & Soft Tissue Therapy",
      "Performance Enhancement",
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Therapy",
    category: "Pediatric",
    icon: Sparkles,
    shortDesc:
      "Specialized therapy for developmental delays, Cerebral Palsy, and motor skill enhancement.",
    fullDesc:
      "Gentle, play-based physical therapy tailor-made for children to reach their physical milestones, improve balance, and strengthen motor skills.",
    duration: "45 mins",
    startingPrice: "₹600",
    deliveryModes: ["Home Visit", "Clinic Visit"],
    keyBenefits: [
      "Developmental Milestone Tracking",
      "Postural Control",
      "Fun & Interactive Exercises",
    ],
  },
  {
    id: "post-op",
    title: "Post-Surgery Rehab",
    category: "Post Surgery",
    icon: UserCheck,
    shortDesc:
      "Structured recovery protocols for ACL reconstruction, Joint Replacements, and Spine Surgeries.",
    fullDesc:
      "Post-operative care focused on safe mobilization, scar tissue management, and restoring full strength after major surgical procedures.",
    duration: "45–60 mins",
    startingPrice: "₹650",
    deliveryModes: ["Home Visit", "Clinic Visit"],
    keyBenefits: [
      "Swelling & Stiffness Reduction",
      "Safe Mobilization",
      "Regaining Full Range of Motion",
    ],
  },
  {
    id: "etherapy",
    title: "E-Therapy & Tele-Consultation",
    category: "E-Therapy",
    icon: Stethoscope,
    shortDesc:
      "Virtual guided exercise, posture assessment, and consultation from your home.",
    fullDesc:
      "Convenient online video consultation with expert physiotherapists for preliminary assessments, guided ergonomic advice, and home exercise plans.",
    duration: "30 mins",
    startingPrice: "₹350",
    deliveryModes: ["Online Consultation"],
    keyBenefits: [
      "Zero Travel Required",
      "Ergonomic Assessment",
      "Personalized Home Exercise Plan",
    ],
  },
  {
    id: "geriatric",
    title: "Geriatric & Balance Care",
    category: "Geriatric",
    icon: Heart,
    shortDesc:
      "Fall prevention, arthritis management, and mobility restoration for senior citizens.",
    fullDesc:
      "Dedicated care tailored for seniors to maintain mobility, reduce joint stiffness, prevent dangerous falls, and enhance overall quality of life.",
    duration: "45 mins",
    startingPrice: "₹550",
    deliveryModes: ["Home Visit", "Clinic Visit"],
    keyBenefits: [
      "Fall Prevention Strategies",
      "Gentle Joint Mobilization",
      "Enhanced Daily Mobility",
    ],
  },
];

const CATEGORIES = [
  "All",
  "Orthopedic",
  "Neurological",
  "Sports Injury",
  "Pediatric",
  "Post Surgery",
  "E-Therapy",
  "Geriatric",
];

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full bg-[#edf7f6] text-gray-800 font-sans selection:bg-teal-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0a4f48] bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Our Care Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Comprehensive{" "}
            <span className="text-[#0a4f48]">Physiotherapy Services</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Book certified specialists across Odisha for home visits, clinic
            consultations, or virtual tele-therapy sessions.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#0a4f48] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-teal-50 border border-slate-200/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Price */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0a4f48] flex items-center justify-center group-hover:bg-[#0a4f48] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">
                        Starting from
                      </span>
                      <span className="text-lg font-extrabold text-[#0a4f48]">
                        {service.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0a4f48] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.fullDesc}
                  </p>

                  {/* Duration & Delivery Modes */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>
                        Avg. Duration:{" "}
                        <strong className="text-gray-800">
                          {service.duration}
                        </strong>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.deliveryModes.map((mode) => (
                        <span
                          key={mode}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700"
                        >
                          {mode === "Home Visit" && (
                            <Home className="w-3 h-3 text-[#0a4f48]" />
                          )}
                          {mode === "Clinic Visit" && (
                            <Building2 className="w-3 h-3 text-[#0a4f48]" />
                          )}
                          {mode === "Online Consultation" && (
                            <Video className="w-3 h-3 text-[#0a4f48]" />
                          )}
                          {mode}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      Key Highlights:
                    </span>
                    {service.keyBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <button className="w-full mt-2 flex items-center justify-center gap-2 bg-[#0a4f48] hover:bg-[#063b36] text-white font-semibold text-sm py-3 rounded-xl shadow-md transition-all active:scale-[0.98]">
                  <span>Book {service.category}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;

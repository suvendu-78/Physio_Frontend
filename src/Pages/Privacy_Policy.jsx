import React from "react";
import {
  ShieldCheck,
  Calendar,
  ChevronRight,
  User,
  Lock,
  CalendarCheck,
  CreditCard,
  Stethoscope,
  MapPin,
  Cookie,
  BarChart3,
  MessageSquare,
  Users,
  Database,
  Baby,
  Link,
  Globe,
  UserCheck,
  Trash2,
  RefreshCw,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#edf7f6] py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* MAIN WHITE DOCUMENT */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* TITLE */}
          <div className="px-5 sm:px-8 lg:px-10 pt-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#edf7f6] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#287f86]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#287f86]">
                  Legal
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Privacy Policy
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />

              <span>Last Updated: September 2, 2026</span>
            </div>
          </div>

          {/* INTRO */}
          <div className="px-5 sm:px-8 lg:px-10 pt-8">
            <div className="border-l-4 border-[#287f86] bg-[#f4fbfa] px-4 py-4 rounded-r-lg">
              <p className="text-sm sm:text-base text-slate-700 leading-7">
                At <b>LiBi Motion Care</b>, we respect your privacy and are
                committed to protecting the personal information of our users.
                This Privacy Policy explains how we collect, use, store,
                protect, and disclose information when you access or use our
                website, application, and related services.
              </p>
            </div>
          </div>

          {/* QUICK NAVIGATION */}
          <div className="px-5 sm:px-8 lg:px-10 pt-8">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6">
              <h2 className="font-bold text-slate-900 mb-4">
                Privacy Policy Sections
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {[
                  "Information We Collect",
                  "Account Information",
                  "Appointment and Booking",
                  "Payment Information",
                  "How We Use Your Information",
                  "Healthcare Information",
                  "Location Information",
                  "Cookies",
                  "Analytics",
                  "Communication",
                  "Reviews and User Content",
                  "Information Sharing",
                  "Information Security",
                  "Data Retention",
                  "Children's Privacy",
                  "Third-Party Links",
                  "Data Transfers",
                  "Your Privacy Rights",
                  "Account Deletion",
                  "Changes to Privacy Policy",
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#privacy-${index}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-[#287f86] hover:bg-white transition"
                  >
                    <ChevronRight className="w-4 h-4 text-[#287f86]" />

                    <span>{item}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="px-5 sm:px-8 lg:px-10 py-8">
            <div className="space-y-8">
              {/* 01 */}
              <PrivacySection
                id="privacy-0"
                number="01"
                icon={Database}
                title="Information We Collect"
              >
                When you use our website or create an account, we may collect
                information that you voluntarily provide to us. This may include
                your name, email address, phone number, date of birth where
                required, gender where voluntarily provided, address, location
                information, account credentials, and other information
                necessary to provide our services.
                <br />
                <br />
                If you book an appointment, we may collect appointment-related
                information such as the selected clinic, healthcare
                professional, appointment date and time, service selected, and
                booking details.
              </PrivacySection>

              {/* 02 */}
              <PrivacySection
                id="privacy-1"
                number="02"
                icon={Stethoscope}
                title="Healthcare-Related Information"
              >
                Depending on the features available on our platform, users may
                voluntarily provide information relating to their healthcare
                needs. This may include information about injuries, pain,
                physical conditions, previous treatments, medical history,
                rehabilitation requirements, or other information that a patient
                chooses to provide to a healthcare professional.
                <br />
                <br />
                Such information may be considered sensitive or health-related
                information under applicable law.
              </PrivacySection>

              {/* 03 */}
              <PrivacySection
                id="privacy-2"
                number="03"
                icon={User}
                title="Clinic and Healthcare Professional Information"
              >
                If you are a clinic, doctor, physiotherapist, or other
                healthcare professional using our platform, we may collect
                professional information such as your name, professional
                designation, clinic name, qualifications, specialization,
                experience, professional registration information where
                applicable, clinic address, contact details, services offered,
                availability, and other information necessary to create and
                manage your professional profile.
              </PrivacySection>

              {/* 04 */}
              <PrivacySection
                id="privacy-3"
                number="04"
                icon={UserCheck}
                title="Account Information"
              >
                When you register for an account, we may use your information to
                create and maintain your account, authenticate your identity,
                provide access to platform features, and communicate with you
                regarding your account.
                <br />
                <br />
                You are responsible for providing accurate information and
                keeping your account information updated. You are also
                responsible for maintaining the confidentiality of your password
                and account credentials.
              </PrivacySection>

              {/* 05 */}
              <PrivacySection
                id="privacy-4"
                number="05"
                icon={CalendarCheck}
                title="Appointment and Booking Information"
              >
                When you use our appointment booking features, we may collect
                and process information related to your booking. This may
                include the clinic or healthcare professional selected,
                appointment date and time, requested service, booking status,
                cancellation information, and communication relating to the
                appointment.
                <br />
                <br />
                We use this information to process and manage appointments,
                communicate booking confirmations and updates, provide
                reminders, support cancellations and rescheduling, and help
                resolve booking-related issues.
              </PrivacySection>

              {/* 06 */}
              <PrivacySection
                id="privacy-5"
                number="06"
                icon={CreditCard}
                title="Payment Information"
              >
                If our platform allows users to make online payments, payments
                may be processed through third-party payment providers.
                Depending on the payment method used, payment providers may
                collect information such as transaction details, payment
                identifiers, and other information required to process the
                transaction.
                <br />
                <br />
                We may receive information necessary to confirm and manage a
                transaction, such as transaction ID, payment status, amount, and
                payment date.
              </PrivacySection>

              {/* 07 */}
              <PrivacySection
                id="privacy-6"
                number="07"
                icon={ShieldCheck}
                title="How We Use Your Information"
              >
                We may use the information we collect to provide, operate,
                maintain, and improve our platform and services.
                <br />
                <br />
                This may include creating and managing user accounts, processing
                appointments, connecting patients with clinics and healthcare
                professionals, communicating appointment information, processing
                payments, providing customer support, responding to inquiries,
                improving website functionality, detecting fraud, maintaining
                security, and complying with applicable legal requirements.
              </PrivacySection>

              {/* 08 */}
              <PrivacySection
                id="privacy-7"
                number="08"
                icon={Stethoscope}
                title="Healthcare and Medical Information"
              >
                Our platform may allow patients to voluntarily provide
                healthcare-related information to clinics or healthcare
                professionals. Such information may be used by the relevant
                provider to understand the patient's requirements and provide
                appropriate professional services.
                <br />
                <br />
                We understand that health-related information can be highly
                sensitive. We take reasonable measures to protect such
                information and limit its use to legitimate purposes associated
                with providing requested services, operating the platform,
                complying with legal obligations, and other purposes permitted
                by applicable law.
              </PrivacySection>

              {/* 09 */}
              <PrivacySection
                id="privacy-8"
                number="09"
                icon={Users}
                title="Clinic and Healthcare Professional Profiles"
              >
                Clinics, doctors, physiotherapists, and other healthcare
                professionals may provide information for display on the
                platform. This may include professional profiles, photographs,
                qualifications, specializations, clinic information, services,
                pricing, availability, and contact information.
                <br />
                <br />
                Some professional information may be publicly visible so that
                patients can evaluate and select an appropriate provider.
              </PrivacySection>

              {/* 10 */}
              <PrivacySection
                id="privacy-9"
                number="10"
                icon={MapPin}
                title="Location Information"
              >
                Certain platform features may use location-related information
                to help users discover nearby clinics or healthcare
                professionals.
                <br />
                <br />
                Depending on your device and browser settings, location
                information may be provided by your device or entered manually
                by you.
                <br />
                <br />
                You may be able to control location permissions through your
                device or browser settings.
              </PrivacySection>

              {/* 11 */}
              <PrivacySection
                id="privacy-10"
                number="11"
                icon={Cookie}
                title="Cookies and Similar Technologies"
              >
                Our website may use cookies and similar technologies to provide
                and improve functionality, remember preferences, maintain
                sessions, understand how users interact with the platform, and
                improve security.
                <br />
                <br />
                You may be able to manage or disable cookies through your
                browser settings. However, disabling certain cookies may cause
                some website features to operate incorrectly.
              </PrivacySection>

              {/* 12 */}
              <PrivacySection
                id="privacy-11"
                number="12"
                icon={BarChart3}
                title="Analytics and Technical Information"
              >
                When you access our website, certain technical information may
                be automatically collected. This may include your IP address,
                browser type, device type, operating system, pages visited,
                approximate usage information, access times, referring pages,
                and technical error information.
                <br />
                <br />
                We may use this information to understand website performance,
                identify technical problems, improve user experience, monitor
                security, analyze usage patterns, and maintain the reliability
                of our platform.
              </PrivacySection>

              {/* 13 */}
              <PrivacySection
                id="privacy-12"
                number="13"
                icon={MessageSquare}
                title="Communication"
              >
                We may communicate with you through email, phone, SMS,
                notifications, or other communication methods depending on the
                information you provide and the features available on the
                platform.
                <br />
                <br />
                Communications may include appointment confirmations,
                appointment reminders, booking updates, account notifications,
                security alerts, customer-support responses, and important
                service announcements.
              </PrivacySection>

              {/* 14 */}
              <PrivacySection
                id="privacy-13"
                number="14"
                icon={MessageSquare}
                title="Reviews and User-Generated Content"
              >
                Our platform may allow users to submit reviews, ratings,
                comments, feedback, photographs, or other content. Any
                information that you voluntarily publish in a public section of
                the website may be visible to other users or visitors.
                <br />
                <br />
                You should carefully consider what information you choose to
                publish publicly.
              </PrivacySection>

              {/* 15 */}
              <PrivacySection
                id="privacy-14"
                number="15"
                icon={Users}
                title="How We Share Information"
              >
                We may share information with clinics and healthcare
                professionals when necessary to provide services requested by
                you. For example, information required to process an appointment
                may be provided to the relevant clinic or healthcare
                professional.
                <br />
                <br />
                We may also share information with trusted service providers
                that help us operate the platform. These providers may include
                hosting providers, payment processors, email and communication
                providers, analytics providers, security providers, database
                providers, and other technology service providers.
              </PrivacySection>

              {/* 16 */}
              <PrivacySection
                id="privacy-15"
                number="16"
                icon={Lock}
                title="Information Security"
              >
                We take reasonable technical and organizational measures to
                protect personal information from unauthorized access, loss,
                misuse, alteration, disclosure, or destruction.
                <br />
                <br />
                Security measures may include access controls, authentication
                mechanisms, encryption where appropriate, secure hosting,
                monitoring, and other reasonable safeguards.
                <br />
                <br />
                However, no internet-based service can guarantee absolute
                security.
              </PrivacySection>

              {/* 17 */}
              <PrivacySection
                id="privacy-16"
                number="17"
                icon={Database}
                title="Data Retention"
              >
                We retain personal information only for as long as reasonably
                necessary for the purposes described in this Privacy Policy,
                including providing services, maintaining accounts, processing
                transactions, resolving disputes, enforcing agreements,
                maintaining security, and complying with legal obligations.
                <br />
                <br />
                When information is no longer reasonably required, we may
                delete, anonymize, or securely dispose of it, subject to
                applicable legal requirements.
              </PrivacySection>

              {/* 18 */}
              <PrivacySection
                id="privacy-17"
                number="18"
                icon={Baby}
                title="Children's Privacy"
              >
                Our services are not intended to encourage children to provide
                personal information without appropriate parental or legal
                authorization.
                <br />
                <br />
                Where services are used on behalf of a minor, the parent,
                guardian, or legally authorized person should provide the
                necessary information and consent where required.
              </PrivacySection>

              {/* 19 */}
              <PrivacySection
                id="privacy-18"
                number="19"
                icon={Link}
                title="Third-Party Links"
              >
                Our platform may contain links to third-party websites,
                applications, payment services, social media platforms, or other
                external services.
                <br />
                <br />
                These third-party websites operate independently from us and may
                have their own privacy policies. We are not responsible for the
                privacy practices, security, content, or policies of third-party
                websites.
              </PrivacySection>

              {/* 20 */}
              <PrivacySection
                id="privacy-19"
                number="20"
                icon={Globe}
                title="Data Transfers"
              >
                Depending on the technology providers and infrastructure used to
                operate our platform, information may be processed or stored on
                servers located in different jurisdictions.
                <br />
                <br />
                Where information is transferred across jurisdictions, we will
                take reasonable steps to handle such information in accordance
                with applicable legal requirements.
              </PrivacySection>

              {/* 21 */}
              <PrivacySection
                id="privacy-20"
                number="21"
                icon={UserCheck}
                title="Your Privacy Rights"
              >
                Depending on applicable law, you may have certain rights
                regarding your personal information.
                <br />
                <br />
                These rights may include requesting access to information we
                hold about you, requesting correction of inaccurate information,
                requesting deletion where legally permitted, withdrawing consent
                where processing is based on consent, or raising a concern about
                how your information is handled.
                <br />
                <br />
                We may need to verify your identity before processing certain
                requests in order to protect your account and personal
                information.
              </PrivacySection>

              {/* 22 */}
              <PrivacySection
                id="privacy-21"
                number="22"
                icon={Trash2}
                title="Account Deletion"
              >
                Users may request deletion or closure of their account where
                this feature is available or by contacting us.
                <br />
                <br />
                Upon receiving a valid request, we may delete or deactivate
                account information where legally and technically possible.
                <br />
                <br />
                Certain information may need to be retained for legal, security,
                fraud-prevention, accounting, dispute-resolution, or other
                legitimate purposes.
              </PrivacySection>

              {/* 23 */}
              <PrivacySection
                id="privacy-22"
                number="23"
                icon={RefreshCw}
                title="Changes to This Privacy Policy"
              >
                We may update this Privacy Policy from time to time to reflect
                changes in our services, technology, legal requirements, or
                privacy practices.
                <br />
                <br />
                When we make changes, we may update the "Last Updated" date at
                the top of this page.
                <br />
                <br />
                We encourage users to review this Privacy Policy periodically.
              </PrivacySection>

              {/* CONTACT */}
              <section
                id="privacy-23"
                className="rounded-xl bg-[#edf7f6] border border-[#ccebea] p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#287f86]" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      Contact Us
                    </h2>

                    <p className="mt-2 text-sm text-slate-600 leading-6">
                      If you have questions, concerns, complaints, or requests
                      regarding this Privacy Policy or the handling of your
                      personal information, you can contact us using the
                      information below.
                    </p>

                    <div className="mt-5 space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-slate-800">
                          Website:
                        </span>{" "}
                        LiBi Motion Care
                      </div>

                      <div>
                        <span className="font-semibold text-slate-800">
                          Email:
                        </span>{" "}
                        [Your Email Address]
                      </div>

                      <div>
                        <span className="font-semibold text-slate-800">
                          Phone:
                        </span>{" "}
                        [Your Phone Number]
                      </div>

                      <div>
                        <span className="font-semibold text-slate-800">
                          Address:
                        </span>{" "}
                        [Your Business Address]
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CONSENT */}
              <section className="rounded-xl bg-[#0a4f48] p-6 sm:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-100" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">Your Consent</h2>

                    <p className="mt-3 text-sm sm:text-base text-teal-50/90 leading-7">
                      By accessing or using LiBi Motion Care, you acknowledge
                      that you have read and understood this Privacy Policy.
                      Where consent is required under applicable law, you
                      consent to the collection, use, storage, and processing of
                      your information for the purposes described in this
                      Privacy Policy.
                    </p>

                    <p className="mt-3 text-sm sm:text-base text-teal-50/90 leading-7">
                      If you do not agree with this Privacy Policy, please
                      discontinue use of the platform and do not provide
                      personal information through the website.
                    </p>
                  </div>
                </div>
              </section>

              {/* THANK YOU */}
              <div className="text-center pt-2 pb-2">
                <p className="text-sm font-semibold text-[#287f86]">
                  Thank you for trusting LiBi Motion Care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================
   REUSABLE PRIVACY SECTION
========================================= */

const PrivacySection = ({ id, number, icon: Icon, title, children }) => {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-start gap-4 sm:gap-5">
        {/* NUMBER */}
        <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#edf7f6] text-[#287f86] items-center justify-center shrink-0 text-xs font-bold">
          {number}
        </div>

        {/* ICON */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#edf7f6] flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[#287f86]" />
        </div>

        {/* CONTENT */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#287f86] sm:hidden" />

            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {title}
            </h2>
          </div>

          <div className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

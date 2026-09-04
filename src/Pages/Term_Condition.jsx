import React from "react";
import { FileText, Calendar, ChevronRight, ShieldCheck } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#edf7f6] py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main White Document */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Top Title */}
          <div className="px-5 sm:px-8 lg:px-10 pt-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#edf7f6] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#287f86]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#287f86]">
                  Legal
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Terms and Conditions
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: September 2, 2026</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="px-5 sm:px-8 lg:px-10 pt-7">
            <div className="border-l-4 border-[#287f86] bg-[#f4fbfa] px-4 py-3 rounded-r-lg">
              <p className="text-sm italic text-slate-700 leading-6">
                Disclaimer: In case of any discrepancy or difference, the
                English version will take precedence over the translation.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 sm:px-8 lg:px-10 py-8">
            <p className="text-lg font-semibold text-slate-900 mb-6">
              LiBi Motion Care Terms of Use
            </p>

            <div className="space-y-8">
              {/* 1 */}
              <Section number="01" title="Introduction">
                Welcome to <b>LiBi Motion Care</b>. These Terms and Conditions
                govern your access to and use of our website, application, and
                related services. By accessing, registering on, browsing, or
                using our platform, you acknowledge that you have read,
                understood, and agreed to be bound by these Terms and
                Conditions.
              </Section>

              {/* 2 */}
              <Section number="02" title="Our Platform">
                Our platform is designed to help users discover physiotherapy
                clinics, doctors, physiotherapists, therapists, rehabilitation
                professionals, and related healthcare services. Users may be
                able to view clinic information, healthcare professional
                profiles, available services, consultation information,
                appointment availability, contact information, reviews, and
                other related information.
              </Section>

              {/* 3 */}
              <Section number="03" title="Medical Information Disclaimer">
                The information provided on this platform is intended for
                general informational and service-discovery purposes. The
                platform itself does not provide medical diagnosis, medical
                treatment, emergency medical care, or personalized medical
                advice unless specifically stated otherwise.
                <br />
                <br />
                Information displayed on the platform should not be considered a
                substitute for consultation with a qualified healthcare
                professional. Users should consult an appropriately qualified
                doctor, physiotherapist, or other healthcare professional
                regarding any medical condition, injury, pain, rehabilitation
                requirement, or treatment decision.
              </Section>

              {/* 4 */}
              <Section number="04" title="Healthcare Professionals">
                The clinics, doctors, physiotherapists, and other healthcare
                professionals listed on our platform may operate independently
                and may be responsible for providing healthcare services
                directly to patients.
                <br />
                <br />
                Each healthcare professional is responsible for their own
                professional qualifications, treatment decisions, medical
                advice, clinical assessment, diagnosis where applicable,
                treatment plans, and services provided to patients.
              </Section>

              {/* 5 */}
              <Section number="05" title="User Responsibilities">
                Users are responsible for providing accurate and complete
                information when registering on the platform or booking a
                service. This may include their name, contact information,
                appointment details, and any other information reasonably
                required to provide the requested service.
              </Section>

              {/* 6 */}
              <Section number="06" title="Account Security">
                Users are responsible for ensuring that the information
                associated with their account remains accurate and up to date.
                Users must maintain the confidentiality of their account
                credentials and should not share their password or account
                access with another person.
              </Section>

              {/* 7 */}
              <Section number="07" title="Appointments">
                Appointment availability displayed on the platform may be
                provided by individual clinics or healthcare professionals and
                may change from time to time.
                <br />
                <br />A request to book an appointment does not necessarily mean
                that the appointment has been confirmed. An appointment will be
                considered confirmed only when the platform or relevant clinic
                provides an appropriate confirmation.
              </Section>

              {/* 8 */}
              <Section number="08" title="Cancellation and Rescheduling">
                Healthcare professionals and clinics may change, cancel, or
                reschedule appointments due to emergencies, professional
                commitments, operational circumstances, staff availability, or
                other reasonable causes.
                <br />
                <br />
                Users are expected to notify the clinic or healthcare
                professional as soon as possible if they are unable to attend a
                scheduled appointment.
              </Section>

              {/* 9 */}
              <Section number="09" title="Cancellation Charges and Refunds">
                Cancellation and rescheduling policies may vary between clinics
                and healthcare professionals. Any applicable cancellation
                charges, refund conditions, notice periods, or other
                requirements should be reviewed by the user before confirming an
                appointment.
              </Section>

              {/* 10 */}
              <Section number="10" title="Payments">
                Certain services available through the platform may require
                online payment. The applicable service price, booking fee,
                platform fee, taxes, or other applicable charges may be
                displayed before the transaction is completed.
                <br />
                <br />
                Payments may be processed through third-party payment gateways,
                and such providers may have their own terms, conditions, and
                privacy policies.
              </Section>

              {/* 11 */}
              <Section number="11" title="Reviews and User Content">
                The platform may allow users to submit reviews, ratings,
                comments, feedback, photographs, or other content relating to
                their experience with a clinic or healthcare professional. Users
                must ensure that any content they submit is truthful to the best
                of their knowledge and does not contain unlawful, defamatory,
                abusive, threatening, misleading, or discriminatory material.
              </Section>

              {/* 12 */}
              <Section number="12" title="Provider Responsibilities">
                Clinics and healthcare professionals using the platform are
                responsible for ensuring that the information displayed on their
                profiles is accurate and current.
                <br />
                <br />
                Providers should ensure that information concerning their
                qualifications, services, pricing, availability, location, and
                professional credentials is not misleading.
              </Section>

              {/* 13 */}
              <Section number="13" title="Privacy and Personal Information">
                We may collect and process certain information in connection
                with your use of the platform. Such information may include
                account information, contact details, booking information,
                transaction information, technical information, and other
                information required to operate our services.
                <br />
                <br />
                Our collection and use of personal information is governed by
                our Privacy Policy.
              </Section>

              {/* 14 */}
              <Section number="14" title="Sensitive Information">
                Users should avoid publicly sharing sensitive personal or
                medical information through reviews, comments, public profiles,
                or other areas of the platform that may be accessible to other
                users.
              </Section>

              {/* 15 */}
              <Section number="15" title="Third-Party Services">
                The platform may contain links, integrations, or references to
                third-party websites, applications, payment services,
                communication services, mapping services, hosting services,
                analytics services, or other third-party products.
                <br />
                <br />
                These third-party services may be governed by their own terms
                and privacy policies.
              </Section>

              {/* 16 */}
              <Section number="16" title="Prohibited Activities">
                Users must not use the platform for unlawful, fraudulent,
                abusive, harmful, or unauthorized purposes.
                <br />
                <br />
                Users must not attempt to gain unauthorized access to the
                platform, another user's account, administrative systems,
                databases, servers, or other protected resources.
              </Section>

              {/* 17 */}
              <Section number="17" title="Intellectual Property">
                The content, design, software, graphics, logos, trademarks,
                text, interface, and other materials available through the
                platform may be owned by or licensed to LiBi Motion Care or
                their respective owners and may be protected by applicable
                intellectual-property laws.
              </Section>

              {/* 18 */}
              <Section number="18" title="Accuracy of Information">
                We make reasonable efforts to keep the information available on
                the platform accurate and useful; however, we do not guarantee
                that all information will always be complete, current, accurate,
                or error-free.
                <br />
                <br />
                Users should verify important information directly with the
                relevant clinic or healthcare professional before relying upon
                it.
              </Section>

              {/* 19 */}
              <Section number="19" title="Platform Availability">
                The platform may occasionally experience technical problems,
                maintenance, server issues, internet failures, software errors,
                security incidents, or other interruptions.
                <br />
                <br />
                We do not guarantee that the platform will always be available
                without interruption or that every feature will operate
                continuously.
              </Section>

              {/* 20 */}
              <Section number="20" title="Medical Emergencies">
                The platform should not be used for medical emergencies. If you
                are experiencing a serious or potentially life-threatening
                medical condition, severe injury, sudden loss of consciousness,
                difficulty breathing, severe chest pain, or another emergency
                situation, you should immediately contact the appropriate
                emergency medical services or visit the nearest appropriate
                emergency facility.
              </Section>

              {/* 21 */}
              <Section number="21" title="Limitation of Liability">
                To the maximum extent permitted by applicable law, LiBi Motion
                Care is not responsible for medical decisions made by users,
                treatment decisions made by independent healthcare
                professionals, treatment outcomes, delays in treatment, provider
                cancellations, provider availability, or issues arising directly
                from services independently provided by clinics or healthcare
                professionals.
              </Section>

              {/* 22 */}
              <Section number="22" title="Selecting a Healthcare Professional">
                Users agree to use reasonable care when selecting a clinic or
                healthcare professional. Users should consider their individual
                healthcare requirements and, where appropriate, independently
                verify professional qualifications, treatment suitability,
                service availability, and other important information.
              </Section>

              {/* 23 */}
              <Section number="23" title="Complaints">
                If a user has a complaint about a healthcare service, the user
                should first attempt to resolve the matter directly with the
                relevant clinic or healthcare professional.
                <br />
                <br />
                Platform-related complaints may be submitted to LiBi Motion Care
                through the contact details provided on the website.
              </Section>

              {/* 24 */}
              <Section number="24" title="Suspension or Termination">
                We reserve the right to suspend, restrict, or terminate a user's
                access to the platform if the user violates these Terms, engages
                in fraudulent or abusive behavior, creates security risks,
                misuses platform services, provides false information, or
                engages in conduct that may harm other users, providers, or the
                platform.
              </Section>

              {/* 25 */}
              <Section number="25" title="Account Closure">
                Users may stop using the platform at any time. Account closure
                or termination does not automatically remove obligations or
                responsibilities that arose before termination.
              </Section>

              {/* 26 */}
              <Section number="26" title="Severability">
                If any provision of these Terms is determined to be invalid,
                unlawful, or unenforceable by a competent authority, the
                remaining provisions will continue to apply to the extent
                permitted by law.
              </Section>

              {/* 27 */}
              <Section number="27" title="Governing Law and Disputes">
                These Terms and your use of the platform shall be governed by
                the applicable laws and regulations of the jurisdiction in which
                the platform operates, subject to any mandatory legal rights
                available to users.
                <br />
                <br />
                Any disputes should, where appropriate, first be addressed
                through good-faith communication between the parties.
              </Section>

              {/* 28 */}
              <Section number="28" title="Agreement to These Terms">
                By accessing or using LiBi Motion Care, you confirm that you
                have read and understood these Terms and Conditions and agree to
                comply with them.
                <br />
                <br />
                If you do not agree with these Terms, you should discontinue use
                of the platform.
              </Section>

              {/* 29 */}
              <Section number="29" title="Our Goal">
                These Terms are intended to establish a clear and transparent
                framework for the use of our physiotherapy and healthcare
                service platform. Our goal is to provide users with a convenient
                way to discover healthcare professionals and clinics while
                allowing providers to manage and offer their services through
                the platform.
              </Section>

              {/* Contact */}
              <div className="mt-10 rounded-xl bg-[#edf7f6] border border-[#ccebea] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#287f86]" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Contact Us
                    </h2>

                    <p className="mt-2 text-sm text-slate-600 leading-6">
                      For questions, complaints, or concerns regarding these
                      Terms and Conditions, users may contact us through the
                      contact information provided on the website.
                    </p>

                    <div className="mt-5 space-y-2 text-sm">
                      <p>
                        <span className="font-semibold text-slate-800">
                          Website:
                        </span>{" "}
                        LiBi Motion Care
                      </p>

                      <p>
                        <span className="font-semibold text-slate-800">
                          Email:
                        </span>{" "}
                        [Your Email Address]
                      </p>

                      <p>
                        <span className="font-semibold text-slate-800">
                          Phone:
                        </span>{" "}
                        [Your Phone Number]
                      </p>

                      <p>
                        <span className="font-semibold text-slate-800">
                          Address:
                        </span>{" "}
                        [Your Business Address]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Agreement */}
              <div className="flex items-start gap-3 pt-6 border-t border-slate-200">
                <div className="mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-[#287f86]" />
                </div>

                <p className="text-sm text-slate-500 leading-6">
                  By using our website and services, you acknowledge that you
                  have read, understood, and agreed to these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Reusable Section Component */
const Section = ({ number, title, children }) => {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-start gap-4">
        {/* Number */}
        <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#edf7f6] text-[#287f86] items-center justify-center shrink-0 text-xs font-bold">
          {number}
        </div>

        <div className="flex-1">
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

export default TermsAndConditions;

"use client";
import { useEffect } from "react";
import ContactUsForm from "@/components/contactUs/contactUsForm";
import OfficeDetails from "@/components/contactUs/officeDetails";
import SectionTitle from "@/components/sectionTitle";
import { useInView } from "react-intersection-observer";
import { trackEvent } from "@/lib/segment";
import submitContactForm from "@/components/contactUs/submitContactForm";

const ContactUsContents = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      trackEvent("Content Viewed", {
        contentTitle: "CONTACT US",
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="content-section bg-even" id="contact-us">
      <div className="container ">
        <div className="grid xl:grid-cols-10 gap-10 xl:gap-16">
          <div className="xl:col-span-6">
            <SectionTitle
              heading="Contact us"
              description="Get in touch with us by submitting the form"
              subHeading="Get in touch"
            />

            <ContactUsForm submitContactForm={submitContactForm} />
          </div>

          {/* address */}
          <OfficeDetails />
        </div>
      </div>
    </div>
  );
};

export default ContactUsContents;

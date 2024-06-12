import SectionTitle from "../../components/sectionTitle";
import ContactUsForm from "@/components/contactUs/contactUsForm";
import OfficeDetails from "@/components/contactUs/officeDetails";
import submitContactForm from "@/components/contactUs/submitContactForm";

const ContactUs = () => {
  return (
    <div className="content-section bg-[#f8f8fc]" id="contact-us">
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

export default ContactUs;

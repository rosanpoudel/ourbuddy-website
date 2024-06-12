"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import SubmitButton from "./submitButton";
import { useRef } from "react";
import ReCAPTCHAv3 from "./recaptcha";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { trackEvent } from "@/lib/segment";
import { formatDate } from "@/utils/date";

const ContactUsForm = ({ submitContactForm }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const formRef = useRef(null);

  const [token, setToken] = useState("");

  const handleVerify = (token) => {
    setToken(token);
    console.log("reCAPTCHA token:", token);
  };

  const handleSubmit = async (formData) => {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      // recaptcha_token: token,
    };

    const result = await submitContactForm(rawFormData);

    if (result?.error) {
      enqueueSnackbar(result?.error, {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
      trackEvent("Error Occured", {
        errorMessage: "Form Submission Failed",
        data: rawFormData,
      });
    } else {
      trackEvent("Form Submitted", {
        data: rawFormData,
        formType: "Contact us form",
      });
      formRef.current.reset();
      enqueueSnackbar(
        "Thank you for your inquiry! We will get back to you soon. ",
        {
          variant: "info",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        }
      );
    }
  };

  return (
    <div ref={ref}>
      <SnackbarProvider />
      <form
        action={handleSubmit}
        ref={formRef}
        className={`${inView ? "fadeInFromLeft" : ""}`}
      >
        <div className="mb-4 lg:mb-8">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm border border-gray-300 text-[#293C67] text-sm rounded-lg block w-full p-2.5 "
            placeholder="Your full name"
            required
            onFocus={() =>
              trackEvent("Contact Form Interacted", {
                formField: "Name",
                interactionType: "Focus",
              })
            }
          />
        </div>
        <div className="mb-4 lg:mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 text-[#293C67] text-sm rounded-lg block w-full p-2.5 "
            placeholder="your email address"
            required
            onFocus={() =>
              trackEvent("Contact Form Interacted", {
                formField: "Email",
                interactionType: "Focus",
              })
            }
          />
        </div>
        <div className="mb-4 lg:mb-8">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-[#293C67] rounded-lg border border-gray-300 shadow-sm "
            placeholder="Let us know how we can help you"
            required
            onFocus={() =>
              trackEvent("Contact Form Interacted", {
                formField: "Subject",
                interactionType: "Focus",
              })
            }
          />
        </div>
        <div className="sm:col-span-2 mb-3">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-[#293C67]  rounded-lg shadow-sm border border-gray-300"
            placeholder="Leave a comment..."
            onFocus={() =>
              trackEvent("Contact Form Interacted", {
                formField: "Message",
                interactionType: "Focus",
              })
            }
          />
        </div>
        {/* <div className="my-4">
          <GoogleReCaptchaProvider reCaptchaKey="6Ld06vIpAAAAAIZo7ADf17q2QglOYR5ZoAmKoGPY">
            <ReCAPTCHAv3 action="homepage" onVerify={handleVerify} />
          </GoogleReCaptchaProvider>
        </div> */}

        <div className="text-[#717885] text-sm mb-5 lg:mb-8">
          By submitting this form you agree to our{" "}
          <a href="#" className="text-[#326CEC]">
            terms and conditions{" "}
          </a>
          and our{" "}
          <a href="#" className="text-[#326CEC]">
            privacy policy{" "}
          </a>{" "}
          which explains how we may collect, use and disclose your personal
          information including to third parties.
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactUsForm;

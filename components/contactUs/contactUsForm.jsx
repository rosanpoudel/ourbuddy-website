"use client";
import { useInView } from "react-intersection-observer";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import SubmitButton from "./submitButton";
import { useRef } from "react";

const ContactUsForm = ({ submitContactForm }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const formRef = useRef(null);

  const handleSubmit = async (formData) => {
    const rawFormData = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
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
    } else {
      formRef.current.reset();
      enqueueSnackbar("Your message is sent successfully!", {
        variant: "info",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      });
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
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm border border-gray-300 text-[#293C67] text-sm rounded-lg block w-full p-2.5 "
            placeholder="email@ourbuddy"
            required
          />
        </div>
        <div className="mb-8">
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
            required
          />
        </div>

        <div className="text-[#717885] text-sm mb-8">
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

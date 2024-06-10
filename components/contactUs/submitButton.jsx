"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full min-w-[192px] min-h-[50px] xl:w-auto flex items-center justify-center px-8 py-3 rounded-lg bg-[#1276ff] text-[#ffffff] font-[500] hover:text-[#1276ff]  border border-[#1276ff]  hover:bg-[transparent] transition-all ease-in-out  duration-1000"
    >
      {/* {pending ? "Submiting" : "Send message"} */}
      {pending ? (
        <img src="/icons/spinner.svg" width={24} height={24} />
      ) : (
        "Send message"
      )}
      {!pending && (
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      )}
    </button>
  );
};

export default SubmitButton;

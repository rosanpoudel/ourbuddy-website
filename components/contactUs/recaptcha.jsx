import React, { useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ReCAPTCHAv3 = ({ action, onVerify }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const handleReCAPTCHA = async () => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha(action);
      onVerify(token);
    };

    handleReCAPTCHA();
  }, [action, executeRecaptcha, onVerify]);

  return null;
};

export default ReCAPTCHAv3;

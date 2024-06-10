"use server";

export default async function submitContactForm(formData) {
  const response = await fetch(
    "https://landing.ourbuddy.ai/contact",
    {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    { cache: "no-store" }
  );
  const res = await response.json();
  return res;
}

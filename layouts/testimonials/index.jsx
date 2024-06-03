import SectionTitle from "@/components/sectionTitle";
import React from "react";

const TestimonialCard = ({ title, clientName, company }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-3xl shadow-2xl shadow-gray-100 px-8 xl:px-10 py-10 xl:py-12  hover:-translate-y-4 transition-all duration-700">
      <div>
        <img src="/images/quotes.svg" alt={title} />
      </div>
      <div className="text-center leading-10 tracking-wider text-[20px] text-[#6e7085] italic mt-[50px] mb-[30px]">
        {title}
      </div>

      <div className="text-center">
        <p className="text-[#333333] text-[20px] font-[600] tracking-widest">
          {clientName}
        </p>
        <p className="text-[#a1a1a1] text-[16px] font-[500]">{company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const data = [
    {
      title:
        "Since we started using Ourbuddy.ai, our productivity has increased significantly, and our clients are happier than ever!",
      clientName: "Anil Pradhan",
      company: "Keyes Insurance",
    },

    {
      title:
        "The analytics feature has been a game-changer for us. We now understand our business better and can make more informed decisions.",
      clientName: "Roshan Poudel",
      company: "Nepal Life Insurance",
    },
  ];
  return (
    <div className="content-section bg-[#f8f8fc]" id="testimonials">
      <div className="container">
        <SectionTitle
          heading="What Our Clients Are Saying"
          subHeading="Testimonials"
          description="Learn how Ourbuddy.ai is revolutionizing insurance brokerages."
        />

        <div className="grid xl:grid-cols-3 gap-10">
          {data?.map((d, i) => {
            return (
              <TestimonialCard
                title={d?.title}
                clientName={d.clientName}
                company={d.company}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

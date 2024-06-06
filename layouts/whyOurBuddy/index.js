import WhyCard from "@/components/whyOurBuddyCard";
import SectionTitle from "../../components/sectionTitle";

const WhyOurBuddy = () => {
  return (
    <div className="content-section bg-[#f8f8fc]" id="benefits">
      <div className="container ">
        <div className="">
          <SectionTitle
            heading="Why Choose Ourbuddy.ai?"
            subHeading="Why OurBuddy"
            description="Experience unparalleled benefits designed to enhance your
              brokerage's success."
          />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            <WhyCard
              title="Close More Sales"
              description="Increase your conversion rates with personalized video messages that resonate with
              your prospects."
              icon="/icons/sales.svg"
            />
            <WhyCard
              title="Build Stronger Client Relationships"
              description="Foster trust and loyalty through personalized video communications that make clients
              feel valued and understood."
              icon="/icons/relationship.svg"
            />

            <WhyCard
              title="Onboard Clients and Provide Product Training Efficiently"
              description="Simplify and enhance the onboarding process with personalized video messages,
              ensuring clients are well-informed and confident in using your products."
              icon="/icons/training.svg"
            />
            <WhyCard
              title="Onboard and Train New Hires 10x Faster"
              description="Accelerate the training process for new employees with personalized video content,
              reducing time-to-productivity"
              icon="/icons/onboard.svg"
            />
            <WhyCard
              title="Create Training, Learning, and Solution Videos on the Go"
              description="Develop and share instructional videos quickly, improving internal workflows and
              communication with clients and prospects."
              icon="/icons/media-items.svg"
            />
            <WhyCard
              title="Central Video-Based Knowledge Hub"
              description="Establish a centralized repository of video content for training, learning, and reference,
              accessible to all team members and clients."
              icon="/icons/knowledge.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurBuddy;

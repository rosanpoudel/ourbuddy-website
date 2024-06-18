import ScrollToTop from "@/components/scrollToTop";
import SegmentAnalyticsInit from "@/components/segmentAnalyticsInit";
import BookDemo from "@/layouts/book-demo";
import ContactUs from "@/layouts/contact-us";
import Features from "@/layouts/features";
import Footer from "@/layouts/footer";
import HeroSection from "@/layouts/hero";
import Testimonials from "@/layouts/testimonials";
import UniqueAdvantage from "@/layouts/unique-advantage";
import VideoBenefits from "@/layouts/video-benefits";
import WhyOurBuddy from "@/layouts/whyOurBuddy";

export default function Home() {
  return (
    <main>
      <SegmentAnalyticsInit />
      <HeroSection />
      <WhyOurBuddy />
      <div className="bg-even">
        <BookDemo
          title="Is a meeting more convenient?"
          description="If you prefer discussing your needs over a call instead, book an appointment with our expert Sales team."
          btnText="Get the ball rolling"
        />
      </div>
      <Features />
      <UniqueAdvantage />
      <VideoBenefits />
      <Testimonials />
      <div className="bg-odd">
        <BookDemo
          title="Ready to Transform Your Brokerage?"
          description="Experience the Ourbuddy.ai difference today. Request a demo and see how our platform can
        elevate your brokerage."
          btnText="Request a demo"
        />
      </div>
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

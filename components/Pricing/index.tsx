"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Customized Pricing"
          paragraph="Discover tailored pricing that adapts to your style – self-paced, guided support, or a blend of both. Your ideal learning experience starts with Mind's flexible plans."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Flex"
            price={isMonthly ? "4.99" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Enjoy the freedom to set your own pace and schedule, allowing for a truly flexible and adaptive learning experience. Our instructors are ready to support throughout."
          >
            <OfferList text="Flexible Learning Schedule" status="active" />
            <OfferList text="Self-Paced Study" status="active" />
            <OfferList text="Cutting-Edge Technology" status="active" />
            <OfferList text="Unlimited Access" status="active" />
            <OfferList text="Independent Learning Modules" status="active" />
            <OfferList text="Cost-Effective" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Guided"
            price={isMonthly ? "49.99" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Receive personalized guidance with a dedicated supervisor, ensuring a structured and supportive learning experience tailored to your individual needs."
          >
            <OfferList text="Personalized Supervision" status="active" />
            <OfferList text="Regular Check-Ins" status="active" />
            <OfferList text="Tailored Learning Plans" status="active" />
            <OfferList text="Interactive Assistance" status="active" />
            <OfferList text="Progress Monitoring" status="active" />
            <OfferList text="Personalized Support" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Connect"
            price={isMonthly ? "79.99" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Experience the best of both worlds with a unique blend of online and onsite elements, providing a comprehensive and well-rounded educational environment."
          >
            <OfferList text="Blended Learning Experience" status="active" />
            <OfferList text="Digital Resources Integration" status="active" />
            <OfferList text="Onsite Interactions" status="active" />
            <OfferList text="Collaborative Learning" status="active" />
            <OfferList text="Real-world Application" status="active" />
            <OfferList text="Holistic Educational Environment" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BAFFC" />
              <stop offset="1" stopColor="#2BAFFC" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2BAFFC" />
              <stop offset="1" stopColor="#2BAFFC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

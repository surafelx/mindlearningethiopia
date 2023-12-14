import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Courses from "@/components/Courses"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "mind | Home",
  description: "This is Home for mind.et",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Courses />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NordicWardrobe - Premium Scandinavian Menswear",
  description: "Learn about NordicWardrobe's commitment to premium quality, timeless design, and Scandinavian craftsmanship in men's fashion",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About NordicWardrobe"
        description="Discover our story of bringing premium Scandinavian style and quality to modern menswear. Timeless design meets contemporary craftsmanship."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

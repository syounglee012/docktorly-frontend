import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Head from "next/head";
import Script from 'next/script'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for Docktorly",
  // other metadata...
};

const AboutPage = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GLS7RWLBH7"
      ></Script>
      <Script id='google analytics' strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GLS7RWLBH7');`}
      </Script>
      <Breadcrumb
        pageName="About Page"
        description="At Docktorly, we understand the challenges that direct
					primary care doctors face when seeking specialist opinions
					for their patients. That&#39;s why we have developed a
					revolutionary platform that streamlines the consultation
					process and enhances patient care."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Page" description="Contact us" />

      <Contact />
    </>
  );
};

export default ContactPage;

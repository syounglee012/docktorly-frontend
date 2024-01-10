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
      <div className='mx-20 text-gray-500'><p>Email: <span className="blockspam" aria-hidden="true">PLEASE GO AWAY!</span>info@docktorly.com</p>
</div>

      <Contact />
    </>
  );
};

export default ContactPage;

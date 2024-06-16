import Footer from "@/components/footer";
import Header, { playfair } from "@/components/header";
import { cn } from "@/utils/cn";
import React from "react";

const privacy = () => {
  return (
    <div className="max-w-5xl h-full min-h-screen border-r border-l border-dashed border-subOrange mx-auto">
      <Header />
      <div className="pt-28">
        <p
          className={cn(
            playfair.className,
            "text-center border-b border-dashed border-subOrange pb-10 max-w-2xl mx-auto text-subOrange text-[2rem]"
          )}
        >
          Privacy Policy
        </p>
        <div className="flex mt-10 flex-col gap-5 max-w-3xl mx-auto">
          <p className="text-start text-secondary/75 italic">
            At Grace, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            outlines how we collect, use, disclose, and protect the information
            you provide to us when you use our website or interact with our
            services.
          </p>
          <h2 className="text-start italic">Information We Collect</h2>
          <p className="text-start text-secondary/75 italic">
            We may collect personal information from you when you visit our
            website, make a reservation, or sign up for our newsletter. This
            information may include your name, email address, phone number, and
            any other information you choose to provide to us.
          </p>
          <h2 className="text-start italic">How We Use Your Information</h2>
          <p className="text-start text-secondary/75 italic">
            We may use the information we collect from you to:
          </p>
          <ul className="list-disc list-inside">
            <li>Process reservations and bookings</li>
            <li>Respond to inquiries and customer service requests</li>
            <li>Send you promotional offers, newsletters, and updates</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
          <h2 className="text-start italic">Disclosure of Your Information</h2>
          <p className="text-start text-secondary/75 italic">
            We may disclose your personal information to third-party service
            providers who assist us in operating our website, processing
            reservations, or providing other services to you. We may also
            disclose your information when required by law or to protect our
            rights, property, or safety, or the rights, property, or safety of
            others.
          </p>
          <h2 className="text-start italic">Data Security</h2>
          <p className="text-start text-secondary/75 italic">
            We take reasonable measures to protect the security of your personal
            information and prevent unauthorized access, use, or disclosure.
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee the absolute
            security of your information.
          </p>
          <h2 className="text-start italic">Your Choices</h2>
          <p className="text-start text-secondary/75 italic">
            You may choose not to provide certain personal information to us,
            but this may limit your ability to use certain features of our
            website or receive certain services from us. You may also opt out of
            receiving promotional communications from us by following the
            instructions provided in the communication.
          </p>
          <h2 className="text-start italic">Changes to This Privacy Policy</h2>
          <p className="text-start text-secondary/75 italic">
            We reserve the right to update or modify this Privacy Policy at any
            time, without prior notice. Any changes to this Privacy Policy will
            be posted on this page, and the &quot;Last Updated&quot; date at the
            top of the page will be revised accordingly.
          </p>
          <h2 className="text-start italic">Contact Us</h2>
          <p className="text-start text-secondary/75 italic">
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at [insert contact
            information].
          </p>
          <h2 className="text-start italic">Last Updated: [insert date]</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default privacy;

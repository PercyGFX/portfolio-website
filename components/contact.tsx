"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { socials } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.4);

  return (
    <section ref={ref} id="contact" className="scroll-mt-24">
      <SectionHeading number="05" title="Contact" />

      <div className="grid gap-10 px-4 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="max-w-[16ch] font-display text-3xl leading-tight sm:text-5xl">
            Have a project in mind?{" "}
            <em className="text-accent">Let&apos;s talk.</em>
          </h3>
          <p className="mt-6 max-w-[40ch] leading-relaxed text-ink/70">
            Write me directly at{" "}
            <a className="link-underline" href={`mailto:${socials.email}`}>
              {socials.email}
            </a>{" "}
            or use the form — it lands in the same inbox.
          </p>
          <p className="label mt-10">
            Response time — usually within 24 hours
          </p>
        </div>

        <form
          className="flex flex-col"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <label className="label" htmlFor="senderEmail">
            Your email
          </label>
          <input
            id="senderEmail"
            className="mt-2 border-b border-line bg-transparent pb-3 outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="you@example.com"
          />

          <label className="label mt-8" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="mt-2 h-40 resize-none border-b border-line bg-transparent pb-3 outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
            name="message"
            placeholder="What are we building?"
            required
            maxLength={5000}
          />

          <div className="mt-8">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </section>
  );
}

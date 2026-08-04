"use client";

import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section className="mt-16">
      <h2 className="text-lg font-semibold tracking-tight">Contact</h2>

      <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
        Write me at{" "}
        <a
          className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          href={`mailto:${socials.email}`}
        >
          {socials.email}
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-6 flex flex-col gap-3"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="rounded-md border border-line bg-transparent px-3 py-2 text-[15px] outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-36 resize-none rounded-md border border-line bg-transparent px-3 py-2 text-[15px] outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div>
          <SubmitBtn />
        </div>
      </form>
    </section>
  );
}

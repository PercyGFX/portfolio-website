"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="border border-ink bg-ink px-6 py-3 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-paper transition-colors hover:border-accent hover:bg-accent disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Sending…" : "Send message →"}
    </button>
  );
}

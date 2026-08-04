"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

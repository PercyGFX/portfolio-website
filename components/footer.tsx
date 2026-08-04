import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line pt-6">
      <p className="text-xs text-ink/50">
        © {new Date().getFullYear()} Kelum Isuranga
      </p>
    </footer>
  );
}

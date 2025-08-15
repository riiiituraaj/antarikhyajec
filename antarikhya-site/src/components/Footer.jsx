import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-400 bg-white text-black">
      © {new Date().getFullYear()} Antarikhya — Jorhat Engineering College.
    </footer>
  );
}

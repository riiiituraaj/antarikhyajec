import React from "react";

export default function Governance() {
  return (
    <section id="governance" className="section bg-white text-black" data-scroll-section>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display text-3xl text-center">Governance & Structure</h2>
        <div className="mt-10 space-y-4">
          <details className="p-6 border border-gray-200 rounded">
            <summary className="cursor-pointer font-medium">Leadership & Communication</summary>
            <p className="mt-3 text-gray-700">Decisions are made jointly by department leads and coordinators with transparent communication and shared calendars.</p>
          </details>
          <details className="p-6 border border-gray-200 rounded">
            <summary className="cursor-pointer font-medium">Meetings</summary>
            <p className="mt-3 text-gray-700">Monthly general meetings for all members; weekly coordination among team leads prior to general meetings.</p>
          </details>
          <details className="p-6 border border-gray-200 rounded">
            <summary className="cursor-pointer font-medium">Selection & Amendments</summary>
            <p className="mt-3 text-gray-700">Future leaders are selected on merit (after ≥1 year as coordinator); amendments require a two-thirds majority.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

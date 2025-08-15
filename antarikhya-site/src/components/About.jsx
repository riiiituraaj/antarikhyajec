import React from "react";

export default function About() {
  return (
    <section id="about" className="section bg-white text-black" data-scroll-section>
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-4xl">About Antarikhya</h2>
          <p className="mt-6 text-lg text-gray-700">
            ANTARIKHYA is the Astronomy and Science Club of Jorhat Engineering College, fostering a community passionate about astronomy, space exploration, and scientific curiosity.
          </p>
          <p className="mt-4 text-gray-600">
            We provide a platform for stargazing, discussions, technical projects, workshops, and public outreach programs.
          </p>
        </div>
        <div className="w-full h-80 overflow-hidden">
          <img src="/src/assets/images/hero.jpg" alt="Telescope" className="full-bleed" />
        </div>
      </div>
    </section>
  );
}

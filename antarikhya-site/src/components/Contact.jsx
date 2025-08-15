import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-black text-white" data-scroll-section>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl text-center">Contact</h2>
        <form className="mt-8 grid gap-4">
          <input className="px-4 py-3 bg-transparent border border-white/10 rounded text-white" placeholder="Name" required />
          <input className="px-4 py-3 bg-transparent border border-white/10 rounded text-white" placeholder="Email" type="email" required />
          <textarea className="px-4 py-3 bg-transparent border border-white/10 rounded text-white" rows="5" placeholder="Message" required></textarea>
          <button className="w-max px-6 py-3 bg-white text-black rounded font-medium">Send</button>
        </form>
      </div>
    </section>
  );
}

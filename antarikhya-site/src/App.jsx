import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Governance from "./components/Governance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    // init locomotive
    const loco = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // tell ScrollTrigger to use these proxy methods for the "#main-container" element:
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length ? loco.scrollTo(value, { duration: 0, disableLerp: true }) : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    loco.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => loco.update());
    ScrollTrigger.refresh();

    // panel animations — slide up effect
    const panels = document.querySelectorAll("[data-scroll-section]");
    panels.forEach((panel) => {
      const inner = panel.querySelector(".panel-inner") || panel;
      gsap.fromTo(inner,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            scroller: scrollEl,
            start: "top 75%",
            end: "top 35%",
            toggleActions: "play none none reverse"
          }
        });
    });

    // cleanup
    return () => {
      if (loco) loco.destroy();
      ScrollTrigger.removeEventListener("refresh", () => loco.update());
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="main" data-scroll-container>
        <main>
          <Hero />
          <About />
          <Team />
          <Events />
          <Gallery />
          <Governance />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

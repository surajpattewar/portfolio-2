import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMagnified, setIsMagnified] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickPos({ x: e.clientX, y: e.clientY });
    setIsMagnified(true);
  };

  useEffect(() => {
    if (!isMagnified) return;

    const handleMouseMove = (e: MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - clickPos.x, 2) +
        Math.pow(e.clientY - clickPos.y, 2)
      );
      // Close if mouse moves more than 20px from the click point
      if (distance > 20) {
        setIsMagnified(false);
      }
    };

    // Short delay to avoid closing from instant click micro-movements
    const timeoutId = setTimeout(() => {
      window.addEventListener("mousemove", handleMouseMove);
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMagnified, clickPos]);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-logo" data-cursor="disable" onClick={handleImageClick}>
          <img src="/images/suraj_image.jpg" alt="Suraj Pattewar" className="navbar-logo-img" />
          {isMagnified && (
            <div className="magnifying-lens" onClick={(e) => e.stopPropagation()}>
              <img src="/images/suraj_image.jpg" alt="Suraj Pattewar Magnified" />
            </div>
          )}
        </a>
        <a
          href="mailto:surajpattewar95@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          surajpattewar95@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>

      {isMagnified && (
        <div className="magnifying-glass-overlay" onClick={() => setIsMagnified(false)} />
      )}
    </>
  );
};

export default Navbar;

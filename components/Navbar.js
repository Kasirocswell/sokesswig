import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const section = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0;
      });

      if (section) {
        setCurrentSection(section.getAttribute("data-section"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function returnToHome() {
    router.push("/");
  }
  function returnToFlavors() {
    router.push("./flavors");
  }
  function returnToAbout() {
    router.push("./about");
  }
  function returnToContact() {
    router.push("./contact");
  }

  return (
    <nav className={`fixed top-0 w-full`}>
      <div className="flex flex-row justify-center">
        <div className="px-4" onClick={returnToHome}>
          Home
        </div>
        <div className="px-4" onClick={returnToFlavors}>
          Flavors
        </div>
        <div className="px-4" onClick={returnToAbout}>
          About
        </div>
        <div className="px-4" onClick={returnToContact}>
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

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

  return (
    <nav
      className={`fixed top-0 w-full ${
        currentSection === "section1"
          ? "bg-amber-300"
          : currentSection === "section2"
          ? "bg-red-600"
          : "bg-green-300"
      }`}
    >
      <div className="flex flex-row justify-center">
        <div className="px-4">Home</div>
        <div className="px-4">Flavors</div>
        <div className="px-4">About</div>
        <div className="px-4">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;

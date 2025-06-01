"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScroll = useRef(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setShowHeader(false); // scroll down, hide
      } else {
        setShowHeader(true); // scroll up, show
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 bg-white border-b-4 border-black transition-transform duration-300",
          showHeader ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black text-black relative transition-transform duration-300 hover:translate-x-1"
          >
            <span className="relative z-10">Hanif Aslam</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((section) =>
              section === "contact" ? (
                <div key={section} className="flex items-center gap-2">
                  <Link
                    href={`#${section}`}
                    className={cn(
                      "text-black font-bold uppercase relative transition-all duration-300 hover:translate-y-[-2px]",
                      activeSection === section
                        ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-hot-red"
                        : "text-gray-700 hover:text-black"
                    )}
                  >
                    {section}
                  </Link>
                  <div className="flex items-center gap-2 ml-1">
                    <a
                      href="https://github.com/hanifaslam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black rounded-md p-1 transition-colors hover:bg-black hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hanifaslam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black rounded-md p-1 transition-colors hover:bg-black hover:text-white"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com/hanifaslamm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black rounded-md p-1 transition-colors hover:bg-black hover:text-white"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={cn(
                    "text-black font-bold uppercase relative transition-all duration-300 hover:translate-y-[-2px]",
                    activeSection === section
                      ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-hot-red"
                      : "text-gray-700 hover:text-black"
                  )}
                >
                  {section}
                </Link>
              )
            )}
          </nav>
          <Button
            variant="outline"
            className="md:hidden rounded-none border-4 border-black w-12 h-12 p-0 hover:bg-electric-green transition-transform duration-300 hover:translate-y-[-2px]"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-30 flex flex-col items-center justify-center transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((section) =>
            section === "contact" ? (
              <div key={section} className="flex items-center gap-2">
                <Link
                  href={`#${section}`}
                  className="text-black text-3xl font-black uppercase relative"
                  onClick={closeMenu}
                >
                  <span className="relative z-10">{section}</span>
                  {activeSection === section && (
                    <span className="absolute -bottom-2 left-0 w-full h-4 bg-electric-green -z-10 transform -rotate-1"></span>
                  )}
                </Link>
                <div className="flex items-center gap-1 ml-1">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black rounded-md p-1 transition-colors hover:bg-electric-green"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black rounded-md p-1 transition-colors hover:bg-electric-blue"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black rounded-md p-1 transition-colors hover:bg-hot-red"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ) : (
              <Link
                key={section}
                href={`#${section}`}
                className="text-black text-3xl font-black uppercase relative"
                onClick={closeMenu}
              >
                <span className="relative z-10">{section}</span>
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-4 bg-electric-green -z-10 transform -rotate-1"></span>
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

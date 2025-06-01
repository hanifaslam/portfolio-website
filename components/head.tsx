"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: string;
}

export default function Head({ activeSection }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScroll = useRef(0);

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
          <Link href="/">
            <Button
              className="rounded-none border-4 border-black bg-hot-red text-black hover:bg-black hover:text-white font-bold px-6 py-3 h-auto transform rotate-1 transition-transform duration-300 hover:rotate-0 hover:translate-y-[-4px]"
              style={{ boxShadow: "5px 5px 0 #000" }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
}

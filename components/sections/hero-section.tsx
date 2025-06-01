"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center py-20 border-b-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-40 h-40 bg-electric-blue border-4 border-black transform rotate-12 hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-hot-red border-4 border-black transform -rotate-6 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10 -mt-14">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div
              className="inline-block px-4 py-2 bg-white border-4 border-black transform -rotate-2 mb-4 transition-transform duration-300 group-hover:translate-x-2"
              style={{ boxShadow: "5px 5px 0 #000" }}
            >
              <span className="font-bold text-lg uppercase">
                Fullstack Web and Mobile Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black leading-none transition-transform duration-300 group-hover:-translate-x-2">
              Hanif Aslam <br /> Febru Putra
            </h1>
            <div
              className="p-6 bg-white border-4 border-black max-w-full transform translate-y-2 relative transition-transform duration-300 group-hover:translate-y-0"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <p className="text-1xl">
                I’m a Fullstack Web and Mobile Developer who builds systems that
                don’t just run — they scale, stay secure, and go live. <br /> I
                have experience with Laravel, React, NextJS, and more.
              </p>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-electric-green border-4 border-black"></div>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#contact">
                <Button
                  className="group rounded-none border-4 border-black bg-electric-green text-black hover:bg-black hover:text-white font-bold px-8 py-6 h-auto transition-transform duration-300 hover:translate-y-1 text-1xl flex items-center gap-2"
                  style={{ boxShadow: "5px 5px 0 #000" }}
                >
                  Contact Me
                  <img
                    src="/chevron-right.png"
                    alt="Contact"
                    className="w-6 h-6 p-1 rounded transition-all duration-200 group-hover:invert group-hover:brightness-200"
                  />
                </Button>
              </Link>
              <a
                href="/sertif/cv-hanif.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-none border-4 border-black bg-white text-black hover:bg-hot-red hover:text-black font-bold px-8 py-6 h-auto transition-transform duration-300 hover:translate-y-1 text-1xl flex items-center gap-2"
                  style={{ boxShadow: "5px 5px 0 #000" }}
                >
                  Download CV
                  <img
                    src="/arrow-down-tray.png"
                    alt="Download"
                    className="w-6 h-6"
                  />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 border-8 border-black bg-white transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:translate-x-2"
              style={{ boxShadow: "15px 15px 0 #000" }}
            >
              <div className="absolute inset-0 bg-gray-200 transform -translate-x-4 -translate-y-4 border-8 border-black transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2">
                <Image
                  src="/profile.jpeg?height=400&width=400"
                  alt="Hanif Aslam Febru Putra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-hot-red border-4 border-black transform rotate-12 transition-transform duration-300 hover:rotate-0"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-electric-blue border-4 border-black transform -rotate-6 transition-transform duration-300 hover:rotate-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

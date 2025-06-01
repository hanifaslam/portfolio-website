"use client";

import React, { useRef } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_fr5zf09", // GANTI DENGAN SERVICE ID
        "template_gx42f4d", // GANTI DENGAN TEMPLATE ID
        formRef.current,
        "g6hXFQbiBrIZoOI_i" // GANTI DENGAN PUBLIC KEY
      )
      .then(() => {
        toast.success("Pesan kamu berhasil dikirim!");
        formRef.current?.reset();
      })
      .catch((error) => {
        toast.error("Gagal mengirim pesan. Coba lagi ya!");
      });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-electric-green border-4 border-black transform -rotate-12 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-block px-6 py-3 bg-black text-white font-black text-2xl uppercase mb-12 transform -rotate-2"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            GET IN TOUCH
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div
                className="p-6 bg-white border-4 border-black relative transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <h3 className="text-2xl font-black mb-6 uppercase">
                  Contact Info
                </h3>

                <div className="space-y-6">
                  <ContactMethod
                    icon={<Mail className="w-5 h-5" />}
                    title="Email"
                    value="hanifaslam.works@gmail.com"
                    linkText="SEND AN EMAIL"
                    href="mailto:hanifaslam.works@gmail.com"
                    color="electric-green"
                  />
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4">Social Media</h4>
                  <div className="flex gap-4">
                    <SocialLink
                      href="https://github.com/hanifaslam"
                      icon={<Github className="w-5 h-5" />}
                      label="GitHub"
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/hanifaslam/"
                      icon={<Linkedin className="w-5 h-5" />}
                      label="LinkedIn"
                    />
                    <SocialLink
                      href="https://instagram.com/hanifaslamm"
                      icon={<Instagram className="w-5 h-5" />}
                      label="Instagram"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-electric-blue border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
              </div>

              <div
                className="p-6 bg-black text-white relative transform translate-x-4 transition-transform duration-300 hover:-translate-x-2 hover:translate-y-2"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <p className="text-xl font-bold">
                  "Let's create something bold, raw, and unforgettable together.
                  Reach out and let's break some design rules."
                </p>
              </div>
            </div>

            <div
              className="bg-white border-4 border-black relative transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2 hover:rotate-0"
              style={{
                boxShadow: "8px 8px 0 #000",
                transform: "rotate(-1deg)"
              }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-black mb-6 uppercase">
                  Send Message
                </h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-black mb-1 uppercase"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-electric-green transition-transform duration-300 hover:translate-x-1"
                      placeholder="YOUR NAME"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-black mb-1 uppercase"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-electric-green transition-transform duration-300 hover:translate-x-1"
                      placeholder="YOUR EMAIL"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-black mb-1 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-electric-green transition-transform duration-300 hover:translate-x-1"
                      placeholder="YOUR MESSAGE"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-none border-4 border-black bg-electric-blue text-black hover:bg-black hover:text-white font-bold py-4 h-auto transition-transform duration-300 hover:translate-y-[-4px]"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-hot-red border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  linkText: string;
  href: string;
  color: string;
}

function ContactMethod({
  icon,
  title,
  value,
  linkText,
  href,
  color
}: ContactMethodProps) {
  return (
    <div className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
      <div
        className={`w-12 h-12 bg-${color} border-2 border-black flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-700">{value}</p>
        <a href={href} className="inline-block mt-1 font-bold relative group">
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            {linkText}
          </span>
          <span
            className={`absolute bottom-0 left-0 w-full h-2 bg-${color} -z-10 transition-all duration-300 group-hover:h-3`}
          ></span>
        </a>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center transition-colors duration-300 hover:bg-black hover:text-white rounded-md"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}

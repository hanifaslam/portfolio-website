"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsSectionView() {
  const projects: ProjectCardProps[] = [
    {
      title: "FinTrack - Finance Tracking App",
      description:
        "A simple and intuitive finance tracking app designed to help users record income, expenses, and monitor financial health with ease.",
      techStack: ["Figma"],
      role: "UI UX Designer",
      rotation: -1,
      decoratorPosition: "top-right",
      decoratorColor: "electric-green",
      image: "/profile.jpeg",
      previewUrl:
        "https://www.figma.com/proto/lVOTWn8nuIUSIsZ0hsA5p4/finTrack?node-id=205-262&starting-point-node-id=0%3A291&t=VuMldQ0DSiPbqeV1-1"
    },
    {
      title: "Flexy - Ticketing Management",
      description:
        "A mobile application for managing ticket and product sales, featuring user-friendly interfaces and real-time transaction tracking.",
      techStack: ["Flutter", "Laravel", "MySQL"],
      role: "Frontend Developer",
      rotation: 1,
      decoratorPosition: "bottom-left",
      decoratorColor: "hot-red",
      image: "photos/flexy.png",
      projectUrl: "https://github.com/hanifaslam/appflexy",
      previewUrl: "#",
      previewButtonColor: "bg-white text-black",
      previewButtonDisabled: true
    },
    {
      title: "Ujian Online Application",
      description:
        "A web-based application for managing online exams, featuring user roles for admins and educators with real-time monitoring.",
      techStack: ["Inertia.js", "Tailwind CSS", "Laravel", "MySQL"],
      role: "Full-Stack Developer",
      rotation: 1,
      decoratorPosition: "top-left",
      decoratorColor: "electric-blue",
      image: "/profile.jpeg",
      projectUrl: "https://github.com/hanifaslam/aplikasi-ujian-online",
      previewUrl: "https://www.figma.com/file/ujian-online-design",
      previewButtonColor: "bg-white text-black",
      previewButtonDisabled: true
    },
    {
      title: "Finari - Crowdfunding App",
      description:
        "A crowdfunding app that makes investing simple and secure, enabling anyone to support projects and grow their capital.",
      techStack: ["Flutter", "Laravel", "MySQL"],
      role: "Frontend Developer",
      rotation: -1,
      decoratorPosition: "bottom-right",
      decoratorColor: "electric-green",
      image: "/photos/finari.png",
      projectUrl: "https://github.com/SabillillahX/finari",
      previewUrl: "https://www.figma.com/file/finari-design",
      previewButtonColor: "bg-white text-black",
      previewButtonDisabled: true
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects, skills, and experiences as a web and mobile developer, built to highlight my work and connect with potential collaborators or employers.",
      techStack: ["Next.js", "Typescript", "Tailwind CSS"],
      role: "Frontend Developer",
      rotation: -1,
      decoratorPosition: "bottom-right",
      decoratorColor: "electric-green",
      image: "/photos/finari.png",
      projectUrl: "https://github.com/SabillillahX/finari",
      previewUrl: "https://www.figma.com/file/finari-design",
      previewButtonColor: "bg-white text-black",
      previewButtonDisabled: true
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 border-b-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue border-4 border-black transform rotate-12 hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-hot-red border-4 border-black transform -rotate-6 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-block px-6 py-3 bg-black text-white font-black text-2xl uppercase mb-12 transform -rotate-2"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            FEATURED PROJECTS
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                role={project.role}
                rotation={project.rotation}
                decoratorPosition={project.decoratorPosition}
                decoratorColor={project.decoratorColor}
                image={project.image}
                previewUrl={project.previewUrl}
                projectUrl={project.projectUrl}
                projectButtonColor={project.projectButtonColor}
                projectButtonDisabled={project.projectButtonDisabled}
                previewButtonColor={project.previewButtonColor}
                previewButtonDisabled={project.previewButtonDisabled}
              />
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  rotation: number;
  decoratorPosition: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  decoratorColor: string;
  image: string;
  previewUrl?: string;
  projectUrl?: string;
  projectButtonColor?: string;
  projectButtonDisabled?: boolean;
  previewButtonColor?: string;
  previewButtonDisabled?: boolean;
}

function ProjectCard({
  title,
  description,
  techStack,
  role,
  rotation,
  decoratorPosition,
  decoratorColor,
  image,
  projectUrl,
  previewUrl,
  projectButtonColor,
  projectButtonDisabled,
  previewButtonColor,
  previewButtonDisabled
}: ProjectCardProps) {
  const decoratorPositionClasses = {
    "top-right": "-top-4 -right-4",
    "top-left": "-top-4 -left-4",
    "bottom-right": "-bottom-4 -right-4",
    "bottom-left": "-bottom-4 -left-4"
  };

  return (
    <div
      className="bg-white border-4 border-black relative group transition-transform duration-300 hover:translate-y-[-8px] hover:translate-x-[4px]"
      style={{
        boxShadow: "8px 8px 0 #000",
        transform: `rotate(${rotation}deg)`
      }}
    >
      <div className="h-64 overflow-hidden border-b-4 border-black">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black uppercase mb-2 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-700 mb-4 transition-transform duration-300 group-hover:translate-x-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black text-white text-xs font-bold transition-transform duration-300 hover:translate-y-[-2px] hover:translate-x-1"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
          ROLE: {role}
        </p>
        {/* Tombol Project */}
        <div className="flex gap-2 mt-4">
          {projectUrl && (
            <a
              href={projectButtonDisabled ? undefined : projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-4 px-3 py-2 font-semibold text-xs border border-black shadow-[2px_2px_0px_#000] transition-transform hover:translate-x-1 hover:-translate-y-1
      ${projectButtonColor ? projectButtonColor : "bg-black text-white"}
      ${projectButtonDisabled ? "pointer-events-none opacity-50" : ""}
    `}
              tabIndex={projectButtonDisabled ? -1 : 0}
              aria-disabled={projectButtonDisabled}
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}

          {previewUrl && (
            <a
              href={previewButtonDisabled ? undefined : previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mt-4 px-3 py-2 font-semibold text-xs border border-black shadow-[2px_2px_0px_#000] transition-transform hover:translate-x-1 hover:-translate-y-1
      ${previewButtonColor ? previewButtonColor : "bg-black text-white"}
      ${previewButtonDisabled ? "pointer-events-none opacity-50" : ""}
    `}
              tabIndex={previewButtonDisabled ? -1 : 0}
              aria-disabled={previewButtonDisabled}
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div
        className={`absolute ${decoratorPositionClasses[decoratorPosition]} w-8 h-8 bg-${decoratorColor} border-4 border-black transition-transform duration-300 group-hover:rotate-45`}
      ></div>
    </div>
  );
}

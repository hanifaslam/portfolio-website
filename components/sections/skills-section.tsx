import type React from "react";
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 border-b-4 border-black relative overflow-hidden"
    >
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-electric-green border-4 border-black transform rotate-12 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="inline-block px-6 py-3 bg-black text-white font-black text-2xl uppercase mb-12 transform -rotate-2"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)" }}
          >
            MY SKILLS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Technical Skills */}
            <div className="space-y-6">
              <div
                className="bg-white border-4 border-black p-6 relative transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2 group "
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <h3 className="text-2xl font-black mb-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-2">
                  Technical Skills
                </h3>
                <div className="space-y-5">
                  <SkillBar
                    title="Frontend Development"
                    skills={[
                      "HTML/CSS",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS"
                    ]}
                  />
                  <SkillBar
                    title="Backend Development"
                    skills={["Laravel", "PHP", "Node.js", "REST API"]}
                  />
                  <SkillBar
                    title="Mobile Development"
                    skills={["React Native", "Flutter"]}
                  />
                  <SkillBar title="Database" skills={["MySQL", "Firebase"]} />
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-electric-green border-4 border-black transition-transform duration-300 group-hover:rotate-45"></div>
              </div>
            </div>

            {/* Right Column - Soft Skills */}
            <div className="space-y-6">
              <div
                className="bg-white border-4 border-black p-6 relative transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2 group"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <h3 className="text-2xl font-black mb-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:-rotate-2">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <SoftSkillCard
                    title="Problem Solving"
                    description="Finding unconventional solutions"
                    color="electric-green"
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L20 7.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12V21"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12L4 7.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    rotation={1}
                  />
                  <SoftSkillCard
                    title="Communication"
                    description="Expressing bold ideas clearly"
                    color="electric-blue"
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.06 19.714 7.8 19.2L3 20L4.2 15.8C3.45 14.566 3 13.118 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    rotation={-1}
                  />
                  <SoftSkillCard
                    title="Organization"
                    description="Structuring chaotic elements"
                    color="hot-red"
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M14.5 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7.5L14.5 2Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 2V8H20"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 13H8"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 17H8"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 9H9H8"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    rotation={-1}
                  />
                  <SoftSkillCard
                    title="Adaptability"
                    description="Adjusting to new technologies"
                    color="electric-green"
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                    rotation={1}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-black text-white relative transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                    <h4 className="text-base font-bold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                      Design Tools Mastery
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Figma", "Photoshop", "CorelDRAW", "Canva"].map(
                        (tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-white text-black border-2 border-white text-xs font-bold transition-transform duration-300 hover:translate-y-1 hover:-translate-x-1 group-hover:translate-x-1"
                            style={{ transform: "rotate(-1deg)" }}
                          >
                            {tool}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-black text-white relative transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                    <h4 className="text-base font-bold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                      Interest
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Technology Trends", "Web Development", "Mobile Development", "Creative Problem Solving"].map(
                        (tool) => (
                          <span
                            key={tool}
                            className="px-2 py-1 bg-white text-black border-2 border-white text-xs font-bold transition-transform duration-300 hover:translate-y-1 hover:-translate-x-1 group-hover:translate-x-1"
                            style={{ transform: "rotate(-1deg)" }}
                          >
                            {tool}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-hot-red border-4 border-black transition-transform duration-300 group-hover:rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  title: string;
  skills: string[];
}

function SkillBar({ title, skills }: SkillBarProps) {
  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-base transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h4>
      </div>
      {/* <div className="w-full h-6 bg-gray-200 border-2 border-black relative overflow-hidden">
      </div> */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-white border-2 border-black text-xs font-bold transition-transform duration-300 hover:translate-y-1 hover:-translate-x-1 group-hover:translate-x-1"
            style={{ transform: "rotate(-1deg)" }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

interface SoftSkillCardProps {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  rotation: number;
}

function SoftSkillCard({
  title,
  description,
  color,
  icon,
  rotation
}: SoftSkillCardProps) {
  return (
    <div
      className="border-2 border-black p-3 bg-white relative transition-all duration-300 hover:border-3 hover:-translate-y-1 hover:translate-x-1 group"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`w-8 h-8 bg-${color} border-2 border-black flex items-center justify-center mb-2 transition-transform duration-300 group-hover:rotate-12`}
      >
        {icon}
      </div>
      <h4 className="text-base font-bold transition-transform duration-300 group-hover:translate-x-1">
        {title}
      </h4>
      <p className="text-xs transition-transform duration-300 group-hover:translate-x-1">
        {description}
      </p>
    </div>
  );
}

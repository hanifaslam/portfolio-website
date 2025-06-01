export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 border-b-4 border-black relative overflow-hidden"
    >
      <div className="absolute top-40 left-10 w-32 h-32 bg-hot-red border-4 border-black transform -rotate-12 hidden md:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div
                className="inline-block px-6 py-3 bg-black text-white font-black text-2xl uppercase mb-8 transform -rotate-2"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%)"
                }}
              >
                ABOUT ME
              </div>

              <div
                className="p-6 bg-white border-4 border-black relative mb-8 transform translate-x-0 md:translate-x-8 transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <h3 className="text-2xl font-black mb-4 uppercase">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-electric-green pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                    <h4 className="font-bold">
                      Power Electronics and Communication Engineering
                    </h4>
                    <p className="text-gray-700">
                      SMK Negeri 7 Semarang, 2018-2022
                    </p>
                  </div>
                  <div className="border-l-4 border-electric-blue pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                    <h4 className="font-bold">
                      Associate Degree Candidate in Computer Science
                    </h4>
                    <p className="text-gray-700">
                      Semarang State Polytechnic, 2023 – Present
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
              </div>
            </div>

            <div className="flex-1">
              <div
                className="p-6 bg-white border-4 border-black relative transform -translate-x-0 md:-translate-y-8 md:translate-x-10 transition-transform duration-300 hover:translate-x-4"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <h3 className="text-2xl font-black mb-4 uppercase">
                  Professional Experience
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
                    <div className="w-6 h-6 bg-electric-green border-2 border-black flex-shrink-0 mt-1 transition-transform duration-300 hover:rotate-45"></div>
                    <div>
                      <h4 className="font-bold">
                        Internship – PT. Indonesia Power Semarang PGU
                      </h4>
                      <p className="text-gray-700">
                        Assisted technicians with maintenance and calibration
                        tasks while meeting daily targets and working in a team.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
                    <div className="w-6 h-6 bg-electric-blue border-2 border-black flex-shrink-0 mt-1 transition-transform duration-300 hover:rotate-45"></div>
                    <div>
                      <h4 className="font-bold">
                        Internship – PT. Telkom Akses Semarang
                      </h4>
                      <p className="text-gray-700">
                        Managed warehouse materials and supported the
                        troubleshooting team in handling customer reports.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2">
                    <div className="w-6 h-6 bg-hot-red border-2 border-black flex-shrink-0 mt-1 transition-transform duration-300 hover:rotate-45"></div>
                    <div>
                      <h4 className="font-bold">
                        Work Experience – PT. Sima Agustus Jakarta (Videotron)
                      </h4>
                      <p className="text-gray-700">
                        Repaired videotron modules and coordinated with
                        technicians to prepare materials for client events.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-hot-red border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
              </div>

              <div
                className="p-6 bg-black text-white border-4 border-black relative transform translate-x-0 md:translate-x-12 transition-transform duration-300 hover:translate-x-4"
                style={{ boxShadow: "8px 8px 0 #000" }}
              >
                <p className="text-xl font-bold">
                  "I don't just build websites and apps. I create digital
                  experiences that break the mold."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

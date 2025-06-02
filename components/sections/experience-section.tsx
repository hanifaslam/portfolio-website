export default function ExperienceSection() {
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
                Certifications
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
                {/* Indonesia Power */}
                <div
                  className="p-6 bg-white border-4 border-black relative transform translate-x-0 transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                  style={{ boxShadow: "8px 8px 0 #000" }}
                >
                  <h3 className="text-2xl font-black mb-4">Internship</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-electric-green pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                      <h4 className="font-bold">
                        Control and Instrumentation Maintenance
                      </h4>
                      <p className="text-gray-700">
                        PT. Indonesia Power Semarang PGU, June 2021
                      </p>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
                  {/* Tombol See Details */}
                  <a
                    href="sertif/sertifikat_IP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-black text-white font-semibold text-sm border shadow-[4px_4px_0px_#d1d5db] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                          />
                        </svg> */}
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                </div>

                {/* Telkom Akses */}
                <div
                  className="p-6 bg-white border-4 border-black relative transform translate-x-0  transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                  style={{ boxShadow: "8px 8px 0 #000" }}
                >
                  <h3 className="text-2xl font-black mb-4">Internship</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-electric-green pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                      <h4 className="font-bold">Technician</h4>
                      <p className="text-gray-700">
                        PT. Telkom Akses Semarang, October - December 2021
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
                  {/* Tombol See Details */}
                  <a
                    href="sertif/sertifikat_TA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-black text-white font-semibold text-sm border shadow-[4px_4px_0px_#d1d5db] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                          />
                        </svg> */}
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                </div>

                

                {/* Career Essentials in Generative AI */}
                <div
                  className="p-6 bg-white border-4 border-black relative transform translate-x-0  transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                  style={{ boxShadow: "8px 8px 0 #000" }}
                >
                  <h3 className="text-2xl font-black mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-electric-blue pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                      <h4 className="font-bold">
                        Career Essentials in Generative AI
                      </h4>
                      <p className="text-gray-700">
                        Microsoft and LinkedIn, October 2024
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
                  {/* Tombol See Details */}
                  <a
                    href="sertif/sertifikat_AI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-black text-white font-semibold text-sm border shadow-[4px_4px_0px_#d1d5db] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                          />
                        </svg> */}
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                </div>

                {/* Database SQL */}
                <div
                  className="p-6 bg-white border-4 border-black relative transform translate-x-0  transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                  style={{ boxShadow: "8px 8px 0 #000" }}
                >
                  <h3 className="text-2xl font-black mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-electric-blue pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                      <h4 className="font-bold">
                        Database Programming with SQL
                      </h4>
                      <p className="text-gray-700">
                        Oracle Academy, December 2024
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
                  {/* Tombol See Details */}
                  <a
                    href="sertif/sertifikat_Oracle.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-black text-white font-semibold text-sm border shadow-[4px_4px_0px_#d1d5db] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                          />
                        </svg> */}
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                </div>

                {/* CCNA */}
                <div
                  className="p-6 bg-white border-4 border-black relative transform translate-x-0  transition-transform duration-300 hover:translate-x-4 hover:-translate-y-2"
                  style={{ boxShadow: "8px 8px 0 #000" }}
                >
                  <h3 className="text-2xl font-black mb-4">Certifications</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-electric-blue pl-4 transition-all duration-300 hover:border-l-8 hover:pl-6">
                      <h4 className="font-bold">
                        CCNA: Switching, Routing, and Wireless Essentials
                      </h4>
                      <p className="text-gray-700">
                        Cisco, Jan 2025
                      </p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-green border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
                  {/* Tombol See Details */}
                  <a
                    href="https://www.credly.com/badges/a5d06f13-72ac-42ea-98f5-4533eb9a5ae4/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-2 py-1 bg-black text-white font-semibold text-sm border shadow-[4px_4px_0px_#d1d5db] transition-transform hover:translate-x-1 hover:-translate-y-1"
                  >
                    {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                          />
                        </svg> */}
                    See Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                </div>
                

              </div>
            </div>

            {/* <div className="flex-1">
              <div
                className="p-6 bg-white border-4 border-black relative transform -translate-y-0 md:-translate-y-12 transition-transform duration-300 hover:translate-x-4 hover:translate-y-2"
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
                        Industrial Work Practice – PT. Indonesia Power Semarang
                        PGU 
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
                        Industrial Work Practice – PT. Telkom Akses Semarang
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
                        Repaired videotron modules and coordinated with technicians to prepare materials for client events.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-hot-red border-4 border-black transition-transform duration-300 hover:rotate-45"></div>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

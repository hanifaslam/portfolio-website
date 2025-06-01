import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white border-t-4 border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-4">
            {/* Social icons kiri */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/hanifaslam"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black rounded-md p-1 transition-colors hover:bg-white hover:text-black"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/hanifaslam/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black rounded-md p-1 transition-colors hover:bg-white hover:text-black"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/hanifaslamm"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black rounded-md p-1 transition-colors hover:bg-white hover:text-black"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            {/* Nama brand */}
            <Link href="/" className="text-2xl font-black text-white relative inline-block">
              {/* <span className="relative z-10">Hanif Aslam</span> */}
              <span className="absolute -bottom-1 left-0 w-full h-3 bg-neon-green -z-10 transform -rotate-1"></span>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">&copy; {new Date().getFullYear()} Hanif Aslam.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

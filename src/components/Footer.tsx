import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiAlienStare } from "react-icons/gi";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold text-white">AuO</h2>
            <p className="mt-2 text-white">
              Building next generation UI and developer tools.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <a href="mailto:alienuiteam@gmail.com">
              <GoMail size={24} className="text-white" />
            </a>
            <a href="https://linkedin.com/company/alien-ui">
              <FaLinkedin size={24} className="text-white" />
            </a>
            <a href="https://x.com/alienui">
              <FaXTwitter size={24} className="text-white" />
            </a>
            <a href="https://github.com/khaymanii/AlienUI-Org">
              <FaGithub size={24} className="text-white" />
            </a>
            <span className="font-medium text-md text-white"></span>
          </div>
        </div>
        <div className="my-6 border-t border-white"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-white">
            &copy; {new Date().getFullYear()} AlienUI Org. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-center mt-8">
          Created by{" "}
          <a href="https://x.com/kenneth_akpo">
            <span className="text-white font-semibold border-b">
              Kenneth Akpo
            </span>
          </a>
        </p>
        <GiAlienStare size={24} className="text-white animate-bounce" />
      </div>
    </footer>
  );
}

export default Footer;

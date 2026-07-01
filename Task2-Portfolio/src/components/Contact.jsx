import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B1120] text-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-violet-400">Contact</span>
          </h2>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="flex flex-col gap-8 items-center">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-violet-400 text-2xl" />
            <a
              href="mailto:kondvilkarnibah@gmail.com"
              className="text-xl hover:text-violet-400 transition"
            >
              kondvilkarnibah@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-violet-400 text-2xl" />
            <p className="text-xl">+91-8010204590</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-violet-400 text-2xl" />
            <p className="text-xl">Mumbai, India</p>
          </div>

          <div className="flex gap-8 mt-4">

            <a
              href="https://github.com/Nibah-Kondvilkar"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nibah-kondvilkar-8b8872381"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
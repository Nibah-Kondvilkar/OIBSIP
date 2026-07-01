function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] text-white py-4 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-violet-400">About Me</span>
          </h2>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-2xl leading-10 text-gray-300">

          <p>
            I'm a Computer Science postgraduate passionate about building
            responsive, user-friendly web applications. I enjoy transforming
            ideas into clean, functional, and intuitive web experiences.
          </p>

          <p>
            I have hands-on experience with{" "}
            <span className="text-white font-semibold">
              React.js, Tailwind CSS, Firebase, HTML, CSS, JavaScript, PHP, and MySQL
            </span>{" "}
            through internships and personal projects.
          </p>

          <p>
            I'm continuously improving my skills by building real-world projects
            and exploring modern web technologies. Currently, I'm seeking an
            opportunity as a{" "}
            <span className="text-white font-semibold">
              Front-End Developer
            </span>{" "}
            where I can learn, grow, and contribute to impactful products.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B1120] text-white py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-violet-400">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-[#141827] border border-violet-700 rounded-xl p-8 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#0B1120] border border-violet-600 text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>


              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-violet-600 hover:bg-violet-600 px-4 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
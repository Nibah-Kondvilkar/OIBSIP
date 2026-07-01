import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B1120] text-white py-6 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-violet-400">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="space-y-8">

          <SkillCategory title="Frontend" items={skills.frontend} />

          <SkillCategory title="Backend" items={skills.backend} />

          <SkillCategory title="Database" items={skills.database} />

          <SkillCategory title="Tools" items={skills.tools} />

        </div>

      </div>
    </section>
  );
}

function SkillCategory({ title, items }) {
  return (
    <div>

      <h3 className="text-2xl font-semibold text-center mb-5 text-white">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-4">

        {items.map((skill) => (
          <span
            key={skill}
            className="px-5 py-3 rounded-full bg-[#141827] border border-violet-700 text-lg text-gray-200 hover:bg-violet-600 hover:border-violet-500 hover:scale-105 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default Skills;
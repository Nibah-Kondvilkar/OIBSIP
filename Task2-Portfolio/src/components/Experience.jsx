import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0B1120] text-white py-10 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            <span className="text-violet-400">Experience</span>
          </h2>

          <div className="w-20 h-1 bg-violet-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {experience.map((item) => (

            <div
              key={item.id}
              className="bg-[#141827] border border-violet-700 rounded-xl p-8 hover:border-violet-500 hover:-translate-y-2 transition duration-300 h-full"
            >

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.role}
                  </h3>

                  <p className="text-violet-400 text-lg mt-1">
                    {item.company}
                  </p>
                </div>

                <p className="text-gray-400 mt-3 md:mt-0">
                  {item.duration}
                </p>

              </div>

              <ul className="mt-6 space-y-3 text-gray-300 text-lg list-disc list-inside">

                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
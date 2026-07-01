function Hero() {
  return (
    <section
      id="home"
      className="bg-[#0B1120] flex items-start justify-center px-6 pt-30 pb-20"
    >
      <div className="text-center max-w-3xl">

        <img
          src="/profile.png"
          alt="Nibah Kondvilkar"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-violet-500 shadow-lg shadow-violet-300/10 object-cover"
        />

        <h1 className="text-4xl font-bold text-white mt-2">
           Hi, I'm Nibah Kondvilkar
        </h1>

        <h2 className="text-3xl text-violet-300 mt-4 font-semibold">
          Front-End Developer
        </h2>

        <p className="text-gray-300 text-lg md:text-2xl mt-4 leading-8 max-w-3xl mx-auto">
          Passionate Front-End Developer with hands-on experience building responsive and user-friendly web applications 
          using React.js, Tailwind CSS, Firebase, HTML, CSS, and JavaScript. I enjoy creating clean interfaces and continuously learning modern web technologies.
        </p>

      </div>
    </section>
  );
}

export default Hero;
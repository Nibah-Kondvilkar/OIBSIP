function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-violet-600 py-4">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Nibah Kondvilkar.<br></br>
           Built with React & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="flex items-center space-x-6 text-xs text-gray-400 tracking-wide">
            <a href="mailto:hank.linder1@gmail.com" className="hover:text-gray-700 transition-colors">
              Email
            </a>
            <a href="https://www.linkedin.com/in/hanklinder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-gray-400 font-serif">
            &copy; {currentYear} Hank Linder
          </p>
        </div>
      </div>
    </footer>
  );
}

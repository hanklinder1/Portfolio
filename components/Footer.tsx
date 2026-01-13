export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
            <a
              href="mailto:hank.linder1@gmail.com"
              className="hover:text-gray-900 transition-colors"
              aria-label="Email Hank Linder"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/hanklinder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hanklinder1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {currentYear} Hank Linder
          </p>
        </div>
      </div>
    </footer>
  );
}

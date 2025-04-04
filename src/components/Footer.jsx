export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center text-gray-700 dark:text-gray-300">
        <div className="mb-4">
          <a
            href="#about"
            className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400 mx-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400 mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-emerald-600 dark:text-gray-100 dark:hover:text-emerald-400 mx-2"
          >
            Contact
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CropY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

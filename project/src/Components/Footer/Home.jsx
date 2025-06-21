import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src="/logo.svg" alt="Lumina Logo" className="h-10" />
          <p className="text-sm">
            Learn without limits. Empower your future with expert-led courses.
          </p>
          <div className="flex space-x-10">
            <a href="#" aria-label="Download on App Store">
              <img src="/Images/appstore.svg" alt="App Store" className="h-8" />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <img
                src="/Images/playstore.svg"
                alt="Google Play"
                className="h-8"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/courses" className="hover:text-blue-600">
                Courses
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-blue-600">
                Events
              </a>
            </li>
            <li>
              <a href="/instructor" className="hover:text-blue-600">
                Instructors
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-blue-600">
                Careers
              </a>
            </li>
            <li>
              <a href="/press" className="hover:text-blue-600">
                Press
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-600">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/accessibility" className="hover:text-blue-600">
                Accessibility
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 Lumina. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Lumina Inc, Mountain View, CA</p>
        </div>
      </div>
    </footer>
  );
}

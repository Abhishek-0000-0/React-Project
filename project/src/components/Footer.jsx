import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2"><FiPhone /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FiMail /> support@edusmart.com</li>
            <li className="flex items-center gap-2"><FiMapPin /> New Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="/" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="/" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="/" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">&copy; {new Date().getFullYear()} EduSmart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

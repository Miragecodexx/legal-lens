import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-naija-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Naija Legal Lens</h3>
            <p className="text-gray-300 mb-4">
              Advanced Nigerian legal document analysis powered by artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-naija-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-naija-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-naija-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-naija-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analyze" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Analyze Document
                </Link>
              </li>
              <li>
                <Link to="/explain" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Explain Text
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-naija-gold transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-naija-gold transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-naija-gold" />
                <span className="text-gray-300">amadasunlelsye06@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-naija-gold" />
                <span className="text-gray-300">+2349153332773</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Naija Legal Lens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

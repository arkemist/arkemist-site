import React from 'react';
import { artistInfo } from '../data/mockData';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">ARKEMIST</h3>
            <p className="text-gray-500 text-sm">Sound Alchemist</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#bio" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">
                Bio
              </a>
              <a href="#portfolio" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">
                Portfolio
              </a>
              <a href="#services" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">
                Services
              </a>
              <a href="#contact" className="text-gray-400 hover:text-[#ff6b35] transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href={artistInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#ff6b35] hover:bg-[#ff6b35] hover:text-black transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href={artistInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#ff6b35] hover:bg-[#ff6b35] hover:text-black transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href={artistInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-[#ff6b35] hover:bg-[#ff6b35] hover:text-black transition-all"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Arkemist. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

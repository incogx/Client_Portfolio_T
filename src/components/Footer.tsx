import { Link } from 'react-router-dom';
import { Mail, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              U. Thamimunissa
            </h3>
            <p className="font-inter text-ivory/80 leading-relaxed mb-4">
              Coach. Leader. Game-Changer.
            </p>
            <p className="font-inter text-ivory/70 text-sm leading-relaxed">
              Empowering young athletes through football, discipline, and unwavering dedication to excellence.
            </p>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-ivory/70 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-ivory/70 hover:text-gold transition-colors text-sm">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/talent-fc" className="text-ivory/70 hover:text-gold transition-colors text-sm">
                  Talent FC
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-ivory/70 hover:text-gold transition-colors text-sm">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ivory/70 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-gold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@talentfc.in"
                className="flex items-center space-x-2 text-ivory/70 hover:text-gold transition-colors text-sm"
              >
                <Mail size={18} />
                <span>contact@talentfc.in</span>
              </a>
              <a
                href="https://www.instagram.com/talent_f.c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ivory/70 hover:text-gold transition-colors text-sm"
              >
                <Instagram size={18} />
                <span>@talent_f.c</span>
              </a>
              <a
                href="https://www.youtube.com/@talent10fc
              "
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ivory/70 hover:text-gold transition-colors text-sm"
              >
                <Youtube size={18} />
                <span>Talent FC YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-8 pt-8 text-center">
          <p className="text-ivory/60 text-sm font-inter">
            &copy; {new Date().getFullYear()} U. Thamimunissa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

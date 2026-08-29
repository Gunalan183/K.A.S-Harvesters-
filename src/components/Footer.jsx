import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '../data/constants';

/* Social icon SVGs not available in this lucide-react version */
function FacebookIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#dc2626"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path fill="#e11d48" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
    </svg>
  );
}

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0B3A1C] text-white relative overflow-hidden">

      {/* Decorative Golden Wheat Stalks at Bottom Right */}
      <div className="absolute right-0 bottom-0 w-48 h-48 opacity-15 pointer-events-none hidden md:block text-[#FAB818]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M10 90 C 20 80, 40 50, 70 20 C 75 15, 80 10, 85 5 C 80 12, 75 25, 76 30 C 77 35, 60 60, 10 90 Z" />
          <path d="M25 80 C 35 68, 55 42, 60 38 C 65 34, 70 30, 75 28 C 70 32, 62 46, 52 56 C 42 66, 25 80, 25 80 Z" />
          <path d="M40 70 C 48 58, 62 38, 66 34 C 70 30, 78 24, 82 20 C 76 26, 68 40, 58 52 C 48 64, 40 70, 40 70 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-[#0B3A1C] fill-current" viewBox="0 0 24 24">
                  <path d="M3 13.5h3.5v2.5H3zm4.5-3h9v5.5h-9zm10.5 3H21v2.5h-3zM2 17h20v2.5H2zM4 6.5l3.5 3h9l3.5-3z" />
                </svg>
              </div>
              <div className="leading-none text-left">
                <div className="font-sans font-black text-white text-lg tracking-tight">K.A.S</div>
                <div className="font-sans font-black text-white text-lg tracking-tight -mt-1">HARVESTERS</div>
              </div>
            </div>

            <p className="font-tamil text-xs md:text-sm text-green-100 mb-6 leading-relaxed text-left">
              விவசாயிகளின் நம்பிக்கையான அறுவடை சேவை.
            </p>

            {/* Social Icons row matching mockup */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-85 transition-opacity"
              >
              <FacebookIcon />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-85 transition-opacity"
              >
                <MessageCircle size={16} fill="white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-85 transition-opacity"
              >
              <YoutubeIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:opacity-85 transition-opacity"
              >
              <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h3 className="font-sans font-bold text-white mb-4 text-base tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 font-tamil text-xs md:text-sm text-green-200">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="hover:text-[#FAB818] transition-colors flex items-center gap-1.5"
                  >
                    <span>•</span>
                    <span>{link.labelTa}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-left font-tamil">
            <h3 className="font-sans font-bold text-white mb-4 text-base tracking-wide uppercase">
              Contact Info
            </h3>
            <div className="space-y-3.5 text-xs md:text-sm text-green-200">
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center gap-2 text-white hover:text-[#FAB818] font-bold text-sm md:text-base border-b border-white/10 pb-2 transition-colors"
              >
                <Phone size={15} className="text-[#FAB818] fill-current" />
                <span>{BUSINESS.phone}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#FAB818] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Kathirimedu, Vadakumangudi (Post),<br />
                  Katumanarkovil (TK), Cuddalore District,<br />
                  Tamil Nadu - India.
                </span>
              </div>

              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FAB818] transition-colors text-[11px] md:text-xs"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                <span>வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்</span>
              </a>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div className="text-left font-tamil">
            <h3 className="font-sans font-bold text-white mb-4 text-base tracking-wide uppercase">
              Business Hours
            </h3>
            <div className="flex items-center gap-2 text-xs md:text-sm text-green-200 bg-white/5 border border-white/15 p-3.5 rounded-2xl">
              <svg className="w-4 h-4 text-[#FAB818] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <p className="font-bold">24/7 சேவை</p>
                <p className="opacity-75 text-[11px] mt-0.5">(ஞாயிறு உட்பட அனைத்து நாட்களும்)</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar copywright strip */}
      <div className="border-t border-white/10 bg-black/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-green-200">
          <p>© 2026 K.A.S Harvesters. All Rights Reserved.</p>
          <p className="font-tamil flex items-center gap-1 font-semibold">
            Designed with <span className="text-red-500 animate-pulse">❤️</span> for Farmers
          </p>
        </div>
      </div>

    </footer>
  );
}

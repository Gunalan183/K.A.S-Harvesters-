import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, NAV_LINKS } from '../data/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  // Track active section on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => {
      const el = document.querySelector(s);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      // scroll and offset header height (topbar + navbar = 36px + 64px = 100px)
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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* ── Top Bar ── */}
      <div className="bg-[#0B3A1C] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-tamil font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-amber-400" />
            <span>Kathirimedu, Vadakumangudi (POST), Katumanarkovil (TK), Cuddalore (District)</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={BUSINESS.phoneLink} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={13} className="text-amber-400" />
              <span>{BUSINESS.phone}</span>
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.453 5.461 0 9.897-4.432 9.9-9.898.002-2.65-1.03-5.138-2.906-7.01C16.58 1.83 14.09 .798 11.447.798c-5.468 0-9.91 4.433-9.913 9.9-.001 1.77.462 3.5 1.34 5.03l-.974 3.56 3.65-.957zm12.385-6.917c-.328-.164-1.942-.958-2.242-1.069-.3-.109-.519-.164-.736.164-.219.328-.847 1.069-1.038 1.287-.19.219-.382.245-.71.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.329-.02-.507.143-.671.147-.148.328-.383.492-.575.164-.19.219-.328.328-.548.11-.219.055-.41-.027-.574-.082-.164-.736-1.778-1.009-2.434-.265-.636-.53-.55-.736-.56-.19-.01-.41-.01-.628-.01s-.574.083-.874.41c-.3.328-1.147 1.12-1.147 2.733 0 1.614 1.175 3.174 1.339 3.393.164.219 2.313 3.532 5.6 4.95 2.736 1.18 3.293 1.124 4.475.956.883-.127 1.942-.794 2.215-1.52.274-.727.274-1.35.19-1.479-.083-.129-.3-.185-.628-.348z" />
              </svg>
              <span>எங்களை வாட்ஸ்அப்பில் தொடர்பு கொள்ளுங்கள்</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="bg-white border-b border-gray-100 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center shrink-0 text-left"
            aria-label="K.A.S Harvesters Home"
          >
            {/* Logo Image */}
            <img
              src="/Logo/K.A.S Logo.png"
              alt="K.A.S Harvesters Logo"
              className="h-11 w-auto object-contain shrink-0"
            />
          </button>

          {/* Navigation Links (Tamil Only, matching mockup) */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`font-tamil text-sm font-bold transition-colors py-1 ${isActive ? 'text-[#FAB818] border-b-2 border-[#FAB818]' : 'text-[#0B3A1C] hover:text-[#FAB818]'
                    }`}
                >
                  {link.labelTa}
                </button>
              );
            })}
          </nav>

          {/* Phone Button */}
          <a
            href={BUSINESS.phoneLink}
            className="flex items-center gap-2 bg-[#FAB818] hover:bg-[#e0a412] text-[#0B3A1C] font-black text-sm px-5 py-2.5 rounded-full transition-all shadow-md shrink-0 font-sans"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone size={15} className="fill-current text-[#0B3A1C]" />
            <span>{BUSINESS.phone}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-[#0B3A1C] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-green-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-lg font-tamil font-bold text-sm transition-colors text-left ${active === link.href
                    ? 'bg-green-50 text-[#FAB818]'
                    : 'text-[#0B3A1C] hover:bg-green-50'
                    }`}
                >
                  <span>{link.labelTa}</span>
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-center justify-center gap-2 w-full bg-[#FAB818] text-[#0B3A1C] py-3 rounded-full font-black text-sm"
                >
                  <Phone size={16} />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

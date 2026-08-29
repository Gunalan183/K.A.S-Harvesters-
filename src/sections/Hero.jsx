import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/constants';

function WaIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} className="fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.453 5.461 0 9.897-4.432 9.9-9.898.002-2.65-1.03-5.138-2.906-7.01C16.58 1.83 14.09.798 11.447.798c-5.468 0-9.91 4.433-9.913 9.9-.001 1.77.462 3.5 1.34 5.03l-.974 3.56 3.65-.957zm12.385-6.917c-.328-.164-1.942-.958-2.242-1.069-.3-.109-.519-.164-.736.164-.219.328-.847 1.069-1.038 1.287-.19.219-.382.245-.71.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.329-.02-.507.143-.671.147-.148.328-.383.492-.575.164-.19.219-.328.328-.548.11-.219.055-.41-.027-.574-.082-.164-.736-1.778-1.009-2.434-.265-.636-.53-.55-.736-.56-.19-.01-.41-.01-.628-.01s-.574.083-.874.41c-.3.328-1.147 1.12-1.147 2.733 0 1.614 1.175 3.174 1.339 3.393.164.219 2.313 3.532 5.6 4.95 2.736 1.18 3.293 1.124 4.475.956.883-.127 1.942-.794 2.215-1.52.274-.727.274-1.35.19-1.479-.083-.129-.3-.185-.628-.348z"/>
    </svg>
  );
}

/* ── Trust bar — desktop only ────────────────────────────── */
const TRUST = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" className="w-7 h-7 shrink-0"><rect x="2" y="12" width="20" height="8" rx="2"/><path d="M6 12V9a6 6 0 0 1 12 0v3"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/><path d="M2 15h20"/></svg>,
    ta: 'நவீன இயந்திரங்கள்', en: 'Modern Machinery',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" className="w-7 h-7 shrink-0"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M8 12l3 3 5-5"/></svg>,
    ta: 'நம்பிக்கையான சேவை', en: 'Reliable Service',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" className="w-7 h-7 shrink-0"><circle cx="9" cy="7" r="3"/><path d="M3 21v-1a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v1"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-1a4 4 0 0 0-3-3.85"/></svg>,
    ta: 'விவசாயி முன்னுரிமை', en: 'Farmer Focused',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" className="w-7 h-7 shrink-0"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    ta: 'கடலூர் மற்றும் சுற்றுவட்டார பகுதிகளில் சேவை', en: 'Serving Cuddalore & Nearby Areas',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ paddingTop: '64px' }}>

      {/* ════════════ BACKGROUND IMAGES ════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Mobile BG */}
        <img src="/images/BG_for_mobile_device.png" alt="" aria-hidden="true" fetchpriority="high"
          className="block md:hidden w-full h-full object-cover object-center" />
        {/* Desktop BG */}
        <img src="/images/hero-bg.png" alt="" aria-hidden="true" fetchpriority="high"
          className="hidden md:block w-full h-full object-cover object-center" />
        {/* Desktop tint only */}
        <div className="hidden md:block absolute inset-0"
          style={{ background: 'linear-gradient(to right,rgba(0,0,0,0.28) 0%,rgba(0,0,0,0.12) 55%,rgba(0,0,0,0) 100%)' }} />
      </div>

      {/* ════════════════════════════════════════════
          MOBILE LAYOUT  (below md)
      ════════════════════════════════════════════ */}
      <div className="relative z-10 md:hidden flex flex-col min-h-[calc(100svh-64px)]">

        {/* Green top strip */}
        <motion.div
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#1a5c2a]/80 backdrop-blur-sm"
        >
          <span className="text-green-300 text-base shrink-0">🌿</span>
          <span className="font-tamil font-semibold text-white text-sm leading-snug">
            விவசாயத்திற்கு துணையாக... அறுவடையில் முன்னோடியாக!
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-between px-5 pt-6 pb-8">

          {/* Text block */}
          <div>
            {/* Brand heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-black text-[#0d3d1c] leading-none tracking-tight mb-3"
              style={{ fontSize: 'clamp(2.8rem, 14vw, 4rem)', fontFamily: "'IBM Plex Serif', serif" }}
            >
              K.A.S<br />HARVESTERS
            </motion.h1>

            {/* Tamil heading */}
            <motion.p
              initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="font-tamil font-extrabold text-[#0d3d1c] leading-snug mb-2"
              style={{ fontSize: 'clamp(1.1rem, 5.5vw, 1.4rem)' }}
            >
              விவசாயிகளின் நம்பிக்கையான<br />அறுவடை சேவை
            </motion.p>

            {/* English subtitle */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="text-gray-700 font-medium leading-snug mb-4 text-sm"
            >
              Professional Combine Harvesting &amp; Agricultural Machinery Services
            </motion.p>

            {/* Tagline — pill with brush bg */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.38 }}
              className="mb-6"
            >
              <div
                className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full"
                style={{ background: '#1a5c2a' }}
              >
                <span
                  className="font-tamil font-black italic text-[#FAD02C] text-center"
                  style={{ fontSize: 'clamp(1rem, 5vw, 1.2rem)' }}
                >
                  உங்கள் வயல்... எங்கள் பொறுப்பு!
                </span>
              </div>
            </motion.div>
          </div>

          {/* CTA buttons — full-width stacked */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.4 }}
            className="flex flex-col gap-3"
          >
            {/* Call Now */}
            <a
              href={BUSINESS.phoneLink}
              className="flex items-center gap-3 bg-[#0d3d1c] hover:bg-[#0a2e15] active:scale-[0.98] text-white pl-3 pr-5 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Phone size={18} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-tamil text-[11px] text-green-200 mb-1">இன்றே அழைக்கவும்</span>
                <span className="font-bold text-base">Call Now</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={BUSINESS.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] active:scale-[0.98] text-white pl-3 pr-5 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <WaIcon size={18} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-tamil text-[11px] text-green-100 mb-1">WhatsApp மூலம் தொடர்பு</span>
                <span className="font-bold text-base">WhatsApp</span>
              </span>
            </a>

            {/* Get Directions */}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-800 border border-gray-200 pl-3 pr-5 py-3.5 rounded-full shadow-md transition-all"
            >
              <span className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-green-700" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-tamil text-[11px] text-gray-400 mb-1">இருப்பிடத்தை பார்க்க</span>
                <span className="font-bold text-base">Get Directions</span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          DESKTOP LAYOUT  (md and above)
      ════════════════════════════════════════════ */}
      <div className="hidden md:block relative z-10">

        {/* Top tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="py-1.5 px-5 flex items-center gap-2"
        >
          <span className="text-green-300 text-sm">🌿</span>
          <span className="font-tamil font-semibold text-white drop-shadow text-sm">
            விவசாயத்திற்கு துணையாக... அறுவடையில் முன்னோடியாக!
          </span>
        </motion.div>

        {/* Main content */}
        <div className="max-w-[1280px] mx-auto px-10 lg:px-14 py-10 lg:py-12">
          <div className="max-w-lg">

            <motion.h1
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-black text-[#0d3d1c] leading-none tracking-tight mb-2"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)', fontFamily: "'IBM Plex Serif', serif" }}
            >
              K.A.S<br />HARVESTERS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="font-tamil font-extrabold text-[#0d3d1c] leading-snug mb-1"
              style={{ fontSize: 'clamp(0.95rem, 2.1vw, 1.3rem)' }}
            >
              விவசாயிகளின் நம்பிக்கையான அறுவடை சேவை
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="font-medium text-gray-700 leading-snug mb-3"
              style={{ fontSize: 'clamp(0.75rem, 1.3vw, 0.88rem)' }}
            >
              Professional Combine Harvesting &amp; Agricultural Machinery Services
            </motion.p>

            {/* Desktop tagline — brush stroke */}
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.38 }}
              className="relative inline-block mb-5"
            >
              <svg viewBox="0 0 340 52" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M8,38 C2,34 0,26 4,20 C6,14 14,10 28,8 C60,4 100,2 148,3 C196,4 242,5 278,6 C304,7 324,8 334,14 C340,18 340,26 336,33 C332,40 322,44 304,46 C276,49 234,50 186,50 C138,50 90,49 52,47 C30,46 12,44 8,38 Z" fill="#0d5c45"/>
              </svg>
              <span className="relative z-10 font-tamil font-black italic text-[#FAD02C] px-8 py-2 block text-center"
                style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.12rem)' }}>
                உங்கள் வயல்... எங்கள் பொறுப்பு!
              </span>
            </motion.div>

            {/* Desktop CTA buttons — inline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.38 }}
              className="flex flex-wrap gap-2.5"
            >
              <a href={BUSINESS.phoneLink}
                className="flex items-center gap-2 bg-[#0d3d1c] hover:bg-[#0a2e15] active:scale-95 text-white pl-2.5 pr-4 py-2 rounded-full shadow-md transition-all">
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0"><Phone size={13} /></span>
                <span className="flex flex-col leading-none">
                  <span className="font-tamil text-[9px] text-green-200 mb-[2px]">இன்றே அழைக்கவும்</span>
                  <span className="font-bold text-xs">Call Now</span>
                </span>
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] active:scale-95 text-white pl-2.5 pr-4 py-2 rounded-full shadow-md transition-all">
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0"><WaIcon size={13} /></span>
                <span className="flex flex-col leading-none">
                  <span className="font-tamil text-[9px] text-green-100 mb-[2px]">WhatsApp மூலம் தொடர்பு</span>
                  <span className="font-bold text-xs">WhatsApp</span>
                </span>
              </a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-gray-50 active:scale-95 text-gray-800 border border-gray-300 pl-2.5 pr-4 py-2 rounded-full shadow-sm transition-all">
                <span className="w-7 h-7 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0"><MapPin size={13} className="text-green-700" /></span>
                <span className="flex flex-col leading-none">
                  <span className="font-tamil text-[9px] text-gray-400 mb-[2px]">இருப்பிடத்தை பார்க்க</span>
                  <span className="font-bold text-xs">Get Directions</span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Trust bar — desktop only */}
        <div className="relative">
          <div className="overflow-hidden leading-none">
            <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full block" style={{ height: '32px' }} aria-hidden="true">
              <path d="M0,32 L0,16 C180,32 360,0 540,14 C720,28 900,2 1080,18 C1260,32 1380,6 1440,16 L1440,32 Z" fill="white"/>
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.4 }}
            className="bg-white shadow-md"
          >
            <div className="max-w-[1280px] mx-auto px-4 lg:px-12">
              <div className="grid grid-cols-4 divide-x divide-gray-100">
                {TRUST.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-5 py-3">
                    {item.icon}
                    <div className="min-w-0">
                      <p className="font-tamil font-bold text-green-900 text-xs leading-tight">{item.ta}</p>
                      <p className="text-gray-400 text-[10px] leading-tight">{item.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

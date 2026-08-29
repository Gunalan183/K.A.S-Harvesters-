import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { BUSINESS } from '../data/constants';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="2" y="10" width="20" height="8" rx="2" />
        <path strokeLinecap="round" d="M6 10V8a6 6 0 0 1 12 0v2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path strokeLinecap="round" d="M2 14h20" />
      </svg>
    ),
    titleTa: 'கம்பைன் அறுவடை சேவை',
    descTa: 'Kartar 4000 மூலம் திறமையான அறுவடை சேவை.',
    tag: 'Combine Harvesting',
    featured: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
        <path strokeLinecap="round" d="M4 17H2V9l4-4h10l4 4v4M4 17h12" />
        <path strokeLinecap="round" d="M14 5v8h6" />
      </svg>
    ),
    titleTa: 'டிராக்டர் சேவைகள்',
    descTa: 'வயல் உழவு மற்றும் பிற விவசாய பணிகள்.',
    tag: 'Tractor Services',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <rect x="1" y="11" width="22" height="8" rx="2" />
        <path strokeLinecap="round" d="M1 14h22" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path strokeLinecap="round" d="M5 11V7l3-3h8l3 3v4" />
      </svg>
    ),
    titleTa: 'விவசாய போக்குவரத்து',
    descTa: 'விவசாய பொருட்கள் மற்றும் இயந்திரங்கள் போக்குவரத்து.',
    tag: 'Agricultural Transport',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    titleTa: 'விவசாய இயந்திர போக்குவரத்து',
    descTa: 'இயந்திரங்களை பாதுகாப்பாக வயலுக்கு கொண்டு வருதல்.',
    tag: 'Machinery Transport',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
      </svg>
    ),
    titleTa: 'அறுவடை பணிகளுக்கான முழுமையான உதவி',
    descTa: 'அறுவடை முதல் போக்குவரத்து வரை முழுமையான ஆதரவு.',
    tag: 'Full Support',
  },
];

export default function Services() {
  const [featured, ...rest] = services;

  return (
    <SectionWrapper id="services" className="py-16 bg-[#f7faf7] relative overflow-hidden">

      {/* Subtle background wheat motif */}
      <div className="absolute right-0 top-0 w-72 h-72 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#0B3A1C]">
          <path d="M100 200 C100 130,70 90,30 50 C45 40,85 70,100 100 C115 70,155 40,170 50 C130 90,100 130,100 200Z" />
          <path d="M100 150 C100 95,60 65,20 35 C35 25,75 50,100 80 C125 50,165 25,180 35 C140 65,100 95,100 150Z" />
          <path d="M100 100 C100 55,50 35,10 10 C25 2,65 25,100 55 C135 25,175 2,190 10 C150 35,100 55,100 100Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            🌾 Our Services
          </div>
          <h2 className="font-tamil text-3xl md:text-[40px] font-black text-[#0B3A1C] mb-2">
            எங்கள் சேவைகள்
          </h2>
          <p className="font-tamil text-sm md:text-base text-gray-500 font-semibold">
            விவசாயப் பணிகளில் உங்களுக்கு நம்பிக்கையான துணையாக
          </p>
          <div className="w-16 h-1 bg-[#FAB818] mx-auto rounded-full mt-4" />
        </div>

        {/* Layout: Featured card top + 4-col grid below */}
        <div className="flex flex-col gap-5">

          {/* Featured — full width dark card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#0B3A1C] rounded-3xl p-7 md:p-9 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Decorative ring */}
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full border-[28px] border-white/5 pointer-events-none" />
            <div className="absolute -right-4 -bottom-8 w-36 h-36 rounded-full border-[20px] border-white/5 pointer-events-none" />

            {/* Icon */}
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#FAB818]/20 border border-[#FAB818]/30 flex items-center justify-center text-[#FAB818]">
              {featured.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#FAB818] bg-[#FAB818]/10 border border-[#FAB818]/20 px-3 py-0.5 rounded-full mb-2">
                {featured.tag}
              </span>
              <h3 className="font-tamil font-black text-white text-xl md:text-2xl leading-tight mb-1">
                {featured.titleTa}
              </h3>
              <p className="font-tamil text-green-300 text-sm leading-relaxed">
                {featured.descTa}
              </p>
            </div>

            {/* CTA */}
            <a
              href={BUSINESS.phoneLink}
              className="shrink-0 flex items-center gap-2 bg-[#FAB818] hover:bg-[#e0a412] text-[#0B3A1C] font-black text-sm px-6 py-3 rounded-full transition-all shadow-lg whitespace-nowrap"
            >
              Book Now
            </a>
          </motion.div>

          {/* 4-col grid for remaining services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((svc, i) => (
              <motion.div
                key={svc.titleTa}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-[#0B3A1C] flex items-center justify-center mb-4 shrink-0 transition-colors duration-300 text-[#0B3A1C] group-hover:text-white">
                  {svc.icon}
                </div>

                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FAB818] mb-1.5">
                  {svc.tag}
                </span>

                {/* Title */}
                <h3 className="font-tamil font-black text-gray-900 text-sm md:text-base leading-snug mb-2 group-hover:text-[#0B3A1C] transition-colors">
                  {svc.titleTa}
                </h3>

                {/* Description */}
                <p className="font-tamil text-gray-500 text-xs md:text-[13px] leading-relaxed mt-auto">
                  {svc.descTa}
                </p>

                {/* Bottom accent line */}
                <div className="mt-4 h-0.5 w-8 rounded-full bg-[#FAB818] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

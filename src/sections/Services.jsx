import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-[#0B3A1C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.19-3.031a1.125 1.125 0 00-1.12-1.095H17.25M3.75 14.25h13.5M2.25 14.25h19.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75h13.5v4.5H5.25V9.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25v4.5" />
      </svg>
    ),
    titleTa: 'கம்பைன் அறுவடை சேவை',
    descTa: 'Kartar 4000 மூலம் திறமையான அறுவடை சேவை.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0B3A1C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-8.25 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75h4.5M12 12V9.75h4.5v4.5M12 12H3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.75h12v9H6v-9z" />
      </svg>
    ),
    titleTa: 'டிராக்டர் சேவைகள்',
    descTa: 'வயல் உழவு மற்றும் பிற விவசாய பணிகள்.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0B3A1C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.19-3.031a1.125 1.125 0 00-1.12-1.095H17.25M3.75 14.25h13.5M2.25 14.25h19.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 9.75h13.5v4.5H5.25V9.75z" />
      </svg>
    ),
    titleTa: 'விவசாய போக்குவரத்து',
    descTa: 'விவசாய பொருட்கள் மற்றும் இயந்திரங்கள் போக்குவரத்து.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0B3A1C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    titleTa: 'விவசாய இயந்திர போக்குவரத்து',
    descTa: 'இயந்திரங்களை பாதுகாப்பாக வயலுக்கு கொண்டு வருதல்.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-[#0B3A1C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5H3.75M21 13.5h-5.25" />
      </svg>
    ),
    titleTa: 'அறுவடை பணிகளுக்கான முழுமையான உதவி',
    descTa: 'அறுவடை முதல் போக்குவரத்து வரை முழுமையான ஆதரவு.',
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-tamil text-3xl md:text-[40px] font-black text-[#0B3A1C] mb-2 flex items-center justify-center gap-2">
            எங்கள் சேவைகள் 🌾
          </h2>
          <p className="font-tamil text-sm md:text-base text-gray-500 font-semibold mb-1">
            விவசாயப் பணிகளில் உங்களுக்கு நம்பிக்கையான துணையாக
          </p>
          <div className="w-16 h-1 bg-[#FAB818] mx-auto rounded-full mt-3" />
        </div>

        {/* 5-Column Flex Grid matching mockup */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.titleTa}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 w-full sm:w-[220px] flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-4 shrink-0 transition-colors group-hover:bg-green-100">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-tamil font-black text-gray-900 text-sm md:text-base mb-2 group-hover:text-[#0B3A1C] transition-colors leading-snug">
                {svc.titleTa}
              </h3>

              {/* Description */}
              <p className="font-tamil text-gray-500 text-xs md:text-[13px] leading-relaxed mt-auto">
                {svc.descTa}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}

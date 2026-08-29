import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { BUSINESS } from '../data/constants';

const machines = [
  {
    name: 'Kartar 4000 Combine Harvester',
    subtitleTa: 'நவீன அறுவடை இயந்திரம்',
    descTa: 'Kartar 4000 Combine Harvester மூலம் திறமையான மற்றும் நம்பிக்கையான அறுவடை சேவை.',
    image: '/images/karthar-with-loory.png',
  },
  {
    name: 'Tractor',
    subtitleTa: 'விவசாயத்திற்கு தேவையான டிராக்டர் சேவை',
    descTa: 'வயல் உழவு, நிலப்படுத்திடுதல் மற்றும் பல விவசாய பணிகளுக்கு.',
    image: '/images/tractor.jpeg',
  },
  {
    name: 'Lorry / Transport',
    subtitleTa: 'போக்குவரத்து மற்றும் இயந்திரங்கள் எடுத்துச் செல்லும் சேவை',
    descTa: 'விவசாய இயந்திரங்கள் மற்றும் பொருட்களை பாதுகாப்பாக கொண்டு செல்ல.',
    image: '/images/lorry-06.jpeg',
  },
];

export default function Machinery() {
  return (
    <SectionWrapper id="machinery" className="py-16 bg-white relative overflow-hidden">

      {/* Decorative Wheat Leaves left and right */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-64 text-green-200/50 pointer-events-none hidden xl:block">
        <svg viewBox="0 0 100 300" className="w-[120px] h-[360px] fill-current">
          <path d="M50 300 C50 200, 30 150, 10 100 C15 90, 40 120, 50 150 C60 120, 85 90, 90 100 C70 150, 50 200, 50 300 Z" />
          <path d="M50 220 C50 160, 20 120, 5 80 C10 70, 35 90, 50 120 C65 90, 90 70, 95 80 C80 120, 50 160, 50 220 Z" />
          <path d="M50 140 C50 90, 15 60, 0 30 C5 20, 30 40, 50 70 C70 40, 95 20, 100 30 C85 60, 50 90, 50 140 Z" />
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-64 text-green-200/50 pointer-events-none hidden xl:block rotate-180">
        <svg viewBox="0 0 100 300" className="w-[120px] h-[360px] fill-current">
          <path d="M50 300 C50 200, 30 150, 10 100 C15 90, 40 120, 50 150 C60 120, 85 90, 90 100 C70 150, 50 200, 50 300 Z" />
          <path d="M50 220 C50 160, 20 120, 5 80 C10 70, 35 90, 50 120 C65 90, 90 70, 95 80 C80 120, 50 160, 50 220 Z" />
          <path d="M50 140 C50 90, 15 60, 0 30 C5 20, 30 40, 50 70 C70 40, 95 20, 100 30 C85 60, 50 90, 50 140 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-tamil text-3xl md:text-[40px] font-black text-[#0B3A1C] mb-2 flex items-center justify-center gap-2">
            எங்கள் இயந்திரங்கள் 🚜
          </h2>
          <p className="font-tamil text-sm md:text-base text-gray-500 font-semibold mb-1">
            நவீன இயந்திரங்கள் • நம்பிக்கையான சேவை
          </p>
          <div className="w-16 h-1 bg-[#FAB818] mx-auto rounded-full mt-3" />
        </div>

        {/* Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-[220px] bg-gray-50">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text / Details Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans font-black text-xl text-gray-905">{m.name}</h3>

                {/* Tamil subtitle below header */}
                <p className="font-tamil font-black text-xs md:text-sm text-[#0B3A1C] mt-1 mb-2.5 leading-snug">
                  {m.subtitleTa}
                </p>

                {/* Description */}
                <p className="font-tamil text-gray-600 text-[13px] md:text-sm leading-relaxed mb-6 flex-grow">
                  {m.descTa}
                </p>

                {/* Grid Buttons matching mockup */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={BUSINESS.phoneLink}
                    className="flex-1 text-center bg-[#0B3A1C] hover:bg-[#072412] text-white py-2.5 px-4 rounded-full font-bold text-xs md:text-sm transition-all"
                  >
                    View Details
                  </a>
                  <a
                    href={BUSINESS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white border border-[#0B3A1C] text-[#0B3A1C] hover:bg-gray-50 py-2.5 px-4 rounded-full font-bold text-xs md:text-sm transition-all"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}

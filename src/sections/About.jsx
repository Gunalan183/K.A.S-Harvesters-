import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Compass } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { BUSINESS } from '../data/constants';

export default function About() {
  return (
    <SectionWrapper id="about" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 3-Column Grid representing About, Location, and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── COLUMN 1: எங்களைப் பற்றி (About Us) — 5 cols ── */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-4 flex items-center gap-2">
              எங்களைப் பற்றி 🌿
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center lg:items-start">

              {/* Left text portion */}
              <div className="flex-1 space-y-3.5 text-gray-700">
                <h3 className="font-sans font-black text-xl text-gray-900 leading-tight">
                  K.A.S Harvesters
                </h3>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider font-sans -mt-2">
                  Owner: Mr. Arularasan. K
                </p>

                <p className="font-tamil text-[13px] md:text-sm leading-relaxed">
                  K.A.S Harvesters என்பது விவசாயிகளின் அறுவடை மற்றும் விவசாய இயந்திர தேவைகளுக்கு நம்பிக்கையான சேவையை வழங்கும் ஒரு உள்ளூர் விவசாய இயந்திர சேவை நிறுவனம்.
                </p>
                <p className="font-tamil text-[13px] md:text-sm leading-relaxed">
                  நவீன விவசாய இயந்திரங்களை பயன்படுத்தி விவசாயப் பணிகளை எளிதாகவும் திறமையாகவும் செய்ய உதவுவதே எங்கள் நோக்கம்.
                </p>
                <p className="font-tamil text-[13px] md:text-sm leading-relaxed text-[#0B3A1C] font-black">
                  விவசாயிகளின் தேவையே எங்கள் முன்னுரிமை.
                </p>

                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center gap-2 bg-[#0B3A1C] hover:bg-[#072412] text-white px-5 py-2 rounded-full font-bold text-xs md:text-sm shadow-md transition-all font-tamil mt-2"
                >
                  Read More
                </a>
              </div>

              {/* Owner photo portrait portion */}
              <div className="w-full sm:w-[152px] shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#E8F5E9] aspect-[152/228] w-full"
                >
                  <img
                    src="/images/owner_photo.jpg"
                    alt="Mr. Arularasan K - Owner KAS Harvesters"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>
          </div>

          {/* ── COLUMN 2: எங்கள் இருப்பிடம் (Location) — 3.5 cols ── */}
          <div className="lg:col-span-3.5 text-left flex flex-col h-full justify-between">
            <div>
              <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-4 flex items-center gap-2">
                எங்கள் இருப்பிடம் 🗺️
              </h2>

              {/* Address details */}
              <div className="space-y-1 text-gray-700 text-[13px] md:text-sm mb-4 font-tamil font-bold">
                <p>Kathirimedu,</p>
                <p>Vadakumangudi (Post),</p>
                <p>Katumanarkovil (TK),</p>
                <p>Cuddalore District,</p>
                <p>Tamil Nadu - India.</p>
              </div>
            </div>

            {/* Map image & Directions button */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 h-28 relative">
                <img
                  src="/images/map_snippet.jpg"
                  alt="Location Maps Snippet"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Visual red pin overlay in center for premium aesthetics */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping absolute" />
                  <div className="w-2 h-2 rounded-full bg-red-600 relative" />
                </div>
              </div>

              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0B3A1C] hover:bg-[#072412] text-white py-2.5 px-4 rounded-full font-bold text-xs md:text-sm shadow-md transition-all font-tamil"
              >
                <Compass size={15} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* ── COLUMN 3: தொடர்பு கொள்ளுங்கள் (Contact Us) — 3.5 cols ── */}
          <div className="lg:col-span-3.5 text-left">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-4 flex items-center gap-2">
              தொடர்பு கொள்ளுங்கள் 📞
            </h2>

            {/* Premium Dark Green Contact Card Card */}
            <div className="bg-[#0B3A1C] rounded-3xl p-6 shadow-xl text-white flex flex-col justify-between min-h-[300px]">

              {/* Telephone display */}
              <div className="mb-6">
                <a
                  href={BUSINESS.phoneLink}
                  className="flex items-center gap-2 text-2xl md:text-3xl font-black text-[#FAB818] hover:text-white transition-colors"
                >
                  <Phone size={24} className="fill-current text-[#FAB818]" />
                  <span>{BUSINESS.phone}</span>
                </a>
              </div>

              {/* Stacked contact options */}
              <div className="space-y-3 mb-6">
                {/* Call Now */}
                <a
                  href={BUSINESS.phoneLink}
                  className="w-full flex items-center justify-center gap-2 bg-[#FAB818] hover:bg-[#e0a412] text-[#0B3A1C] py-2.5 px-4 rounded-full font-sans font-black text-xs md:text-sm transition-all"
                >
                  <Phone size={15} className="fill-current text-[#0B3A1C]" />
                  <span>Call Now</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd56] text-white py-2.5 px-4 rounded-full font-sans font-black text-xs md:text-sm transition-all"
                >
                  <MessageCircle size={15} className="fill-current text-white" />
                  <span>WhatsApp</span>
                </a>

                {/* Get Directions */}
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0B3A1C] py-2.5 px-4 rounded-full font-sans font-black text-xs md:text-sm transition-all shadow-sm"
                >
                  <MapPin size={15} className="text-[#0B3A1C]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Tagline footer within card */}
              <p className="font-tamil text-center text-[10px] md:text-xs text-green-200 font-semibold leading-relaxed border-t border-white/10 pt-4">
                இன்றே தொடர்பு கொள்ளுங்கள்,
                <br />
                <span className="text-[#FAB818]">உங்கள் வயல்... எங்கள் பொறுப்பு!</span>
              </p>

            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { BUSINESS } from '../data/constants';

export default function ServiceArea() {
  return (
    <SectionWrapper id="location" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full border border-amber-200 mb-4">
            <MapPin size={14} />
            <span>Service Area</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 mb-2">
            எங்கள் சேவை பகுதி
          </h2>
          <p className="font-tamil text-amber-700 font-medium">
            கடலூர் மாவட்டம் மற்றும் சுற்றுவட்டார பகுதிகளில் சேவை
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="bg-green-950 rounded-2xl p-8 text-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6">
                <MapPin size={28} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">K.A.S Harvesters</h3>
              <p className="font-tamil text-amber-400 font-semibold mb-6">
                {BUSINESS.owner}
              </p>

              <div className="space-y-2 text-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5 shrink-0">
                    <span className="text-xs text-amber-400">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{BUSINESS.address.line1}</p>
                    <p>{BUSINESS.address.line2}</p>
                    <p>{BUSINESS.address.line3}</p>
                    <p>{BUSINESS.address.line4}</p>
                    <p>{BUSINESS.address.line5}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-5 h-5 rounded-full bg-green-700/40 flex items-center justify-center shrink-0">
                    <Phone size={11} className="text-green-300" />
                  </div>
                  <a
                    href={BUSINESS.phoneLink}
                    className="text-white font-bold text-lg hover:text-amber-400 transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Service area chips */}
              <div className="mt-6">
                <p className="font-tamil text-green-400 text-xs mb-3">சேவை பகுதிகள்:</p>
                <div className="flex flex-wrap gap-2">
                  {['Cuddalore', 'Katumanarkovil', 'Chidambaram', 'Vadakumangudi', 'Surrounding Villages'].map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-green-800/60 text-green-200 px-3 py-1 rounded-full border border-green-700/40"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white py-3 px-5 rounded-xl font-semibold text-sm transition-all"
              >
                <Navigation size={16} />
                📍 Get Directions
              </a>
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-5 rounded-xl font-semibold text-sm transition-all border border-white/20"
              >
                <Phone size={16} />
                <span className="font-tamil">அழைக்கவும்</span>
              </a>
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-64 lg:min-h-0"
          >
            <iframe
              title="K.A.S Harvesters Location - Kathirimedu, Katumanarkovil, Cuddalore"
              src="https://maps.google.com/maps?q=Kathirimedu+Vadakumangudi+Katumanarkovil+Cuddalore+Tamil+Nadu+India&output=embed&z=13"
              width="100%"
              height="100%"
              style={{ minHeight: '340px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

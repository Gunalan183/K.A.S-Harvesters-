import { motion } from 'framer-motion';
import { Check, Phone, FileText, Calendar, Compass } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const reasons = [
  {
    titleTa: 'நவீன இயந்திரங்கள்',
    descTa: 'நவீன மற்றும் நன்கு பராமரிக்கப்பட்ட இயந்திரங்கள்.',
  },
  {
    titleTa: 'விவசாயிகள் முதன்மை',
    descTa: 'விவசாயிகளின் தேவையை புரிந்து செயல்படும் சேவை.',
  },
  {
    titleTa: 'நம்பிக்கையான கருவிகள்',
    descTa: 'நன்கு பராமரிக்கப்படும் மற்றும் சிறந்த நிலையான இயந்திரங்கள்.',
  },
  {
    titleTa: 'நம்பிக்கையான சேவை',
    descTa: 'பொறுப்பான மற்றும் நேர்மையான சேவை.',
  },
  {
    titleTa: 'உள்ளூர் சேவை',
    descTa: 'கடலூர் மற்றும் சுற்றுவட்டார பகுதிகளில் விரைவான சேவை.',
  },
];

const steps = [
  {
    num: '01',
    icon: <Phone size={24} className="text-[#0B3A1C]" />,
    title: 'தொடர்பு கொள்ளுங்கள்',
    desc: 'எங்கள் அலுவலகம் அல்லது வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளவும்.',
  },
  {
    num: '02',
    icon: <FileText size={24} className="text-[#0B3A1C]" />,
    title: 'உங்கள் விவரங்களை தெரிவிக்கவும்',
    desc: 'உங்கள் இடம், வயல் விவரம் மற்றும் உங்களுக்கு தேவையான பணிகள்.',
  },
  {
    num: '03',
    icon: <Calendar size={24} className="text-[#0B3A1C]" />,
    title: 'தேதியை திட்டமிடுங்கள்',
    desc: 'இயந்திரம் கிடைக்கும் தேதி உறுதி செய்து திட்டமிடலாம்.',
  },
  {
    num: '04',
    icon: <Compass size={24} className="text-[#0B3A1C]" />,
    title: 'அறுவடை சேவை',
    desc: 'எங்கள் இயந்திரங்கள் உங்கள் இடத்திற்கு வந்து சேவையை நிறைவேற்றும்.',
  },
];

export default function WhyUs() {
  return (
    <SectionWrapper id="why-us" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Column 1: ஏன் K.A.S Harvesters? (40% Width) ── */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-6 flex items-center gap-2">
              ஏன் K.A.S Harvesters? 🌿
            </h2>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((re, idx) => (
                <motion.div
                  key={re.titleTa}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  {/* Green Circle Checkmark */}
                  <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 text-green-700 mt-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-tamil font-black text-gray-900 text-sm md:text-base leading-snug">
                      {re.titleTa}
                    </h3>
                    <p className="font-tamil text-gray-500 text-xs md:text-sm mt-0.5 leading-relaxed">
                      {re.descTa}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider on desktop */}
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-gray-150 h-full justify-self-center" />

          {/* ── Column 2: எங்கள் சேவையை பெறுவது எப்படி? (60% Width) ── */}
          <div className="lg:col-span-6 text-left">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-8 flex items-center gap-2">
              எங்கள் சேவையை பெறுவது எப்படி? 🌿
            </h2>

            {/* Horizontal Steps Flow */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start relative">

              {steps.map((st, i) => (
                <div key={st.num} className="flex flex-col items-center text-center relative group">

                  {/* Step circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="w-16 h-16 rounded-full bg-white border-2 border-[#0B3A1C] flex items-center justify-center shadow-md relative z-10 hover:bg-green-50 transition-colors"
                  >
                    {st.icon}

                    {/* Step Number badge under the circle */}
                    <div className="absolute -bottom-2.5 bg-white border border-gray-200 text-xs px-2 py-0.5 rounded-full font-black text-[#0B3A1C]">
                      {st.num}
                    </div>
                  </motion.div>

                  {/* Step Metadata */}
                  <h3 className="font-tamil font-black text-xs md:text-sm text-gray-900 mt-4 leading-tight">
                    {st.title}
                  </h3>
                  <p className="font-tamil text-gray-500 text-[10px] md:text-xs leading-relaxed mt-2.5 px-1">
                    {st.desc}
                  </p>

                  {/* Connector arrow pointing to the next step (desktop only) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 -right-5 translate-x-1/2 text-gray-300 pointer-events-none z-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Wheat } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const steps = [
  {
    num: '01',
    icon: <Phone size={24} />,
    title: 'தொடர்பு கொள்ளுங்கள்',
    titleEn: 'Contact Us',
    desc: 'அழைக்கவும் அல்லது WhatsApp செய்தி அனுப்பவும்.',
    descEn: 'Call or send us a WhatsApp message.',
  },
  {
    num: '02',
    icon: <MessageSquare size={24} />,
    title: 'உங்கள் விவரங்களை தெரிவிக்கவும்',
    titleEn: 'Share Your Details',
    desc: 'உங்கள் கிராமம், வயல் இடம் மற்றும் அறுவடை தேவைகளை தெரிவிக்கவும்.',
    descEn: 'Tell us your village, field location and harvesting requirement.',
  },
  {
    num: '03',
    icon: <Calendar size={24} />,
    title: 'தேதியை திட்டமிடுங்கள்',
    titleEn: 'Schedule a Date',
    desc: 'கிடைக்கும் தேதி மற்றும் நேரம் குறித்து கலந்தாலோசிப்போம்.',
    descEn: 'We discuss availability and schedule a convenient time.',
  },
  {
    num: '04',
    icon: <Wheat size={24} />,
    title: 'அறுவடை சேவை',
    titleEn: 'Harvest Service',
    desc: 'எங்கள் இயந்திரங்கள் உங்கள் வயலுக்கே வரும்.',
    descEn: 'Our machinery arrives at your field and completes the harvest.',
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200 mb-4">
            <span>📋</span>
            <span>Simple Process</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 mb-2">
            எங்கள் சேவையை பெறுவது எப்படி?
          </h2>
          <p className="text-gray-500 text-sm">Easy 4-step process to get our harvesting service</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-200 via-amber-300 to-green-200 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-white border-4 border-green-200 flex flex-col items-center justify-center mb-4 shadow-md">
                <span className="text-green-700">{step.icon}</span>
                <span className="text-xs font-black text-amber-600 mt-0.5">{step.num}</span>
              </div>

              <h3 className="font-tamil font-black text-green-900 text-base mb-1">{step.title}</h3>
              <p className="text-gray-400 text-xs mb-2">{step.titleEn}</p>
              <p className="font-tamil text-gray-600 text-sm leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="mt-12 text-center"
        >
          <p className="font-tamil text-gray-600 mb-4">இன்றே தொடங்குங்கள் — இது மிகவும் எளிது!</p>
          <a
            href="tel:7010453539"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md transition-all"
          >
            <Phone size={18} />
            <span className="font-tamil">இப்போதே அழைக்கவும்</span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

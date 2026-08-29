import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { FAQS } from '../data/constants';

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left transition-colors font-tamil"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 text-xs md:text-sm leading-snug pr-3">
          {faq.q}
        </span>
        <div className="shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#0B3A1C]">
          {open ? <Minus size={14} className="stroke-[3]" /> : <Plus size={14} className="stroke-[3]" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 bg-green-50/30 border-t border-gray-100">
              <p className="font-tamil text-gray-650 text-xs md:text-[13px] leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-tamil text-3xl md:text-[40px] font-black text-[#0B3A1C] mb-2 flex items-center justify-center gap-2">
            அடிக்கடி கேட்கப்படும் கேள்விகள் 🌿
          </h2>
          <div className="w-16 h-1 bg-[#FAB818] mx-auto rounded-full mt-3" />
        </div>

        {/* 3-Column Grid representing FAQ items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}

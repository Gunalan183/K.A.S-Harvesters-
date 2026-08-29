import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { BUSINESS } from '../data/constants';

const SERVICE_OPTIONS = [
  'Combine Harvester',
  'Tractor',
  'Lorry / Transport',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    village: '',
    service: '',
    crop: '',
    area: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const lines = [
      `வணக்கம் K.A.S Harvesters,`,
      ``,
      `பெயர்: ${form.name}`,
      `மொபைல்: ${form.mobile}`,
      `கிராமம்/இடம்: ${form.village}`,
      `தேவையான சேவை: ${form.service}`,
      form.crop ? `பயிர்: ${form.crop}` : '',
      form.area ? `நில அளவு: ${form.area}` : '',
      form.date ? `விரும்பிய தேதி: ${form.date}` : '',
      form.message ? `செய்தி: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const encodedMsg = encodeURIComponent(lines);
    window.open(`https://wa.me/917010453539?text=${encodedMsg}`, '_blank');
  };

  return (
    <SectionWrapper id="contact" className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200 mb-4">
            <Phone size={14} />
            <span>Contact Us</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 mb-2">
            தொடர்பு கொள்ளுங்கள்
          </h2>
          <p className="font-tamil text-amber-700 font-medium text-lg">
            அறுவடை சேவைக்கு இன்றே தொடர்பு கொள்ளுங்கள்
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Call card */}
            <a
              href={BUSINESS.phoneLink}
              className="flex items-center gap-4 bg-green-700 hover:bg-green-600 text-white p-5 rounded-2xl shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-tamil text-green-200 text-sm">அழைக்கவும்</p>
                <p className="font-bold text-2xl tracking-wide">{BUSINESS.phone}</p>
                <p className="text-green-200 text-xs">{BUSINESS.owner}</p>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-emerald-500 hover:bg-emerald-400 text-white p-5 rounded-2xl shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-emerald-100 text-sm">WhatsApp Message</p>
                <p className="font-bold text-lg">Chat with us</p>
                <p className="font-tamil text-emerald-100 text-xs">தொடர்பு கொள்ளுங்கள்</p>
              </div>
            </a>

            {/* Location card */}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-amber-500 hover:bg-amber-400 text-white p-5 rounded-2xl shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-amber-100 text-sm">📍 Get Directions</p>
                <p className="font-bold text-base">
                  {BUSINESS.address.line1}
                </p>
                <p className="text-amber-100 text-xs">
                  {BUSINESS.address.line3} {BUSINESS.address.line4}
                </p>
              </div>
            </a>

            {/* Info note */}
            <div className="bg-white rounded-2xl p-4 border border-green-100">
              <p className="font-tamil text-green-800 font-semibold text-sm mb-1">📋 சேவை பெற:</p>
              <ul className="font-tamil text-gray-600 text-xs space-y-1.5">
                <li>✅ படிவத்தை நிரப்பவும் — WhatsApp-ல் அனுப்பப்படும்</li>
                <li>✅ அல்லது நேரடியாக அழைக்கவும்</li>
                <li>✅ WhatsApp செய்தி அனுப்பவும்</li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleWhatsApp}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
            >
              <h3 className="font-tamil font-black text-green-900 text-xl mb-1">சேவை விசாரணை படிவம்</h3>
              <p className="text-gray-400 text-sm mb-6">Service Enquiry Form — submitted via WhatsApp</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    பெயர் <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    மொபைல் எண் <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    pattern="[0-9]{10}"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Village */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    கிராமம் / இடம்
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={form.village}
                    onChange={handleChange}
                    placeholder="Village / Location"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    தேவையான சேவை <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select Service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Crop */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    பயிர் வகை
                  </label>
                  <input
                    type="text"
                    name="crop"
                    value={form.crop}
                    onChange={handleChange}
                    placeholder="e.g., Paddy / நெல்"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Land area */}
                <div>
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    நில அளவு
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    placeholder="e.g., 2 Acres"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Date */}
                <div className="sm:col-span-2">
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    விரும்பிய தேதி
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="font-tamil text-gray-700 text-sm font-semibold block mb-1">
                    கூடுதல் செய்தி
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any additional information..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                <span className="font-tamil">சேவை குறித்து விசாரிக்கவும்</span>
                <Send size={16} />
              </button>
              <p className="text-center text-gray-400 text-xs mt-3 font-tamil">
                இந்த படிவம் WhatsApp மூலம் அனுப்பப்படும்
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

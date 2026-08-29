import { motion } from 'framer-motion';
import { IMAGES } from '../data/constants';

export default function FarmerTrust() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.harvesterInPlace}
          alt="K.A.S Harvesters in the paddy field"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/75 to-green-950/85" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative wheat icon */}
          <div className="text-5xl mb-6">🌾</div>

          <h2 className="font-tamil text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            விவசாயம் வளர்ந்தால்...
            <br />
            <span className="text-amber-400">நாடும் வளரும்.</span>
          </h2>

          <p className="font-tamil text-xl sm:text-2xl text-green-200 font-medium mb-8 leading-relaxed">
            விவசாயிகளின் உழைப்புக்கு துணையாக இருப்பதே எங்கள் நோக்கம்.
          </p>

          <p className="font-tamil text-base text-green-300 mb-10">
            நவீன இயந்திரம் • சிறந்த சேவை • நம்பிக்கையான வேலை
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7010453539"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <span>📞</span>
              <span className="font-tamil">அறுவடை சேவைக்கு அழைக்கவும்</span>
            </a>
            <a
              href="https://wa.me/917010453539?text=%E0%AE%B5%E0%AE%A3%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D%20K.A.S%20Harvesters"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

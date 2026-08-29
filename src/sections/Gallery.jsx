import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Camera, Video } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { GALLERY_ITEMS, VIDEOS, BUSINESS } from '../data/constants';

const CATEGORIES = [
  { id: 'all', labelTa: 'அனைத்து' },
  { id: 'harvester', labelTa: 'ஹார்வெஸ்டர்' },
  { id: 'tractor', labelTa: 'டிராக்டர்' },
  { id: 'lorry', labelTa: 'லாரி' },
  { id: 'field', labelTa: 'வயல் பணி' },
];

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
        aria-label="Close video"
      >
        <X size={20} />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl shadow-2xl bg-black max-h-[80vh]"
        />
        <div className="mt-3 text-center">
          <p className="font-tamil text-white font-bold text-lg">{video.titleTa}</p>
          <p className="font-tamil text-gray-400 text-sm mt-1">{video.descTa}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // Filter gallery items:
  // If 'field', we map to 'harvester' or filter nicely.
  // Let's fallback to specific logic or filter by category field.
  const filtered = GALLERY_ITEMS.filter((img) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'field') {
      return img.category === 'harvester' && img.caption.includes('வயல்');
    }
    return img.category === activeCategory;
  }).slice(0, 6); // Limit to 6 items to match the 3x2 grid of mockup

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  // Keyboard navigation
  const handleKey = (e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <SectionWrapper id="gallery" className="py-16 bg-white relative" onKeyDown={handleKey}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Left Column: Photo Gallery (60% Width) ── */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-6 text-left">
              எங்கள் பணியின் புகைப்படங்கள்
            </h2>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-tamil font-bold transition-all border ${activeCategory === cat.id
                      ? 'bg-[#0B3A1C] text-white border-[#0B3A1C]'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  {cat.labelTa}
                </button>
              ))}
            </div>

            {/* Photos Grid (3x2 layout matching mockup) */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((img, i) => (
                  <motion.button
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    onClick={() => openLightbox(i)}
                    className="relative group rounded-xl overflow-hidden aspect-video bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FAB818]"
                    aria-label={`View ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* View More Photos Button */}
            <div className="mt-auto text-left">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0B3A1C] hover:bg-[#072412] text-white px-5 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-md transition-all font-tamil"
              >
                <Camera size={15} />
                <span>View More Photos 📷</span>
              </a>
            </div>
          </div>

          {/* Divider between columns */}
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-gray-150 h-full justify-self-center" />

          {/* ── Right Column: Videos (40% Width) ── */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] mb-2 text-left">
              எங்கள் இயந்திரங்கள் செயல்பாட்டில் 🌿
            </h2>
            <p className="font-tamil text-xs md:text-sm text-gray-500 font-semibold mb-6 text-left">
              எங்கள் இயந்திரங்கள் வயலில் எப்படி செயல்படுகின்றன என்பதை பாருங்கள்
            </p>

            {/* Videos stack */}
            <div className="space-y-4 mb-6">
              {VIDEOS.map((video, idx) => (
                <div key={video.src} className="flex gap-4 items-center bg-white border border-gray-100 p-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all">

                  {/* Thumbnail with Play Button Overlay */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="relative w-28 h-18 rounded-xl overflow-hidden bg-gray-100 shrink-0 cursor-pointer block group focus:outline-none focus:ring-2 focus:ring-[#FAB818]"
                  >
                    <img
                      src={video.poster}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-colors" />
                    {/* Play circle icon matching mockup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={13} className="text-white fill-current ml-0.5" />
                      </div>
                    </div>
                  </button>

                  {/* Video text details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans font-black text-xs md:text-sm text-gray-900 truncate leading-snug">
                      {video.title}
                    </h3>
                    <p className="font-tamil font-black text-[11px] md:text-xs text-[#0B3A1C] mt-0.5 truncate leading-tight">
                      {video.titleTa}
                    </p>
                    <p className="font-tamil text-gray-400 text-[10px] md:text-[11px] leading-tight truncate mt-1">
                      {video.descTa}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* View More Videos Button */}
            <div className="mt-auto text-left">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0B3A1C] hover:bg-[#072412] text-white px-5 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-md transition-all font-tamil"
              >
                <Video size={15} />
                <span>View More Videos 🎥</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox for Gallery */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex]?.src}
                alt={filtered[lightboxIndex]?.alt}
                className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
              <div className="text-center">
                <p className="font-tamil text-white text-base">{filtered[lightboxIndex]?.caption}</p>
                <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
}

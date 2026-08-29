import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Camera, Video } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { VIDEOS, BUSINESS } from '../data/constants';



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

// The 6 specific photos to showcase
const PHOTO_ITEMS = [
  { src: '/images/tractor-karthar-lorry.jpeg',   alt: 'K.A.S Harvesters Kartar 4000 Combine Harvester', caption: 'Kartar 4000 Combine Harvester' },
  { src: '/images/karthar-01.jpeg',             alt: 'Kartar Harvester close view',                     caption: 'Kartar Harvester close view' },
  { src: '/images/karthar-in-place.jpeg',       alt: 'Kartar Harvester in field',                       caption: 'Kartar Harvester in field' },
  { src: '/images/karthar-with-lorry-02.jpeg',  alt: 'K.A.S Harvesters combine harvester with lorry',   caption: 'Harvester with Lorry' },
  { src: '/images/karthar-with-lorry-03.jpeg',  alt: 'Harvester with transport lorry',                  caption: 'Harvester with transport lorry' },
  { src: '/images/karthar-with-lorry.jpeg',     alt: 'Kartar harvester loaded on lorry',                caption: 'Kartar harvester loaded on lorry' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + PHOTO_ITEMS.length) % PHOTO_ITEMS.length);
  const next = () => setLightboxIndex((i) => (i + 1) % PHOTO_ITEMS.length);

  const handleKey = (e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <SectionWrapper id="gallery" className="py-16 bg-[#f7faf7] relative" onKeyDown={handleKey}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Left Column: Photo Gallery ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Section header */}
            <div className="mb-7">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1 h-6 rounded-full bg-[#FAB818] inline-block" />
                <p className="text-[#FAB818] font-bold text-xs uppercase tracking-widest">Our Work</p>
              </div>
              <h2 className="font-tamil text-2xl md:text-3xl font-black text-[#0B3A1C] leading-tight">
                எங்கள் பணியின் புகைப்படங்கள்
              </h2>
              <p className="text-gray-500 text-xs mt-1">Click any photo to view full size</p>
            </div>

            {/* Magazine layout: 1 large hero + 2-col grid */}
            <div className="flex flex-col gap-3">

              {/* Row 1: Featured large image */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => openLightbox(0)}
                className="relative group w-full rounded-2xl overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FAB818]"
                style={{ height: '240px' }}
                aria-label={PHOTO_ITEMS[0].alt}
              >
                <img
                  src={PHOTO_ITEMS[0].src}
                  alt={PHOTO_ITEMS[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Caption badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <span className="font-bold text-white text-sm drop-shadow leading-tight">
                    {PHOTO_ITEMS[0].caption}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Camera size={13} className="text-white" />
                  </span>
                </div>
              </motion.button>

              {/* Row 2: 2 medium images */}
              <div className="grid grid-cols-2 gap-3">
                {PHOTO_ITEMS.slice(1, 3).map((img, i) => (
                  <motion.button
                    key={img.src}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => openLightbox(i + 1)}
                    className="relative group rounded-2xl overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FAB818]"
                    style={{ height: '160px' }}
                    aria-label={img.alt}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="font-bold text-white text-[11px] leading-tight line-clamp-1 drop-shadow">
                        {img.caption}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Row 3: 3 small images */}
              <div className="grid grid-cols-3 gap-3">
                {PHOTO_ITEMS.slice(3, 6).map((img, i) => (
                  <motion.button
                    key={img.src}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    onClick={() => openLightbox(i + 3)}
                    className="relative group rounded-xl overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FAB818]"
                    style={{ height: '110px' }}
                    aria-label={img.alt}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="font-bold text-white text-[10px] leading-tight line-clamp-2 drop-shadow block">
                        {img.caption}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View More Photos Button */}
            <div className="mt-5">
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
          <div className="hidden lg:block lg:col-span-1 w-[1px] bg-gray-200 h-full justify-self-center" />

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
                src={PHOTO_ITEMS[lightboxIndex]?.src}
                alt={PHOTO_ITEMS[lightboxIndex]?.alt}
                className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
              />
              <div className="text-center">
                <p className="font-tamil text-white text-base">{PHOTO_ITEMS[lightboxIndex]?.caption}</p>
                <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {PHOTO_ITEMS.length}</p>
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

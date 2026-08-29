import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { VIDEOS } from '../data/constants';

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4"
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
          className="w-full rounded-xl shadow-2xl bg-black max-h-[80vh]"
        />
        <div className="mt-3 text-center">
          <p className="font-tamil text-white font-bold text-lg">{video.titleTa}</p>
          <p className="font-tamil text-gray-400 text-sm mt-1">{video.descTa}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <SectionWrapper id="videos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full border border-green-200 mb-4">
            <span>🎬</span>
            <span>Videos</span>
          </div>
          <h2 className="font-tamil text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 mb-2">
            எங்கள் இயந்திரங்கள் செயல்பாட்டில்
          </h2>
          <p className="font-tamil text-amber-700 font-medium text-base">
            எங்கள் இயந்திரங்கள் வயலில் எப்படி செயல்படுகின்றன என்பதை பாருங்கள்
          </p>
          <p className="text-gray-400 text-sm mt-1">Watch our machinery in action on the fields</p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="group"
            >
              {/* Thumbnail card */}
              <button
                onClick={() => setActiveVideo(video)}
                className="relative w-full rounded-2xl overflow-hidden aspect-video bg-gray-800 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md hover:shadow-xl transition-all"
                aria-label={`Play video: ${video.title}`}
              >
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-xl">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
                  Video
                </div>
              </button>

              {/* Video info */}
              <div className="mt-3 px-1">
                <h3 className="font-tamil font-bold text-green-900 text-base">{video.titleTa}</h3>
                <p className="font-tamil text-gray-500 text-sm mt-0.5">{video.descTa}</p>
                <p className="text-gray-400 text-xs mt-0.5">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

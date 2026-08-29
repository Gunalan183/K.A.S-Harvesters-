import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS } from '../data/constants';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-green-200 shadow-2xl">
      <div className="flex">
        <a
          href={BUSINESS.phoneLink}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-green-700 text-white hover:bg-green-800 transition-colors active:scale-95"
          aria-label="Call K.A.S Harvesters"
        >
          <Phone size={22} />
          <span className="text-xs font-semibold font-tamil">அழைக்கவும்</span>
        </a>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors active:scale-95"
          aria-label="WhatsApp K.A.S Harvesters"
        >
          <MessageCircle size={22} />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-amber-500 text-white hover:bg-amber-600 transition-colors active:scale-95"
          aria-label="Get Directions to K.A.S Harvesters"
        >
          <MapPin size={22} />
          <span className="text-xs font-semibold font-tamil">இருப்பிடம்</span>
        </a>
      </div>
    </div>
  );
}

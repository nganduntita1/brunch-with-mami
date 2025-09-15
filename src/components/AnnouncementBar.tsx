
import React, { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-agenda-dark text-white py-2 px-4 text-center relative">
      <p className="text-sm font-montserrat tracking-wide">
        JOIN THE SISTERHOOD  · SIGN UP FOR OUR NEWSLETTER
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBar;

import { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/lib/utils";

export const Lightbox = ({ images, index, onClose, onNext, onPrev }) => {
  useScrollLock(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) onNext();
      if (e.key === "ArrowLeft" && images.length > 1) onPrev();
    },
    [onClose, onNext, onPrev, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50 p-4",
        "transition-opacity duration-200 ease-snappy",
        visible ? "bg-black/80 opacity-100" : "bg-black/80 opacity-0"
      )}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200 ease-snappy"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button
          className="absolute left-4 text-white/80 hover:text-white transition-colors duration-200 ease-snappy"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className={cn(
          "max-h-[90vh] max-w-full object-contain rounded-lg",
          "transition-[opacity,transform] duration-200 ease-snappy",
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          className="absolute right-4 text-white/80 hover:text-white transition-colors duration-200 ease-snappy"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

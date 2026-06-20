import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { snap, cardHoverVariants } from "@/lib/motion";

export const Card = ({ className, children }) => (
  <motion.div
    variants={cardHoverVariants}
    initial="idle"
    whileHover="hover"
    whileTap="tap"
    transition={snap}
    className={cn("group h-full flex flex-col bg-card rounded-lg overflow-hidden will-change-transform", className)}
  >
    {children}
  </motion.div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const CardImage = ({ src, alt, onClick, className }) => (
  <div
    className={cn("h-48 shrink-0 overflow-hidden", onClick && "cursor-pointer", className)}
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-[400ms] ease-snappy group-hover:scale-105"
    />
  </div>
);

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

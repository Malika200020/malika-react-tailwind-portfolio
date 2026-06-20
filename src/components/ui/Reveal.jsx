import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { gentle } from "@/lib/motion";

export const Reveal = ({ children, delay = 0, className, margin = "-80px" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...gentle, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  className: PropTypes.string,
  margin: PropTypes.string,
};

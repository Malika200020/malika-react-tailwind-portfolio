import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export const Tag = ({ children, className }) => (
  <span
    className={cn(
      "px-2 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground",
      className
    )}
  >
    {children}
  </span>
);

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
